import React from "react";
import Nav from "../components/common/Nav";
import CompleteApps from "../components/CompleteApps";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import Cursor from "../components/Cursor";

const Project = () => {
  return (
    <>
      <Cursor />
      <ProgressBar />
      <Nav />
      <CompleteApps />
      <Footer />
    </>
  );
};

export default Project;
