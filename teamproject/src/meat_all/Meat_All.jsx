import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import styled from "styled-components";

const BannerWrapper = styled.div`
  display: grid;
  grid-row: 3;
  grid-column: 2/6;
`;

const CategoryMenuWrapper = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 2/6;
`;

const ProductListWrapper = styled.div`
  display: grid;
  grid-row: 5;
  grid-column: 2/6;
`;

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