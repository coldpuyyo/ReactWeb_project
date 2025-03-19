import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { CategoryMenuWrapper, ProductListWrapper, BannerWrapper } from "./Wrapper";



const Meat_All = () => {
    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <BannerWrapper>
                    <br />
                    <br />
                    <Banner />
                </BannerWrapper>
                <CategoryMenuWrapper>
                    <CategoryMenu />
                </CategoryMenuWrapper>
                <ProductListWrapper>
                    <ProductList />
                </ProductListWrapper>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Meat_All;