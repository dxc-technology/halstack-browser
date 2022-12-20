import React from "react";
import styled from "styled-components";
import Title3 from "./Title3.jsx";

const HalResource = ({ resource, changeBaseResource }) => (
  <HalResourceStyled>
    <Title3 title="Links" />
    {(resource.getLinks().length > 0 && (
      <LinksContainer>
        {resource.getLinks().map(link => (
          <LinkButton onClick={() => changeBaseResource(link.href)}>
            {link.rel}
          </LinkButton>
        ))}
      </LinksContainer>
    )) || <EmptyMessage>No links available in this resource</EmptyMessage>}
    <Title3 title="Items" />
    {(resource.getItems().length > 0 && (
      <LinksContainer>
        {resource.getItems().map((item, i) => (
          <LinkButton
            title={
              (item.summary && JSON.stringify(item.summary, null, 2)) ||
              item.href
            }
            onClick={() => changeBaseResource(item.href)}
          >
            {`Item ${i + 1}`}
          </LinkButton>
        ))}
      </LinksContainer>
    )) || <EmptyMessage>No items available in this resource</EmptyMessage>}
  </HalResourceStyled>
);

const HalResourceStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const LinkButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 6px 15px;
  border: none;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const EmptyMessage = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
`;

export default HalResource;
