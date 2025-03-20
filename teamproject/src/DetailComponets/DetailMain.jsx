import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContentWrapper, Div1, Div2, Loading } from "../DetailStyledComponents/Detail";
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
                console.log("리뷰 테이터 안불러짐 콘솔 확인", error);
            }).finally(() => setLoading(false));
    }, []);


    const gogiAndReview = (reviewData || []).filter(review => (review.gogiId === gogiData.id));

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
