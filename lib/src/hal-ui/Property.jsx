import React from "react";
import styled from "styled-components";

const Property = props => {
  const { name, required, type, format, schema } = props;
  return (
    <PropertyStyled required={required}>
      <Key title={JSON.stringify(schema, null, 2)}>{name}</Key>
      {type && <Type>{type}</Type>}
      {format && <Format>{format}</Format>}
    </PropertyStyled>
  );
};

const PropertyStyled = styled.div`
  border-left: ${props =>
    props.required ? "7px solid #ffed00" : "7px solid #777777"};
  background-color: #777777;
  color: white;
  font-size: 14px;
  padding: 10px;
  display: flex;
  width: calc(100% - 27px);
`;

const Key = styled.div`
  color: #ffed00;
  margin-right: 5px;
  flex-grow: 1;
  overflow: hidden;
`;
const Type = styled.div`
  color: rgba(255, 255, 255, 0.65);
  margin-right: 5px;
`;

const Format = styled.div`
  color: rgba(255, 255, 255, 0.65);
  margin-right: 5px;
`;

export default Property;
