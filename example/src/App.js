import React, { Component } from "react";
import HalUI from "@diaas/hal-ui";
import "./App.css";

class App extends Component {
  state = { actions: [] };

  /* 
  This example uses DXC Prospects API published in DXC Developer Central.
  The following 3 headers must be passed to the API and can be obtained
  after registering and signing in Developer Central. 
  More information at https://developer.dxc.com/api/insurance/life/integral-prospects/codelab
  */

  const API_PROFILE_ID =""; // From DXC Developer Central
  const API_USER_NAME = ""; // From DXC Developer Central
  const YOUR_API_KEY = ""; // From DXC Developer Central

  urlProspects =
    "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects";

  headersProspects = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': YOUR_API_KEY,
    'userName': API_USER_NAME,
    'profileid': API_PROFILE_ID
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
