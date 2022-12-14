import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  renderType: 'hydrate',
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div>
        <p>An error ocurred!</p>
      </div>
    )
    
  },
});


export const { bootstrap, mount, unmount } = lifecycles;
