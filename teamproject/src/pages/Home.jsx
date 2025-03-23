import React from "react";
import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import NoticeBox from "../components/NoticeBox"
import CategoryBanner from "../components/CategoryBanner";
import ProductList from "../components/ProductList";
import { PageContainer, ContentWrapper } from "../styles/commonStyles";
import Footer from "../components/Footer";
import { FooterWrapper } from "../styles/FooterStyles";
import { HeaderWrapper } from "../header/HeaderStyle";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <br/>
          <Banner />
          <CategoryMenu />
          <NoticeBox />
          <CategoryBanner />
          <ProductList />
          <FooterWrapper>
          <Footer />
          </FooterWrapper>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default Home;
