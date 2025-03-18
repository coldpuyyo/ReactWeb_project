import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-radius: 5px;
  background-color: rgb(255, 45, 45);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row: 1;
  grid-column: 2/6;
`;
export const LogoImage = styled.img`
    margin-left: 30px;
    width: 105px;
    height: 105px;
    cursor: pointer;
`
export const CartImage = styled.img`
    float: right;
    width: 105px;
    height: 105px;
`