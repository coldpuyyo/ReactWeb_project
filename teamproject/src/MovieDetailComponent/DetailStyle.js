import styled from 'styled-components';



// 헤더 푸터 있다 생각하고 나눈 메인영역
export const MainWrapper = styled.div`
  width: 1000px;
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column: 1/6;
  grid-row: 2/5;
`;

// 영화 이미티 제목 간단한내용 컨테이너
export const ContentWrapper = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-row: 2/5;
  border: 1px solid;
  border-radius: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap:10px;
  padding: 20px;
`;


// 영화 이미지
export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border: 10px soilid black;
`;

export const InfoWrapper = styled.div`
display: grid;
grid-template-rows: repeat(4,1fr);
`;
