import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Div1, Div2 } from "../DetailStyledComponents/Detail";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { BuyButton, Card, CartWrapper, Img, KeepshopButton, Text } from "./CartStyle";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clientId, setClientId] = useState(null); // 로그인한 유저 ID 저장

    const navigate = useNavigate();

    const goMeatAll = () => {   // 쇼핑 계속하기 버튼 클릭 시
        navigate("/meat_all");
    };

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
    const handlePurchase = () => {
        if (cartItems.length === 0) {
            alert("장바구니가 비어 있습니다.");
            return;
        }

        const purchaseData = cartItems.map(item => ({
            clientId: clientId,
            gogiId: item.id,
            quantity: item.quantity,
            purchaseDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식
            status: "배송중",
        }));

        // purchaseList에 추가
        axios.all(purchaseData.map(data => axios.post("http://localhost:3001/purchaseList", data)))
            .then(() => {
                console.log("✅ 구매 완료:", purchaseData);

                // 장바구니에서 해당 항목 삭제
                axios.all(cartItems.map(item => axios.delete(`http://localhost:3001/cart/${item.cartItemId}`)))
                    .then(() => {
                        console.log("✅ 장바구니 비우기 완료");
                        setCartItems([]);
                        alert("구매가 완료되었습니다.");
                    })
                    .catch(error => console.error("❌ 장바구니 삭제 오류:", error));
            })
            .catch(error => console.error("❌ 구매 요청 오류:", error));
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
                            <button onClick={() => handleDelete(gogi.cartItemId)}>삭제</button> {/* 🔥 삭제 버튼 */}
                        </Card>
                    ))}
                </CartWrapper>
                <KeepshopButton onClick={goMeatAll}>쇼핑 계속하기</KeepshopButton>
                <BuyButton onClick={handlePurchase}>구매</BuyButton>
                <Div2 />
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Cart;
