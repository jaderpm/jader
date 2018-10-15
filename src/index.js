import React from "react";
import ReactDOM from "react-dom";
import Layout from "./component/Layout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
