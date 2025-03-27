import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Div1, Div2 } from "../DetailStyledComponents/Detail";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import { MainContainer } from "../MainContainerGrid";
import { FooterWrapper } from "../styles/FooterStyles";
import { BuyButton, Card, CartWrapper, Img, KeepshopButton, Text } from "./CartStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal"; // 모달 컴포넌트 import

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientId, setClientId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // 로그인한 유저 ID 가져오기
  useEffect(() => {
    const fetchClientId = async () => {
      const userEmail = sessionStorage.getItem("email");
      if (!userEmail) {
        console.error("로그인 정보 없음");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3001/client");
        const loggedInUser = response.data.find((client) => client.email === userEmail);
        if (loggedInUser) {
          setClientId(loggedInUser.id);
        } else {
          console.error("해당 email의 회원 없음");
        }
      } catch (error) {
        console.error("클라이언트 데이터 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientId();
  }, []);

  // 장바구니 데이터 가져오기
  useEffect(() => {
    if (!clientId) return;

    const fetchCartData = async () => {
      try {
        const cartResponse = await axios.get("http://localhost:3001/cart");
        const userCart = cartResponse.data.filter((item) => item.clientId === clientId);

        if (userCart.length === 0) {
          setCartItems([]);
          setShowModal(true); // 장바구니가 비었을 때 모달 표시
          return;
        }

        const gogiResponse = await axios.get("http://localhost:3001/gogiInfo");
        const items = userCart.map((cartItem) => {
          const gogi = gogiResponse.data.find((gogi) => gogi.id === cartItem.gogiId);
          return gogi
            ? {
                ...gogi,
                quantity: cartItem.quantity,
                cartItemId: cartItem.id,
              }
            : null;
        }).filter(Boolean);

        setCartItems(items);
      } catch (error) {
        console.error("장바구니 데이터 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [clientId]);

  // 장바구니 상품 삭제
  const handleDelete = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${cartItemId}`);
      const updatedCartItems = cartItems.filter((item) => item.cartItemId !== cartItemId);
      setCartItems(updatedCartItems);

      // 장바구니가 비어 있으면 모달 표시
      if (updatedCartItems.length === 0) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("장바구니 아이템 삭제 오류:", error);
    }
  };

  // 구매 처리
  const handlePurchase = async () => {

    const purchaseData = cartItems.map((item) => ({
      clientId,
      gogiId: item.id,
      quantity: item.quantity,
      purchaseDate: new Date().toISOString().split("T")[0],
      status: "배송중",
    }));

    try {
      await Promise.all(
        purchaseData.map((data) => axios.post("http://localhost:3001/purchaseList", data))
      );

      await Promise.all(
        cartItems.map((item) => axios.delete(`http://localhost:3001/cart/${item.cartItemId}`))
      );

      setCartItems([]);
      navigate("/purchasList");
    } catch (error) {
      console.error("구매 요청 오류:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MainContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Div1 />
        <CartWrapper>
          {cartItems.map((gogi) => (
            <Card key={gogi.cartItemId}>
              <Img src={gogi.images?.[0]?.url} alt={gogi.name} />
              <Text>{gogi.name}</Text>
              <Text>{gogi.price}원</Text>
              <Text>{gogi.quantity} 개</Text>
              <button onClick={() => handleDelete(gogi.cartItemId)}>삭제</button>
            </Card>
          ))}
        </CartWrapper>
        <KeepshopButton onClick={() => navigate("/all")}>쇼핑 계속하기</KeepshopButton>
        <BuyButton onClick={handlePurchase}>구매</BuyButton>
        <Div2 />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </MainContainer>

      {showModal && (
        <Modal
          message="장바구니가 비어있습니다. <br/><br/>홈으로 이동하시겠습니까?"
          onClose={() => setShowModal(false)}
          onConfirm={() => navigate("../home/")}
        />
      )}
    </>
  );
};

export default Cart;
