import React from "react";
import Heading from "../div1/Heading/Heading";
import P from "../div1/Para/P";
import Services from "./Services/Services";
import "./div2.css";

function Div2() {
  return (
    <div id="services" className="div2">
      <div className="heading">
        <Heading style={{ color: "red" }} content="IT Services" />
        <P content="Our Technology Consulting focuses on delivering solutions across the following critical business areas:" />
      </div>
      <Services />
    </div>
  );
}

export default Div2;
