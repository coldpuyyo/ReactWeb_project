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
import { useParams } from "react-router-dom";

const Cart = () => {
    const { id } = useParams();
    const [gogiData, setGogiData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/gogiInfo")
            .then((response) => {
                console.log("서버 응답 데이터:", response.data); // 데이터 확인
                // id가 일치하는 고기 데이터 찾기
                const product = response.data.find((gogiInfo) => Number(gogiInfo.id) === Number(id));
                console.log("찾은 고기 데이터:", product); // 필터링된 데이터 확인
                setGogiData(product || null);
            })
            .catch((error) => {
                console.error("데이터 안불러짐 콘솔 확인", error);
            });
    }, [id]);


    if (!gogiData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <Div1 />
                <CartWrapper>
                    <Img images={gogiData?.images?.[0]} />
                    <MeatName gogi={gogiData?.name} />
                    <button>삭제</button>
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