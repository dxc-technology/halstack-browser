import React from "react";
import styled from "styled-components";

const Title2 = ({ title }) => <TitleStyled>{title}</TitleStyled>;

const TitleStyled = styled.h2`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px 10px 10px;
  line-height: 24px;
  border-bottom: 1px solid #d9d9d9;
`;

export default Title2;
