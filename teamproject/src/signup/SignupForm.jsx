import React from "react";
import { Link } from "react-router-dom";
import { Form, LoginLink, SignupButton, SignupTitle, Wrapper } from "./SignupStyle";

const SignupForm = ({ onSubmit, email, setEmail, username, setUsername, userNickname, setUserNickname, phoneNumber, setPhoneNumber, password, setPassword, confirmPassword, setConfirmPassword }) => {
    return (
        <Form className="signup-form" onSubmit={onSubmit}>
            <SignupTitle>회원가입</SignupTitle>
            <label htmlFor="email">이메일</label>
            <input
                type="email"
                id="email"
                value={email}
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">성명</label>
            <input
                type="text"
                id="username"
                value={username}
                placeholder="성명을 입력해주세요"
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="nickname">닉네임</label>
            <input
                type="text"
                id="nickname"
                value={userNickname}
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setUserNickname(e.target.value)}
            />
            <label htmlFor="phone-number">전화번호</label>
            <input
                type="text"
                id="phone-number"
                value={phoneNumber}
                placeholder="010-XXXX-XXXX"
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="password">비밀번호</label>
            <input
                type="password"
                id="password"
                value={password}
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <Wrapper>
                <SignupButton type="submit">
                    회원가입
                </SignupButton>
                <LoginLink>
                    이미 회원이신가요? <Link to="/login">로그인</Link>
                </LoginLink>
            </Wrapper>
        </Form>
    );
};

export default SignupForm;