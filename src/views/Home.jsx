import React from "react";
import Header from "../components/Header";
import GreatPower from "../components/GreatPower";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/common/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import Cursor from "../components/Cursor";

const Home = () => {
  return (
    <> <Cursor />
    <ProgressBar />
      <Header />
      <GreatPower />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
