import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(6, 1fr);
  height: 100vh;
  background-color:rgb(209, 207, 207);
`;

export const MainContainer = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 3/5;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginBox = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #e6e6e6;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 450px;
`;

export const LoginTitle = styled.h1`
  font-size: 22px;
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
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005b99;
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
    color: #007acc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
