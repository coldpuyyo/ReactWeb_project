import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BottonWrapper, DelButton, H2, Info, ModifyButton, MyinfoContainer } from "./MyinfoStyle";
import { Div1, Div2 } from './../mypage/Mypagestyle';


const Myinfo = () => {
    const email = sessionStorage.getItem("email");

    const [user, setUser] = useState({
        name: "유저",
        email: "None@naver.com",
        nickname: "닉네임",
        phoneNumber: "010-0000-0000",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/client?email=${email}`);
                
                console.log("API 응답:", response.data);
    
                if (response.status === 200 && response.data.length > 0) {
                    setUser({
                        name: response.data[0].name,
                        nickname: response.data[0].nickname,
                        email: response.data[0].email,
                        phoneNumber: response.data[0].phone,
                    });
                } else {
                    console.error("사용자를 찾을 수 없습니다.");
                }
            } catch (error) {
                console.error("API 호출 오류:", error);
            }
        };
    
        fetchData();
    }, [email]);

    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <Div1/>
                <MyinfoContainer>
                    <H2>내 정보</H2>
                    <Info>성명 : {user.name}</Info>
                    <Info>닉네임 : {user.nickname}</Info>
                    <Info>이메일 : {user.email}</Info>
                    <Info>전화번호 : {user.phoneNumber}</Info>
                    <BottonWrapper>
                        <ModifyButton>회원정보 수정 
                            &nbsp;<FontAwesomeIcon icon={faChevronRight} />
                        </ModifyButton>
                        <DelButton>탈퇴 
                            &nbsp;<FontAwesomeIcon icon={faChevronRight} />
                        </DelButton>
                    </BottonWrapper>
                </MyinfoContainer>
                <Div2/>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};

export default Myinfo;
