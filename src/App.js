import React from "react";

import Navbar from "./components/Navbar/Navbar";
import {
  Footer,
  FindUs,
  Header,
  AboutUs,
  Menu,
  Chef,
  Laurels,
  Intro,
  Gallery,
} from "./containers";
import "../src/App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
