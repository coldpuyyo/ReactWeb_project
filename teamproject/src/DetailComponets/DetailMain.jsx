import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BuyButton, DetailContentWrapper, Div1, Div2, Wrapper } from "../DetailStyledComponents/Detail";
import DetailConContainer from "./DetailContainer";
import ImageSlider from "./ImageSlider";
import DetailInfo from "./DetailInfo";
import { HeaderWrapper } from './../header/HeaderStyle';
import Header from "../header/Header";
import Footer from './../components/Footer';
import { FooterWrapper } from "../styles/FooterStyles";
import { MainContainer } from "../MainContainerGrid";

const DetailMain = () => {
    const { id } = useParams();
    const [gogiData, setGogiData] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    const navigate = useNavigate();
    const [clientId, setClientId] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // 1️⃣ 로그인한 유저의 clientId 가져오기
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
                    setClientId(loggedInUser.id); // 로그인한 유저의 clientId 저장
                } else {
                    console.error("해당 email의 회원 없음");
                }
            })
            .catch(error => console.error("클라이언트 데이터 불러오기 오류:", error));
    }, []);

    // 2️⃣ 선택한 상품 데이터 가져오기
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

    // 3️⃣ 리뷰 데이터 가져오기
    useEffect(() => {
        axios.get("http://localhost:3001/review")
            .then((response) => {
                setReviewData(response.data);
            })
            .catch((error) => {
                console.log("리뷰 데이터 안불러짐 콘솔 확인", error);
            }).finally(() => setLoading(false));
    }, []);

    // 4️⃣ 장바구니에 상품 추가 함수
    // 🔥 5️⃣ 장바구니에 상품 추가 함수 (수량 자동 증가)
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
                // 🔥 기존 장바구니에 상품이 있으면 수량 증가 (PATCH 요청)
                axios.patch(`http://localhost:3001/cart/${existingCartItem.id}`, {
                    quantity: existingCartItem.quantity + 1 // 항상 +1
                })
                .then(() => {
                    console.log("장바구니 수량 업데이트:", existingCartItem.gogiId, "새 수량:", existingCartItem.quantity + 1);
                    alert("장바구니 수량이 증가했습니다!");
                    navigate('/cart');
                })
                .catch(error => console.error("장바구니 수량 업데이트 오류:", error));
            } else {
                // 🔥 장바구니에 새 상품 추가 (POST 요청)
                const cartItem = {
                    clientId: clientId,
                    gogiId: gogiData.id,
                    quantity: 1 // 수량 기본값 1
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


    // 5️⃣ 선택한 상품의 리뷰 필터링
    const gogiAndReview = (reviewData || []).filter(review => review.gogiId === gogiData?.id);

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

                <DetailConContainer review={gogiAndReview} />
            </DetailContentWrapper>
            <Div2 />
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </MainContainer>
    );
};

export default DetailMain;


