import ReactDOMServer from "react-dom/server";
import Root from "./root.component";

export const getResponseHeaders = props => {
  return {
    "x-navbar": 1
  };
};

export function serverRender(props) {
  const app = <Root {...props} />;
  const htmlStream = ReactDOMServer.renderToString(app);

  // Grab the CSS from the sheets.
  return { content:  htmlStream};
}