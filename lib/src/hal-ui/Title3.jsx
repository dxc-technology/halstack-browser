import React from "react";
import styled from "styled-components";

const Title3 = ({ title }) => <TitleStyled>{title}</TitleStyled>;

const TitleStyled = styled.h2`
  border-bottom: 1px solid black;
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 0px;
  text-transform: uppercase;
  width: 100%;
`;

export default Title3;
