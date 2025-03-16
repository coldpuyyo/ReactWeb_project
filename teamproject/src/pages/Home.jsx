import React from "react";
import Header from "../header/Header";
import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import CategoryBanner from "../components/CategoryBanner";
import ProductList from "../components/ProductList";
import { PageContainer, ContentWrapper } from "../styles/commonStyles";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Banner />
          <CategoryMenu />
          <CategoryBanner />
          <ProductList />
          <Footer />
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default Home;
