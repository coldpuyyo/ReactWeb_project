import React, { useState } from "react";
import {
  DetailConWrapper,
  DetailConItem,
  DetailConTitle,
  DetailConContent
} from "../DetailStyledComponents/Detail";

const DetailConContainer = () => {
  const items = [
    { title: "상품 설명", content: "사지마세요." },
    { title: "상품 리뷰", content: "★★★★★ (1.8/5) 1.8점." },
    { title: "상품 정보", content: "제조사: 없음, 원산지: 브라질" }
  ];

  const [activeIndex, setActiveIndex] = useState(0); // 기본으로 첫 번째(상품 설명) 열림

  const toggleDetailCon = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <DetailConWrapper>
      {items.map((item, index) => (
        <DetailConItem key={index}>
          <DetailConTitle onClick={() => toggleDetailCon(index)}>
            {item.title}
          </DetailConTitle>
          <DetailConContent isOpen={activeIndex === index}>
            {item.content}
          </DetailConContent>
        </DetailConItem>
      ))}
    </DetailConWrapper>
  );
};

export default DetailConContainer;
