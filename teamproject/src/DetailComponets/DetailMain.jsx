import { DetailContentWrapper, Div1, Div2 } from "../DetailStyledComponents/Detail";
import DetailConContainer from "./DetailContainer";
import ImageSlider from "./ImageSlider";
import DetailInfo from "./DetailInfo";
import { HeaderWrapper } from './../header/HeaderStyle';
import Header from "../header/Header";
import { MainContainer } from "../login/LoginStyle";
import Footer from './../components/Footer';
import { FooterWrapper } from "../styles/FooterStyles";

const DetailMain = () => {
    return (
        <MainContainer>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <Div1/>
            <DetailContentWrapper>
                <ImageSlider />
                <DetailInfo />
                <DetailConContainer />
            </DetailContentWrapper>
            <Div2/>
            <FooterWrapper>

                <Footer />
            </FooterWrapper>

        </MainContainer>
    );
};

export default DetailMain;