import React, { Component } from "react";
import styled from "styled-components";
import { HalResource as diasHalResource, HalApiCaller } from "@dxc-technology/halstack-client";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Title1 from "./Title1.jsx";
import Title2 from "./Title2.jsx";
import Operation from "./Operation.jsx";
import PropertiesList from "./PropertiesList.jsx";
import NavigationHistory from "./NavigationHistory.jsx";

export default class HalUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.historyItems = [];
    this.changeBaseResource = this.changeBaseResource.bind(this);
    this.setBaseResource = this.setBaseResource.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
    this.compRef = React.createRef();
  }

  componentDidMount() {
    const { url } = this.props;
    this.setBaseResource(url);
  }

  setBaseResource(url) {
    this.setState(() => ({ halResource: undefined, baseURL: url, isLoading: true }));
    const { headers } = this.props;
    /*axios({
      method: "OPTIONS",
      url,
      headers,
      responseType: "json"
    })
      .then(response => {
        const halResource = diasHalResource();  
        //halResource.addTit
        response.data.links.map(link=> halResource.addInteraction(link));

        this.setState(prevState => ({
          halResource,
          isLoading: false,
          historyItems: [...prevState.historyItems, { url, title: halResource.title }]
        }));
      })
      .catch(error => {
        this.setState(() => ({ error, isLoading: false }));
      });*/

      HalApiCaller.options({url, headers})
      .then(optionsResponse =>{
        console.log(optionsResponse);
        const halResource = diasHalResource();
        //Check for undefined
        halResource.addTitle(optionsResponse.body.title); 
        optionsResponse.body.links.map(link => halResource.addInteraction(link));

        this.setState(prevState => ({
          halResource,
          isLoading: false,
          historyItems: [...prevState.historyItems, { url, title: halResource.getTitle() }]
        }));
      })
      .catch(error => {
        this.setState(() => ({ error, isLoading: false }));
      })
  }

  changeBaseResource(url) {
    this.compRef.current.scrollIntoView();
    this.setBaseResource(url);
  }

  navigateBack(navigationItemIndex) {
    const { historyItems } = this.state;
    const navigationItem = historyItems[navigationItemIndex];
    this.setState(prevState => ({
      historyItems: prevState.historyItems.slice(0, navigationItemIndex)
    }));
    this.setBaseResource(navigationItem.url);
  }

  render() {
    const { baseURL, isLoading, halResource, error, historyItems } = this.state;
    const { headers } = this.props;
    return isLoading ? (
      <Loading>
        <LoadingLabel>Loading</LoadingLabel>
        <LoadingURL>{baseURL}</LoadingURL>
        <BeatLoader size={10} color="#000" />
      </Loading>
    ) : error ? (
      <ErrorMessage>There was an error fetching the resource</ErrorMessage>
    ) : (
      (halResource && (
        <HALUI ref={this.compRef}>
          <NavigationHistory historyItems={historyItems} accessItem={this.navigateBack} />
          <Title1 title={halResource.getTitle() || "Resource title not defined"} />
          <Url>{baseURL}</Url>
          <Title2 title="Operations" />
          {(halResource.getInteractions().length > 0 &&
            halResource.getInteractions().map(action => (
              <OperationLayout>
                <Operation
                  method={action.method}
                  url={action.href}
                  headers={headers}
                  rel={action.rel}
                  title={action.title}
                  properties={action.getSchemaProperties()}
                  changeBaseResource={this.changeBaseResource}
                />
              </OperationLayout>
            ))) || <EmptyList>There are no operations defined</EmptyList>}
          <Title2 title="Properties" />
          <PropertiesList properties={halResource.getProperties()} />
        </HALUI>
      )) || <div />
    );
  }
}

const Loading = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const ErrorMessage = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background: #ffd9d9;
  border-radius: 15px;
  border: 1px solid #e4a7a7;
  margin: 70px auto;
  width: 600px;
  color: #ab3d3d;
`;

const EmptyList = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 20px;
  color: #545454;
`;

const LoadingLabel = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const LoadingURL = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 20px 0px;
`;

const HALUI = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const OperationLayout = styled.div`
  margin-bottom: 10px;
`;

const Url = styled.h3`
  font-weight: 100;
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 30px;
`;
