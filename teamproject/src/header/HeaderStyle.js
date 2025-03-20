import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 1050px;
  border-radius: 5px;
  background-color: rgb(255, 45, 45);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row: 1;
  grid-column: 2/6;
  grid-template-areas: "logo empty empty empty cart";
  justify-items: center;
  align-items: center;
`;


export const LogoImage = styled.img`
display: grid;
    width: 105px;
    height: 105px;
    cursor: pointer;
`
export const CartImage = styled.img`
    display: grid;
    width: 105px;
    height: 105px;
    cursor: pointer;
    grid-area: cart;

`
