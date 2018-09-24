import React, { Component } from "react";
import { connect } from "react-redux";

import Head from "../components/head";

class Home extends Component {
  static getInitialProps({ reduxStore, req }) {
    return {}
  }

  render() {
    return (
      <>
      <style jsx>{`
        .vh-100 {
          height: 100vh;
        }
      `}</style>

        <Head title="Server Locator" />

        <div className="container-fluid vh-100">
          <div className="row justify-content-center h-100">
            <div className="col-4 align-self-center">
              <h1>Server Locator</h1>
              <p>Know where is located the site server you access.</p>
              <form>
                <input className="w-100" type="text" autoFocus />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Home);
