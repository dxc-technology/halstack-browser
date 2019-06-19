import React from "react";
import styled from "styled-components";

const Title2 = ({ title }) => <TitleStyled>{title}</TitleStyled>;

const TitleStyled = styled.h2`
  border-bottom: 1px solid black;
  font-weight: 100;
  font-size: 18px;
  padding-bottom: 10px;
`;

export default Title2;
