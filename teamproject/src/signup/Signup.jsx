import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContainer } from "./SignupStyle";
import { HeaderWrapper } from "../header/HeaderStyle";
import Header from "../header/Header";
import Footer from "../components/Footer";
import { FooterWrapper } from "../styles/FooterStyles";
import { MainContainer } from "../MainContainerGrid";
import Modal from "../modal/Modal";
import SignupForm from "./SignupForm";
import { validateSignupForm } from "./Validation";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const validationError = validateSignupForm({
      email,
      username,
      userNickname,
      phoneNumber,
      password,
      confirmPassword,
    });

    if (validationError) {
      setModalMessage(validationError);
      setIsModalOpen(true);
      return;
    }

    const payload = {
      email: email,
      password: password,
      nickname: userNickname,
      name: username,
      phone: phoneNumber,
    };

    try {
      const emailResponse = await axios.get("http://localhost:3001/client");
      const existingEmail = await emailResponse.data;
      const isEmailTaken = existingEmail.some((client) => client.email === email);

      if (isEmailTaken) {
        setModalMessage("중복된 이메일입니다. \n\n다른 이메일을 입력해주세요.");
        setIsModalOpen(true);
        return;
      }

      const nicknameResponse = await axios.get("http://localhost:3001/client");
      const existingNick = await nicknameResponse.data;
      const isNicknameTaken = existingNick.some((client) => client.nickname === userNickname);

      if (isNicknameTaken) {
        setModalMessage("중복된 닉네임입니다. \n\n다른 닉네임을 입력해주세요.");
        setIsModalOpen(true);
        return;
      }

      const response = await axios.post("http://localhost:3001/client", payload);

      if (response.status === 201) {
        setModalMessage("회원가입이 완료되었습니다! 확인 버튼을 누르면 로그인 페이지로 이동합니다.");
        setIsSignupSuccess(true);
        setIsModalOpen(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setModalMessage(`회원가입 실패: ${error.response.data.email}`);
      } else {
        setModalMessage("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
      setIsSignupSuccess(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <MainContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <SignupContainer>
          <SignupForm
            onSubmit={handleSignup}
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            userNickname={userNickname}
            setUserNickname={setUserNickname}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        </SignupContainer>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </MainContainer>
      {isModalOpen && (
        <Modal
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            if (isSignupSuccess) {
              navigate("/login");
            } else {
              setIsModalOpen(false);
            }
          }}
        />
      )}
    </>
  );
};

export default Signup;