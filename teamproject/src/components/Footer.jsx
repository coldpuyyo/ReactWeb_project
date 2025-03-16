import React from "react";
import { FooterContainer, FooterContent, FooterLinks, FooterInfo } from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="#">회사소개</a>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">기업 구매</a>
          <a href="#">제휴문의</a>
        </FooterLinks>
        <FooterInfo>
          <p>경기 부천시 원미구 부천로29번길 7</p>
          <p>대표 이메일: <a href="sihn7770@gmail.com">sihn7770@gmail.com</a></p>
          <p>고객센터: 1544-1111 | 사업자등록번호: 123-45-67890 | 통신판매업신고번호: 제1111호</p>
          <p>Copyright © mohanu All Right Reserved.</p>
        </FooterInfo>
      </FooterContent>
  </FooterContainer>
  );
}

export default Footer;
