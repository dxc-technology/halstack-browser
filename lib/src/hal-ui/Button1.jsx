import React from "react";
import styled from "styled-components";

const Button1 = ({ disabled, onClick, label }) => (
  <ButtonStyled disabled={disabled} onClick={onClick}>
    {label}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  background-color: white;
  border: none;
  padding: 0px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
  height: 40px;
  &:hover {
    background: #eee;
  }
  &:disabled {
    background-color: white;
    cursor: not-allowed;
  }
`;

export default Button1;
