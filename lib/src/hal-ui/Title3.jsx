import React from "react";
import styled from "styled-components";

const Title3 = ({ title }) => <TitleStyled>{title}</TitleStyled>;

const TitleStyled = styled.h2`
  border-bottom: 1px solid #212121;
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 6px;
  text-transform: uppercase;
  width: 100%;
`;

export default Title3;
