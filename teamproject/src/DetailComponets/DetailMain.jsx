import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContentWrapper, Div1, Div2 } from "../DetailStyledComponents/Detail";
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

    useEffect(() => {
        axios.get("http://localhost:3000/gogiInfo")
            .then((response) => {
                const product = response.data.find((item) => Number(item.id) === Number(id));
                setGogiData(product || null);
            })
            .catch((error) => {
                console.error("데이터 안불러짐 콘솔 확인:", error);
            });
    }, [id]);

    if (!gogiData) {
        return <p>로딩중...</p>;
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

                <DetailConContainer />

            </DetailContentWrapper>

            <Div2 />

            <FooterWrapper>
                <Footer />
            </FooterWrapper>

        </MainContainer>
    );
};

export default DetailMain;
