import React from "react";
import Nav from "./Nav/Nav";
import Heading from "./Heading/Heading";
import P from "./Para/P";

import "./div1.css";

function Div1() {
  return (
    <div className="div1">
      <Nav />
      <div className="flex-container mt-2">
        <div className="title">
          <Heading style={{ color: "#0D0B35" }} content="Company Profile" />
          <P 
            style={{color: "#0D0B35"
            }}
            content="DataLabb is a Lahore, Pakistan-based company managed by highly
          experienced information technology professionals and offers consulting
          services in the areas of:"
          />
          <br />
          <P style={{color: "#0D0B35"}} content="Graphics and Artwork Designing" />
          <P style={{color: "#0D0B35"}} content="Social Media Service" />
          <P style={{color: "#0D0B35"}} content="Quality Assurance and implementation." />
          <P style={{color: "#0D0B35"}} content="Software Development" />
        </div>
        <div className="img">
          <img
            height="500px"
            width="500px"
            src="./../../../resources/images/confidence.png"
            alt="computer"
          ></img>
        </div>
      </div>
      <br />
      <p
        style={{
          textAlign: "center",
          color: "#0D0B35",
          margin: "-22px",
          fontStyle: "italic",
        }}
      >
        Highly skilled highbrow personnel, most having extensive work experience
        in diverse areas of Information Technology make up the Business
        technologies team. Our management ensures that each individual outdoes
        in their specific assigned tasks by working closely with them.
      </p>
    </div>
  );
}

export default Div1;
