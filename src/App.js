import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import NoMatch from "./NoMatch";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import Blog from "./Blog";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact_us" component={ContactUs} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
