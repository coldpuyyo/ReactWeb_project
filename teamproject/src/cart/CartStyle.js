import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: grid;
  width: 1000px;
  height: 500px;
  border: solid 0.5px;
  border-color: lightgray;
  border-radius: 10px;
  grid-column: 1/7;
  grid-row: 3/6;
  padding: 20px;
  background-color:rgb(255, 252, 238);
  justify-content: center;
`;

export const Img = styled.img`
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