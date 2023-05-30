import React from "react";
import Heading from "./../div1/Heading/Heading";
import P from "./../div1/Para/P";
import Icon from "./icons/icons";
import "./div6.css";

function Div6() {
  return (
    <div id="methodologies" className="div6">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      <Heading
        style={{
          fontStyle: "italic",
          display: "inline-block",
          zIndex: "2",
          margin: "5%",
        }}
        content="Process & Methodologies"
      />
      <div className="dd1">
        <div className="col-1-of-2">
          <div className="ddd">
            <div className="image-container">
              <img
                className="spiral"
                src="./../../../resources/div6/s1.png"
              ></img>
              <p>Spiral Model</p>
            </div>

            <div className="image-container">
              <img
                className="clock"
                src="./../../../resources/div6/iteration1.png"
              ></img>
              <p>Spiral Model</p>
            </div>
          </div>
          <div className="ddd">
            <div className="image-container">
              <img
                className="waterfall"
                src="./../../../resources/div6/waterfall-chart.png"
              ></img>
              <p>Spiral Model</p>
            </div>

            <div className="image-container">
              <img
                className="rapid"
                src="./../../../resources/div6/Rapid1.png"
              ></img>
              <p>Spiral Model</p>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <P
            style={{ padding: "1% 1%" }}
            content="Our methodology is determined based on the client's requirement and our vision is to always be a part of the client's success. Based on our vast experience in implementation of quality solutions for various clients, we recommend the spiral model for most projects as it helps reduce risk and time to market."
          />
          <P
            style={{ padding: "1% 1%", marginTop: "7%"}}
            content="We have plan documentation templates ready for managing teams and various aspects of software development and Artwork designing. Our process involves planning and documenting specifically for each project aspect such as: Development Infrastructure & Environment Setup; Development Methodologies; Project Team Set-up and Resource ramp up; Resource Management and Attrition planning; Delivery Management; Software Configuration Management; Quality Management; Performance Management; Metrics Collection, Analysis & reporting."
          />
        </div>
      </div>
    </div>
  );
}

export default Div6;