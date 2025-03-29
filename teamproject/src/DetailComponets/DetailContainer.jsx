import React, { useState } from "react";
import { ToggleContainer, TabWrapper, TabButton, ContentWrapper, Content } from "../DetailStyledComponents/Detail";

const DetailConContainer = ({ review }) => {


  const reviewText = review.length > 0 ? review.map(r => r.reviewText).join(",") : " 리뷰없음 ";


  const InfoBar = [
    { title: "상품 설명", content: "사지마세요." },
    { title: "상품 정보", content: "제조사: 없음, 원산지: 브라질" },
    { title: "리뷰", content: reviewText }
  ];




  const [indexControll, setIndexControll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(pre => !pre);
  }

  return (
    <ToggleContainer isOpen={isOpen}>
      <TabWrapper>
        {InfoBar.map((good, index) => (
          <TabButton
            key={index}
            isActive={indexControll === index}
            onClick={() => {
              setIndexControll(index);
              handleToggle();
            }}
          >
            {good.title}
          </TabButton >
        ))}
        <p>{review.text}</p>
      </TabWrapper>

      <ContentWrapper isOpen={isOpen}>
        <Content>{InfoBar[indexControll].content}</Content>
      </ContentWrapper>
    </ToggleContainer>
  );
};

export default DetailConContainer;


