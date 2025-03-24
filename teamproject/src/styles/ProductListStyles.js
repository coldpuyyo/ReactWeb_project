import styled from "styled-components";

/* 🏷️ 상품 리스트 컨테이너 */
export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;     /*상품사이공간*/
  padding: 15px;  /*카테고리배너사이공간*/
  width: 100%;
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* 🏷️ 상품 아이템 */
export const ProductItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgb(240, 171, 169);
  border-radius: 8px;
  width: 100%;
  height: 250px;
  overflow: hidden;
  flex-direction: column; /* 세로 정렬 */
  

  

  /* 🏷️ 오버레이 (배경 어둡게) */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0); /* 기본 상태는 투명 */
    transition: background 0.3s ease-in-out;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.6); /* 호버 시 어두워짐 */
  }
`;
/* 🏷️ 이미지 스타일 */
export const ProductImage = styled.img`
  max-width: 100%; /* 부모 크기보다 커지지 않음 */
  max-height: 100%; /* 높이도 부모보다 커지지 않음 */
  object-fit: cover; /* 비율 유지하면서 꽉 채우기 */
  height: auto; /* 가로세로 비율 유지 */
  object-fit: cover; /* 비율 유지하면서 채우기 */
  border-radius: 8px;
  width: 100%;
  height: 100%;
  
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 200px; /* 고정 높이 설정 */
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0); /* 기본 상태는 투명 */
    transition: background 0.3s ease-in-out;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.6); /* 호버 시 어두워짐 */
  }
`;



/* 🏷️ 상세보기 버튼 - ✅ 여기서 `export` 추가 */
export const DetailButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  /* 🏷️ 호버 시 버튼 표시 */
  ${ProductItem}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
