import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../src/components/footer"
import MyNavbar from "../src/components/nav"
import Jumbotron from "../src/components/jumbotron";
import About from "./pages/About"
import Projects from "./pages/portfolio"
import Wrapper from "./components/wrapper"

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Jumbotron />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Projects} />
        </Wrapper>
        <Footer />
      </div>);
    </Router>
  );
}

export default App;
