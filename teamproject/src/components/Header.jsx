import React from "react";
import { HeaderContainer, Logo, Nav, NavItem, InquiryButton } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>모하누</Logo>
      
      <InquiryButton>로그인</InquiryButton>
    </HeaderContainer>
  );
};

export default Header;
