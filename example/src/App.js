import React, { Component } from "react";
import HalUI from "@dxc-technology/halstack-browser";
//import HalUI from "./hal/hal-ui/HalUI";
import "./App.css";


const YOUR_API_KEY = 'RlbIOdmhnj9Pd85G8fwFA5fdJWYcXtHq7my0wNa1'; // From DXC Developer Central
class App extends Component {
  state = { actions: [] };

  /* 
  This example uses DXC Carriers API published in DXC Developer Central.
  The following x-api-key header must be passed to the API and can be obtained
  after registering and signing in Developer Central. 
  More information at https://developer.dxc.com/apis/catalog
  */

  urlProspects = "https://api.dxc-dev-assurelife.hub-1.dev.us.insurance.dxc.com/carriers"
  headersProspects = {
    'Content-Type': 'application/json, application/hal+json',
    'Accept': 'application/json, application/hal+json',
    'x-api-key': YOUR_API_KEY
  }

  render() {
    return (
      <div className="App">
        <HalUI url={this.urlProspects} headers={this.headersProspects} />
      </div>
    );
  }
}

export default App;
