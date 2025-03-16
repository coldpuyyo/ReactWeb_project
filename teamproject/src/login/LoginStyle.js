import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(6, 1fr);
  height: 100vh;
  background-color:rgb(255, 255, 255);
`;

export const LoginContainer = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 3/5;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LoginBox = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 3/5;
  grid-template-rows: auto 1fr auto;
  background-color:rgb(247, 247, 247);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 450px;
`;

export const LoginTitle = styled.h1`
  color: red;
  font-size: 24px;
  padding-bottom: 10px;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto;
  gap: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const LoginButton = styled.button`
  margin-left: 30px;
  margin-top: 25px;
  height: 80%;
  padding: 10px;
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

export const ErrorMessage = styled.label`
  color: red;
  font-size: 14px;
  display: block;
  text-align: center;
`;

export const SignupLink = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;

  a {
    color:rgb(255, 0, 0);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
