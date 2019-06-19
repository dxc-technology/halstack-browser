import React from "react";
import styled from "styled-components";
import Property from "./Property.jsx";

const PropertiesList = ({ properties }) =>
  (properties.length > 0 && (
    <PropertiesListStyled>
      {properties.map(property => (
        <PropertyLayout>
          <Property
            name={property.key}
            type={property.metadata.type}
            format={property.metadata.format}
            enumOptions={property.metadata.enum}
            required={property.required}
            schema={property.metadata}
          />
        </PropertyLayout>
      ))}
    </PropertiesListStyled>
  )) || <EmptyList>There are no properties defined</EmptyList>;

const PropertiesListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PropertyLayout = styled.div`
  width: calc(33% - 3px);
  margin: 0px 3px;
  margin-bottom: 10px;
`;

const EmptyList = styled.div`
  background-color: #d8d8d8;
  text-align: center;
  padding: 20px;
  color: #545454;
`;

export default PropertiesList;
