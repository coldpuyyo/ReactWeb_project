import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import {
    LoginContainer,
    MainContainer,
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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        const response = await fetch("로그인 서버 주소", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.status === 200) {
            setLoginCheck(false);
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("role", result.role);
            sessionStorage.setItem("storeid", result.storeId);
            console.log("로그인 성공, 이메일 주소:", result.email);
            navigate("/");
        } else {
            setLoginCheck(true);
        }
    };

    return (
        <LoginContainer>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <MainContainer>
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
                            <Label htmlFor="password">패스워드</Label>
                            <InputField
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>

                        <LoginButton type="submit">로그인버튼</LoginButton>
                    </FormContainer>

                    {loginCheck && <ErrorMessage>이메일 혹은 비밀번호가 틀렸습니다.</ErrorMessage>}

                    <SignupLink>
                        아직 회원이 아니신가요? <Link to="../signup/Signup">회원가입</Link>
                    </SignupLink>
                </LoginBox>
            </MainContainer>
        </LoginContainer>
    );
};

export default Login;
