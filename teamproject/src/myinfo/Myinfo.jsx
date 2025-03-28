import Footer from "../components/Footer";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";

const Myinfo = () => {

    return (
        <>
        <MainContainer>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>

            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </MainContainer>
        </>
    );
}

export default Myinfo;