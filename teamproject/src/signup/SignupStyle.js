import styled from "styled-components";

export const SignupContainer = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 3/5;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color:rgb(247, 247, 247);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const SignupTitle = styled.h1`
  color: red;
  font-size: 24px;
  padding-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 10px;
  text-align: center;
`;

export const SignupButton = styled.button`
  width: 100px;
  height: 35px;
  background-color:rgb(255, 0, 0);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color:rgb(187, 0, 0);
  }
`;

export const LoginLink = styled.p`
  margin-top: 16px;
  font-size: 14px;

  a {
    color:rgb(255, 0, 0);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
