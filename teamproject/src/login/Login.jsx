import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import {
    LoginContainer,
    LoginBox,
    LoginTitle,
    FormContainer,
    InputGroup,
    InputField,
    Label,
    LoginButton,
    ErrorMessage,
    SignupLink
} from "./LoginStyle";
import { FooterWrapper } from "../styles/FooterStyles";
import Footer from "../components/Footer";
import { MainContainer } from "../MainContainerGrid";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        }

        setEmailError(false);
    
        try {
            const response = await axios.get(`http://localhost:3001/client?email=${email}`);
            const users = await response.data;
    
            if (users.length === 0 || users[0].password !== password) {
                setLoginCheck(true);
                return;
            }
    
            setLoginCheck(false);
            sessionStorage.setItem("token", "dummy-token");
            sessionStorage.setItem("email", users[0].email);
            navigate("/");
        } catch (error) {
            setLoginCheck(true);
        }
    };    

    return (
        <MainContainer>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <LoginContainer>
                <LoginBox>
                    <LoginTitle>LOGIN</LoginTitle>
                    <FormContainer onSubmit={handleLogin}>
                        <InputGroup>
                            <Label htmlFor="email">이메일</Label>
                            <InputField
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <ErrorMessage>유효한 이메일을 입력해주세요.</ErrorMessage>}
                            <Label htmlFor="password">패스워드</Label>
                            <InputField
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>

                        <LoginButton type="submit">로그인</LoginButton>
                    </FormContainer>

                    {loginCheck && <ErrorMessage><br/>이메일 혹은 비밀번호가 틀렸습니다.</ErrorMessage>}

                    <SignupLink>
                        아직 회원이 아니신가요? <Link to="../signup/">회원가입</Link>
                    </SignupLink>
                </LoginBox>
            </LoginContainer>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </MainContainer>
    );
};

export default Login;
