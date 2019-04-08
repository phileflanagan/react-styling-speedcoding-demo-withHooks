import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Container, Headline } from "./styles";

import Gallery from "./Components/Gallery";

const App = () => {
  return (
    <Container>
      <Headline>Shop</Headline>
      <Gallery />
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
