import Footer from "../components/Footer";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";


const Cart = () => {
    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header/>
                </HeaderWrapper>

                <form>장바구니
                    <div></div>
                </form>

                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Cart;