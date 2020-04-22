import React from "react";
import styled from "styled-components";
import InputProperty from "./InputProperty.jsx";

const InputPropertiesList = ({ properties, disabled, propertyUpdateFunction }) => (
  <PropertiesListStyled>
    {properties.map((property) => (
      <PropertyLayout>
        <Label>
          {property.key}
          {property.required ? "*" : ""}
        </Label>
        <InputPropertyLayout>
          <InputProperty
            disabled={disabled}
            name={property.key}
            type={property.metadata.type}
            format={property.metadata.format}
            enumOptions={property.metadata.enum}
            required={property.required}
            propertyUpdateFunction={propertyUpdateFunction}
          />
        </InputPropertyLayout>
      </PropertyLayout>
    ))}
  </PropertiesListStyled>
);

const PropertiesListStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropertyLayout = styled.div`
  display: flex;
  margin: 5px 0px;
`;

const Label = styled.span`
  width: 50%;
  display: inline-flex;
  align-items: center;
`;

const InputPropertyLayout = styled.div`
  width: 50%;
`;

export default InputPropertiesList;
