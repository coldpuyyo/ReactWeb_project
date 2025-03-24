import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Div1, Div2 } from "../DetailStyledComponents/Detail";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { Button, Card, CartWrapper, Img, Text } from "./CartStyle";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clientId, setClientId] = useState(null); // 로그인한 유저 ID 저장

    useEffect(() => {
        const fetchClientId = () => {
            const userEmail = sessionStorage.getItem("email");
            if (!userEmail) {
                console.error("로그인 정보 없음");
                setLoading(false);
                return;
            }

            axios.get("http://localhost:3001/client")
                .then(response => {
                    const loggedInUser = response.data.find(client => client.email === userEmail);
                    if (loggedInUser) {
                        setClientId(loggedInUser.id);
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
        if (!clientId) return;

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

                            const items = userCart.map(cartItem => {
                                const gogi = gogiResponse.data.find(gogi => gogi.id === cartItem.gogiId);
                                if (gogi) {
                                    return { 
                                        ...gogi, 
                                        quantity: cartItem.quantity, 
                                        cartItemId: cartItem.id  // 🔥 cartItem의 id 저장 (삭제에 필요)
                                    }; 
                                }
                                return null;
                            }).filter(Boolean);

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

    // 🔥 삭제 버튼 클릭 시 해당 아이템 삭제
    const handleDelete = (cartItemId) => {
        axios.delete(`http://localhost:3001/cart/${cartItemId}`)
            .then(() => {
                console.log(`✅ 장바구니 아이템 삭제 완료: ${cartItemId}`);
                setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
                alert("상품이 장바구니에서 삭제되었습니다.");
            })
            .catch(error => {
                console.error("❌ 장바구니 아이템 삭제 오류:", error);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (cartItems.length === 0) {
        return <Link to="../home/"><button>홈으로</button></Link>;
    
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
                        <Card key={gogi.cartItemId}> {/* 🔥 cartItemId 사용 */}
                            <Img src={gogi.images?.[0]?.url} alt={gogi.name} />
                            <Text>{gogi.name}</Text>
                            <Text>{gogi.price}원</Text>
                            <Text>{gogi.quantity} 개</Text>
                            <Button onClick={() => handleDelete(gogi.cartItemId)}>삭제</Button> {/* 🔥 삭제 버튼 */}
                        </Card>
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
