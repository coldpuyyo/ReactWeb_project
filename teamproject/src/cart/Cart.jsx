import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Div1, Div2 } from "../DetailStyledComponents/Detail";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { CartWrapper, Img } from "./CartStyle";
import axios from "axios";
import MeatName from "./MeatName";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clientId, setClientId] = useState(null); // 로그인한 유저 ID 저장

    useEffect(() => {
        const fetchClientId = () => {
            const userEmail = sessionStorage.getItem("email"); // 🔥 로그인한 유저의 이메일 가져오기
            if (!userEmail) {
                console.error("로그인 정보 없음");
                setLoading(false);
                return;
            }

            axios.get("http://localhost:3001/client")
                .then(response => {
                    const loggedInUser = response.data.find(client => client.email === userEmail);
                    if (loggedInUser) {
                        setClientId(loggedInUser.id); // 🔥 clientId 저장
                    } else {
                        console.error("해당 email의 회원 없음");
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.error("클라이언트 데이터 불러오기 오류:", error);
                    setLoading(false);
                });
        };

        fetchClientId();
    }, []);

    useEffect(() => {
        if (!clientId) return; // 🔥 clientId가 설정되지 않으면 실행 X

        const fetchCartData = () => {
            axios.get("http://localhost:3001/cart")
                .then(cartResponse => {
                    console.log("전체 장바구니 데이터:", cartResponse.data);

                    const userCart = cartResponse.data.filter(item => item.clientId === clientId);
                    console.log("현재 유저의 장바구니:", userCart);

                    if (userCart.length === 0) {
                        setCartItems([]);
                        setLoading(false);
                        return;
                    }

                    axios.get("http://localhost:3001/gogiInfo")
                        .then(gogiResponse => {
                            console.log("고기 데이터:", gogiResponse.data);

                            const items = userCart.map(cartItem =>
                                gogiResponse.data.find(gogi => gogi.id === cartItem.gogiId)
                            ).filter(Boolean); // null 값 제거

                            setCartItems(items);
                            setLoading(false);
                        })
                        .catch(error => {
                            console.error("고기 데이터 불러오기 오류:", error);
                            setLoading(false);
                        });
                })
                .catch(error => {
                    console.error("장바구니 데이터 불러오기 오류:", error);
                    setLoading(false);
                });
        };

        fetchCartData();
    }, [clientId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (cartItems.length === 0) {
        return <p>장바구니가 비어 있습니다.</p>;
    }

    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <Div1 />
                <CartWrapper>
                    {cartItems.map((gogi) => (
                        <div key={gogi.id}>
                            <Img src={gogi.images?.[0]?.url} alt={gogi.name} />
                            <MeatName gogi={gogi} />
                            <button>삭제</button>
                        </div>
                    ))}
                </CartWrapper>
                <Div2 />
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Cart;
