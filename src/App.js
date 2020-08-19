import React from 'react';
import './App.css';
import Footer from "../src/components/footer"
import Navbar from "../src/components/nav"
import Jumbotron  from "../src/components/jumbotron";
import About from "./pages/home"
import Portfolio from "./pages/portfolio"

function App() {
  return ( <div>
    <Navbar />
    <Jumbotron />
    <About />
    <Portfolio />
    <Footer />
    </div>);
}

export default App;
