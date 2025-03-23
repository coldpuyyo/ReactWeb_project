import React from "react";
import { NoticeContainer, NoticeIcon, NoticeText } from "../styles/NoticeBoxStyles";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoticeBox = () => {
  return (
    <NoticeContainer>
      <NoticeIcon>
      <FontAwesomeIcon icon={faBullhorn} /> {/* 📢 확성기 아이콘 */}
      </NoticeIcon>
      <NoticeText>[새벽 배송]</NoticeText>
    </NoticeContainer>
  );
};

export default NoticeBox;
