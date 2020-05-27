import React from "react";
 import {  IMAGES } from "../Assets/Assets";


const Heading = () => {
  return (
    <div
      className="container__heading"
      style={{
        margin: "0 auto",
        textAlign: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="bg-text">
        <h2>
          Jonathan <span style={{ fontWeight: "700" }}>Raxa</span>
        </h2>

          <a
            class="who_link"
            href="#theMottoTop"         
          >
            who?
          </a>
      </div>
      <div
        className="section-title name__heading light-bg"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      ></div>
    </div>
  );
};
export default Heading;
