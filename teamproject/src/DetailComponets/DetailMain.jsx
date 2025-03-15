import { DetailContentWrapper } from "../DetailStyledComponents/Detail";
import DetailConContainer from "./DetailContainer";
import ImageSlider from "./ImageSlider";
import DetailInfo from "./DetailInfo";
import { HeaderWrapper } from './../header/HeaderStyle';
import Header from "../header/Header";
import { LoginContainer } from "../login/LoginStyle";

const DetailMain = () => {
    return (
        <LoginContainer>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <DetailContentWrapper>
                <ImageSlider />
                <DetailInfo />
                <DetailConContainer />
            </DetailContentWrapper>
        </LoginContainer>
    );
};

export default DetailMain;