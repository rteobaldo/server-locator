import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

import Head from "../components/head";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <style jsx global>{`
          body { margin: 0; }
          .vh-100 {
            height: 100vh;
          }
        `}</style>

        <Container>
          <Provider store={reduxStore}>
            <>
              <Head title="Server Locator" />
              <Component {...pageProps} />
            </>
          </Provider>
        </Container>
      </>
    );
  }
}

export default withReduxStore(MyApp);
