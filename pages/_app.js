import React from "react";
import App, { Container as NextContainer } from "next/app";
import { Auth0Provider, Auth0Context } from "../lib/react-auth0-wrapper";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        client_id={process.env.AUTH0_CLIENT_ID}
        redirect_uri="http://localhost:3000/profile"
        onRedirectCallback={onRedirectCallback}
      >
        <Auth0Context.Consumer>
          {(auth0Props) => (
            <NextContainer>
              <Component {...pageProps} {...auth0Props} />
            </NextContainer>
          )}
        </Auth0Context.Consumer>
      </Auth0Provider>
    );
  }
}

export default MyApp;