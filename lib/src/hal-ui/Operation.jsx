import React from "react";
import styled from "styled-components";
import axios from "axios";
import { halResource } from "@diaas/api-sdk";
import { ClipLoader } from "react-spinners";
import Title3 from "./Title3.jsx";
import Button1 from "./Button1.jsx";
import InputPropertiesList from "./InputPropertiesList.jsx";
import Response from "./Response.jsx";
import { useScreenType } from "../common/utils.js";

export default class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: {}, isExpanded: false, isLoading: false };
    this.toggleIsExpanded = this.toggleIsExpanded.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  makeRequest() {
    const { method, url, headers } = this.props;
    const { body } = this.state;
    this.setState(() => ({ response: null, isLoading: true }));
    axios({
      method,
      url,
      params: (method === "GET" && body) || null,
      data: (method !== "GET" && body) || null,
      headers,
      responseType: "json",
    })
      .then((response) => {
        this.setState(() => ({
          isLoading: false,
          error: null,
          response: {
            headers: response.headers,
            body: response.data,
            halResource: halResource({ body: response.data }),
          },
        }));
      })
      .catch((error) => {
        this.setState(() => ({
          isLoading: false,
          error,
          response: null,
        }));
      });
  }

  updateFunction(key, value) {
    this.setState((prevState) => ({
      body: { ...prevState.body, [key]: value === "" ? undefined : value },
    }));
  }

  toggleIsExpanded() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
      body: {},
      response: undefined,
    }));
  }

  updateResize() {
    let screenType = useScreenType();
    return screenType;
  }

  render() {
    const { method, rel, title, changeBaseResource, properties } = this.props;
    const { body, isExpanded, response, error, isLoading } = this.state;
    return (
      <OperationStyled method={method}>
        <OperationHeader onClick={this.toggleIsExpanded}>
          <Rel method={method}>{rel}</Rel>
          <Method>{method}</Method>
          <OperationTitle>{title}</OperationTitle>
        </OperationHeader>
        {(isExpanded && (
          <div>
            <OperationContent key="operationConten" method={method}>
              <Title3 title="Properties" />
              {(properties.length > 0 && (
                <RequestContainer screenType={this.updateResize}>
                  <PropertiesColumn screenType={this.updateResize}>
                    <InputPropertiesList
                      disabled={isLoading}
                      properties={properties}
                      propertyUpdateFunction={this.updateFunction}
                    />
                  </PropertiesColumn>
                  <BodyColumn screenType={this.updateResize}>
                    <BodyTextArea screenType={this.updateResize} disabled value={JSON.stringify(body, null, 2)} />
                  </BodyColumn>
                </RequestContainer>
              )) || <EmptyMessage>No properties available for this operation</EmptyMessage>}
              <ButtonsContainer>
                <Button1 disabled={isLoading} label="Try it out" onClick={this.makeRequest} />
                <Loader>
                  <ClipLoader sizeUnit="px" size={20} color="#fff" loading={isLoading} />
                </Loader>
              </ButtonsContainer>
              {((response || error) && (
                <Response error={error} response={response} changeBaseResource={changeBaseResource} />
              )) ||
                null}
            </OperationContent>
          </div>
        )) ||
          null}
      </OperationStyled>
    );
  }
}

const OperationStyled = styled.div`
  width: 100%;
  min-height: 46px;
  background-color: ${(props) =>
    props.method === "GET" || props.method === "OPTIONS"
      ? "#b2efff"
      : props.method === "POST" || props.method === "PATCH" || props.method === "PUT"
      ? "#B0FF7E99"
      : "#7E7E7E"};
  display: flex;
  flex-direction: column;
`;

const OperationHeader = styled.div`
  width: 100%;
  min-height: 46px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const Rel = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  background-color: ${(props) =>
    props.method === "GET" || props.method === "OPTIONS"
      ? "#7fe4ff;"
      : props.method === "POST" || props.method === "PATCH" || props.method === "PUT"
      ? "#64FF00"
      : "black"};
  color: ${(props) =>
    props.method === "GET" || props.method === "OPTIONS"
      ? "black"
      : props.method === "POST" || props.method === "PATCH" || props.method === "PUT"
      ? "black"
      : "#969696"};
  min-width: 110px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 10px;
`;

const Method = styled.div`
  margin: 0px 20px;
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const OperationTitle = styled.div`
  margin: 0px 10px;
  font-size: 12px;
  color: #00000099;
`;

const OperationContent = styled.div`
  border-top: 1px solid #ffffffcc;
  padding: 20px;
`;

const EmptyMessage = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
`;
const RequestContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.screenType !== "desktop" ? "wrap" : "")};
`;
const PropertiesColumn = styled.div`
  width: ${(props) => (props.screenType !== "desktop" ? "100%" : "calc(50% - 10px)")};
  margin-right: 10px;
`;

const BodyColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.screenType !== "desktop" ? "100%" : "50%")};
`;

const BodyTextArea = styled.textarea`
  height: ${(props) => (props.screenType === "desktop" ? "100%" : "200px")};
  margin: 5px 0px;
  box-sizing: border-box;
  background-color: #212121;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
`;

const Loader = styled.div`
  margin-left: 20px;
`;
