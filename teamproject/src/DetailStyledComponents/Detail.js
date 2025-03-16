import styled from 'styled-components';

export const DetailContentWrapper = styled.div`
  display: grid;
  height: 600px;
  border: 2px solid black;
  border-radius: 10px;
  grid-column: 3/5;
  grid-row: 3/6;
  padding: 20px;
`;

export const Div1 = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 3/5;
  height: 200px;
`;
export const Div2 = styled.div`
  display: grid;
  grid-row: 6;
  grid-column: 3/5;
  height: 200px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const SlideImage = styled.img`
  width: 600px;
  height: 300px;
  margin: auto;
  border: 1px white solid;
  border-radius: 30px;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;

  &.fade {
    opacity: 0;
  }
`;

export const InfoWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(3,1fr);
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const DetailConWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 800px;
  margin: auto;
  gap: 5px;
`;

export const DetailConItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const DetailConTitle = styled.div`
  padding: 15px;
  font-weight: bold;
  background: #f1f1f1;
  cursor: pointer;
  text-align: center;
`;

export const DetailConContent = styled.div`
  padding: ${({ isOpen }) => (isOpen ? "15px" : "0px")};
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
  overflow: hidden;
  background: #fff;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
`;
