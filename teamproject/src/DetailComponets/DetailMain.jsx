import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BuyButton, DetailContentWrapper, Div1, Div2, MainContainer, Wrapper, ToggleContainer, TabWrapper, TabButton, ContentWrapper, Content } from "../DetailStyledComponents/Detail";
import ImageSlider from "./ImageSlider";
import DetailInfo from "./DetailInfo";
import { HeaderWrapper } from './../header/HeaderStyle';
import Header from "../header/Header";
import Footer from './../components/Footer';
import { FooterWrapper } from "../styles/FooterStyles";

const DetailMain = () => {
    const { id } = useParams();
    const [gogiData, setGogiData] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    const navigate = useNavigate();
    const [clientId, setClientId] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [indexControll, setIndexControll] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const userEmail = sessionStorage.getItem("email");
        if (!userEmail) {
            console.error("로그인 정보 없음");
            return;
        }

        axios.get("http://localhost:3001/client")
            .then(response => {
                const loggedInUser = response.data.find(client => client.email === userEmail);
                if (loggedInUser) {
                    setClientId(loggedInUser.id);
                } else {
                    console.error("해당 email의 회원 없음");
                }
            })
            .catch(error => console.error("클라이언트 데이터 불러오기 오류:", error));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/gogiInfo")
            .then((response) => {
                const product = response.data.find((tool) => Number(tool.id) === Number(id));
                setGogiData(product || null);
            })
            .catch((error) => {
                console.error("데이터 안불러짐 콘솔 확인", error);
            });
    }, [id]);

    useEffect(() => {
        axios.get("http://localhost:3001/review")
            .then((response) => {
                setReviewData(response.data);
            })
            .catch((error) => {
                console.log("리뷰 데이터 안불러짐 콘솔 확인", error);
            }).finally(() => setLoading(false));
    }, []);

    const addToCart = () => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        if (!clientId || !gogiData) {
            console.error("유저 정보 또는 상품 정보 없음");
            return;
        }

        axios.get("http://localhost:3001/cart")
            .then(cartResponse => {
                const userCart = cartResponse.data.filter(item => item.clientId === clientId);
                const existingCartItem = userCart.find(item => item.gogiId === gogiData.id);

                if (existingCartItem) {
                    axios.patch(`http://localhost:3001/cart/${existingCartItem.id}`, {
                        quantity: existingCartItem.quantity + 1
                    })
                        .then(() => {
                            console.log("장바구니 수량 업데이트:", existingCartItem.gogiId, "새 수량:", existingCartItem.quantity + 1);
                            alert("장바구니 수량이 증가했습니다!");
                            navigate('/cart');
                        })
                        .catch(error => console.error("장바구니 수량 업데이트 오류:", error));
                } else {
                    const cartItem = {
                        clientId: clientId,
                        gogiId: gogiData.id,
                        quantity: 1
                    };

                    axios.post("http://localhost:3001/cart", cartItem)
                        .then(() => {
                            console.log("장바구니에 추가됨:", cartItem);
                            alert("장바구니에 추가되었습니다!");
                            navigate('/cart');
                        })
                        .catch(error => console.error("장바구니 추가 오류:", error));
                }
            })
            .catch(error => console.error("장바구니 데이터 가져오기 오류:", error));
    };

    const gogiAndReview = (reviewData || []).filter(review => review.gogiId === gogiData?.id);

    const reviewText = gogiAndReview.length > 0 ? gogiAndReview.map(r => r.reviewText).join(",") : " 리뷰없음 ";

    const InfoBar = [
        { title: "상품 설명", content: "사지마세요." },
        { title: "상품 정보", content: "제조사: 없음, 원산지: 브라질" },
        { title: "리뷰", content: reviewText }
    ];

    const handleToggle = () => {
        setIsOpen(pre => !pre);
    };

    if (loading || !gogiData || !reviewData) {
        return <p>데이터 로딩 중...</p>;
    }

    return (
        <MainContainer>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <Div1 />
            <DetailContentWrapper>
                <ImageSlider images={gogiData.images} />
                <DetailInfo gogi={gogiData} />

                <BuyButton onClick={addToCart}>장바구니에 담기</BuyButton>

                <ToggleContainer isOpen={isOpen}>
                    <TabWrapper>
                        {InfoBar.map((good, index) => (
                            <TabButton
                                key={index}
                                isActive={indexControll === index}
                                onClick={() => {
                                    setIndexControll(index);
                                    handleToggle();
                                }}
                            >
                                {good.title}
                            </TabButton>
                        ))}
                        <p>{reviewText}</p>
                    </TabWrapper>

                </ToggleContainer>
            </DetailContentWrapper>
            <ContentWrapper isOpen={isOpen}>
                <Content>{InfoBar[indexControll].content}</Content>
            </ContentWrapper>
            <Div2 />
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </MainContainer>
    );
};

export default DetailMain;
