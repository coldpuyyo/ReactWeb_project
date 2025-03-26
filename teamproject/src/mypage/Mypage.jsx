import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import Logout from "../logout/Logout";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { CustomerService, Div1, Div2, EventList, MyBox, MyCart, MyInfoButton, MyOrder, MypageContainer, Myshoping, Wrapper } from "./Mypagestyle";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [userName, setUserName] = useState("고객");
    const [clientId, setClientId] = useState(null); // clientId 초기값 설정
    const [cartlength, setCartlength] = useState(0); // 개수를 저장할 변수
    const navigate = useNavigate();
    const [purchaselength, setPurchaselength] = useState(0);

    const goCart = () => {
        navigate("/cart");
    };

    const goPurchasList = () => {
        navigate("/purchasList");
    };

    // 사용자 정보 가져오기
    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const useremail = sessionStorage.getItem("email");
                const response = await axios.get("http://localhost:3001/client");
                const clients = response.data;
                const loggedInUser = clients.find(client => client.email === useremail);

                if (loggedInUser) {
                    setUserName(loggedInUser.name);
                    setClientId(loggedInUser.id); // clientId 설정
                }
            } catch (error) {
                setUserName("고객");
            }
        };

        fetchUserName();
    }, []);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                if (!clientId) return; // clientId가 없으면 실행 안 함

                const cartResponse = await axios.get("http://localhost:3001/cart");
                const userCart = cartResponse.data.filter(item => item.clientId === clientId);

                console.log("사용자의 장바구니 데이터:", userCart); // 장바구니 데이터 확인

                setCartlength(userCart.length); // 개수 설정
                console.log("장바구니 개수:", userCart.length); // 개수 확인
            } catch (error) {
                console.error("장바구니 데이터를 불러오는 중 오류 발생:", error);
                setCartlength(0);
            }
        };

        fetchCartData();
    }, [clientId]);

    useEffect(() => {
        const fetchPurchaseData = async () => {
            try {
                if (!clientId) return;

                const purchaseResponse = await axios.get("http://localhost:3001/purchaseList");
                console.log("전체 구매 내역 데이터:", purchaseResponse.data);

                const userPurchases = purchaseResponse.data.filter(item => item.clientId === clientId);
                console.log("현재 유저의 구매 내역:", userPurchases);

                if (userPurchases.length === 0) {
                    setPurchaselength(0);
                    return;
                }

                setPurchaselength(userPurchases.length);
                console.log("구매 내역 개수:", userPurchases.length);
            } catch (error) {
                console.error("구매 내역 데이터를 불러오는 중 오류 발생:", error);
                setPurchaselength(0);
            }
        };

        fetchPurchaseData();
    }, [clientId]);

    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <Div1 />
                <MypageContainer>
                    <MyBox>
                        <MyInfoButton type="submit">
                            안녕하세요 {userName}님&nbsp;
                            <FontAwesomeIcon icon={faChevronRight} />
                        </MyInfoButton>
                        <Logout />
                        <div>&nbsp;</div>
                        <Wrapper>
                            <MyOrder onClick={goPurchasList}>주문 내역
                                <br />
                                <br />
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    &nbsp;{purchaselength}건
                                </span>
                            </MyOrder>
                            <MyCart onClick={goCart}>장바구니
                                <br />
                                <br />
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    &nbsp;{cartlength}개
                                </span>
                            </MyCart>
                        </Wrapper>
                    </MyBox>
                    <Myshoping>
                        <span>나의 쇼핑</span>
                        <br />
                        <a href="#">나의 리뷰</a>
                        <br />
                        <a href="#">전체 리뷰</a>
                        <br />
                        <a href="#">배송지 목록</a>
                    </Myshoping>
                </MypageContainer>
                <EventList>
                    <span>이벤트</span>
                    <br />
                    <a href="#">기획전</a>
                </EventList>
                <CustomerService>
                    <span>고객센터</span>
                    <br />
                    <a href="#">공지사항</a>
                    <br />
                    <a href="#">고객센터</a>
                    <br />
                    <a href="#">FAQ</a>
                </CustomerService>
                <Div2 />
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Mypage;
