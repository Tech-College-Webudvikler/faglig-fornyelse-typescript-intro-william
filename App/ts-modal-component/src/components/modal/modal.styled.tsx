import styled from "styled-components";

interface ModalStyledProps {
  bg: string;
  font: string;
}

export const ModalStyled = styled.div<ModalStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};
  font-family: ${(props) => props.font};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

interface MdalDivInterface {
  width: number;
  height: number;
}

export const ModalDiv = styled.div<MdalDivInterface>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
