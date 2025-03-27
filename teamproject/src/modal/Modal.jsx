import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  white-space: pre-wrap;
`;

const ModalButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = ({ message, onClose, onConfirm }) => {
  // \n을 <br />로 바꾸는 방법
  const formattedMessage = message.replace(/\n/g, "<br />");

  return (
    <ModalBackground>
      <ModalContainer>
        <p dangerouslySetInnerHTML={{ __html: formattedMessage }}></p>
        <ModalButton onClick={() => {
            if (onConfirm) onConfirm();
            onClose();
          }}
        >확인</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
