import styled from 'styled-components';

export const DetailMainWrapper = styled.div`
  width: 1100px;
  height: auto; 
  text-align: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding-bottom: 50px;
`;

export const DetailContentWrapper = styled.div`
  display: grid;
  width: 100%;
  height: auto;  
  border: 2px solid black;
  border-radius: 10px;
  grid-column: 1 / span 5;
  grid-row: 2 / span 3;
  padding: 20px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;

  &.fade {
    opacity: 0;
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const DetailConWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

export const DetailConItem = styled.div`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const DetailConTitle = styled.div`
  padding: 15px;
  font-weight: bold;
  background: #f1f1f1;
  cursor: pointer;
`;

export const DetailConContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: #fff;
`;
