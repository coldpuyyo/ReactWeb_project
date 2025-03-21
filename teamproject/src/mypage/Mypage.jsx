import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import Logout from "../logout/Logout";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { CustomerService, Div1, Div2, EventList, MyBox, MyCart, MyInfoButton, MyOrder, MypageContainer, Myshoping, Wrapper } from "./Mypagestyle";

const Mypage = () => {
    return (
        <>
            <MainContainer>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <Div1 />
                <MypageContainer>
                    <MyBox>
                        <MyInfoButton type="submit">안녕하세요 ???님 
                            &nbsp;<FontAwesomeIcon icon={faChevronRight} />
                        </MyInfoButton>
                        <Logout />
                        <div>&nbsp;</div>
                        <Wrapper>
                        <MyOrder type="button">주문 내역
                            <br />
                            <br />
                            <span>
                                <FontAwesomeIcon icon={faChevronRight} />
                                &nbsp;0건
                            </span>
                        </MyOrder>
                        <MyCart>장바구니
                            <br />
                            <br />
                            <span>
                                <FontAwesomeIcon icon={faChevronRight} />
                                &nbsp;0개
                            </span>
                        </MyCart>
                        </Wrapper>
                    </MyBox>
                    <Myshoping>
                        <span>나의 쇼핑</span>
                        <br />
                        <a>나의 리뷰</a>
                        <br />
                        <a>전체 리뷰</a>
                        <br />
                        <a>배송지 목록</a>
                    </Myshoping>
                </MypageContainer>
                <EventList>
                    <span>이벤트</span>
                    <br />
                    <a>기획전</a>
                </EventList>
                <CustomerService>
                    <span>고객센터</span>
                    <br />
                    <a>공지사항</a>
                    <br />
                    <a>고객센터</a>
                    <br />
                    <a>FAQ</a>
                </CustomerService>
                <Div2 />
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MainContainer>
        </>
    );
};
export default Mypage;