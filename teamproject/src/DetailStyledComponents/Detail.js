import styled from 'styled-components';

export const DetailContentWrapper = styled.div`
  display: grid;
  height: 600px;
  border: 2px;
  border-radius: 10px;
  grid-column: 3/5;
  grid-row: 3/6;
  padding: 20px;
  min-width: 500px;
  background-color: rgb(247, 241, 239);
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

export const ImageWrapper = styled.div`

`;

export const SlideImage = styled.img`
  width: auto;
  height: 200px;
  margin: auto;
  border-radius: 30px;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;

  &.fade {
    opacity: 0;
  }
`;

export const InfoWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(2,1fr);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  grid-template-areas: 
  "name name";
`;

export const Goginame = styled.div`
  grid-area: name;
  font-style:italic;
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
