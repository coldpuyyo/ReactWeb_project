import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Div1, Div2 } from "../DetailStyledComponents/Detail";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { Card, CartWrapper, Img, Text } from "../cart/CartStyle";
import axios from "axios";
import { Link } from "react-router-dom";

const PurchaseList = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clientId, setClientId] = useState(null); // 로그인한 유저 ID 저장

    useEffect(() => {
        const fetchClientId = async () => {
            const userEmail = sessionStorage.getItem("email");
            if (!userEmail) {
                console.error("로그인 정보 없음");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("http://localhost:3001/client");
                const loggedInUser = response.data.find(client => client.email === userEmail);
                if (loggedInUser) {
                    setClientId(loggedInUser.id);
                } else {
                    console.error("해당 email의 회원 없음");
                    setLoading(false);
                }
            } catch (error) {
                console.error("클라이언트 데이터 불러오기 오류:", error);
                setLoading(false);
            }
        };

        fetchClientId();
    }, []);

    useEffect(() => {
        if (!clientId) return;

        const fetchPurchaseData = async () => {
            try {
                // 변경된 API 호출 (purchaseList로)
                const purchaseResponse = await axios.get("http://localhost:3001/purchaseList");
                console.log("전체 구매 내역 데이터:", purchaseResponse.data);

                const userPurchases = purchaseResponse.data.filter(item => item.clientId === clientId);
                console.log("현재 유저의 구매 내역:", userPurchases);

                if (userPurchases.length === 0) {
                    setPurchasedItems([]);
                    setLoading(false);
                    return;
                }

                const gogiResponse = await axios.get("http://localhost:3001/gogiInfo");
                console.log("고기 데이터:", gogiResponse.data);

                const items = userPurchases.map(purchaseItem => {
                    const gogi = gogiResponse.data.find(gogi => gogi.id === purchaseItem.gogiId);
                    if (gogi) {
                        return {
                            ...gogi,
                            quantity: purchaseItem.quantity,
                            purchaseDate: purchaseItem.purchaseDate, // purchaseDate가 여기서 가져와야 함
                            status: purchaseItem.status // 배송 상태 추가
                        };
                    }
                    return null;
                }).filter(Boolean);

                setPurchasedItems(items);
                setLoading(false);
            } catch (error) {
                console.error("구매 내역 데이터 불러오기 오류:", error);
                setLoading(false);
            }
        };

        fetchPurchaseData();
    }, [clientId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (purchasedItems.length === 0) {
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
                    {purchasedItems.map((gogi, index) => (
                        <Card key={index}>
                            <Img src={gogi.images?.[0]?.url} alt={gogi.name} />
                            <Text>{gogi.name}</Text>
                            <Text>{gogi.price}원</Text>
                            <Text>{gogi.quantity} 개</Text>
                            <Text>구매 날짜: {gogi.purchaseDate}</Text>
                            <Text>배송 상태: {gogi.status}</Text> {/* 배송 상태 표시 */}
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

export default PurchaseList;
