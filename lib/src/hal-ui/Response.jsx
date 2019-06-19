import React from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";
import Title3 from "./Title3.jsx";
import HalResource from "./HalResource.jsx";

const Response = ({ error, response, changeBaseResource }) => (
  <ResponseStyled>
    <Title3 title="Response" />
    {(error && <Error>{error.message || "There was an error processing this request"}</Error>) || (
      <ResponseContainer>
        <HalData>
          <div>HAL Data</div>
          <HalResource resource={response.halResource} changeBaseResource={changeBaseResource} />
        </HalData>
        <RawResponse>
          <div>Headers</div>
          <RawHeaders>
            <ReactJson
              name={false}
              theme="rjv-default"
              src={response.headers}
              displayObjectSize={false}
              displayDataTypes={false}
              enableClipboard={false}
            />
          </RawHeaders>
          <div>Body</div>
          <RawBody>
            <ReactJson
              name={false}
              theme="rjv-default"
              displayObjectSize={false}
              collapsed={1}
              displayDataTypes={false}
              enableClipboard={false}
              src={response.body}
            />
          </RawBody>
        </RawResponse>
      </ResponseContainer>
    )}
  </ResponseStyled>
);

const ResponseStyled = styled.div`
  margin-top: 40px;
`;
const ResponseContainer = styled.div`
  display: flex;
`;
const HalData = styled.div`
  width: calc(50% - 10px);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;
const RawResponse = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const RawHeaders = styled.div`
  margin-bottom: 5px;
  max-height: 300px;
  padding: 10px;
  background: white;
  overflow: auto;
`;

const RawBody = styled.div`
  margin-bottom: 5px;
  max-height: 600px;
  padding: 10px;
  background: white;
  overflow: auto;
`;

const Error = styled.div`
  background: white;
  color: #c10000;
  text-align: center;
  padding: 20px;
`;

export default Response;
