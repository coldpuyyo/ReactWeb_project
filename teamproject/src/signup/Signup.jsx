import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, LoginLink, SignupButton, SignupContainer, SignupTitle, Wrapper } from "./SignupStyle";
import { HeaderWrapper } from "../header/HeaderStyle";
import Header from "../header/Header";
import Footer from "../components/Footer";
import { FooterWrapper } from "../styles/FooterStyles";
import { MainContainer } from "../MainContainerGrid";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const payload = {
      email: email,
      password: password,
      nickname: userNickname,
      name: username,
      phone: phoneNumber,
      role: role,
    };

    try {
      const response = await fetch(
        "요청지 주소",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        console.log("성공! 이메일주소: " + data.email);
        navigate("/login");
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${data.email}`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <>
    <MainContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SignupContainer>
        <Form className="signup-form" onSubmit={handleSignup}>
          <SignupTitle>회원가입</SignupTitle>

          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="username">성명</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
          />

          <label htmlFor="phone-number">전화번호</label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br/>
          <Wrapper>
          <SignupButton onClick={handleSignup}>
            회원가입
          </SignupButton>

          <LoginLink>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </LoginLink>
          </Wrapper>
        </Form>
      </SignupContainer>
      <FooterWrapper>
      <Footer/>
      </FooterWrapper>
    </MainContainer>
    </>
  );
};

export default Signup;