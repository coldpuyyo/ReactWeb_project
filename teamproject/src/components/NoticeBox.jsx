import React from "react";
import { NoticeContainer, NoticeIcon, NoticeText } from "../styles/NoticeBoxStyles";
import { FaBullhorn } from "react-icons/fa"; // FontAwesome 아이콘 사용

const NoticeBox = () => {
  return (
    <NoticeContainer>
      <NoticeIcon>
        <FaBullhorn /> {/* 📢 확성기 아이콘 */}
      </NoticeIcon>
      <NoticeText>[새벽 배송]</NoticeText>
    </NoticeContainer>
  );
};

export default NoticeBox;
