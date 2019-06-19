import React from "react";
import styled from "styled-components";

const Title1 = ({ title }) => <TitleStyled>{title}</TitleStyled>;

const TitleStyled = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;
 
export default Title1;
