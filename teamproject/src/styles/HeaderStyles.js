import styled from "styled-components";
import { FlexContainer, BoxShadow, Button } from "./commonStyles";

export const HeaderContainer = styled(FlexContainer)`
  padding: 16px;
  ${BoxShadow}
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #D75A4A;
`;

export const InquiryButton = styled(Button)`
  border: 1px solid #ccc;
  color: #555;
`;
