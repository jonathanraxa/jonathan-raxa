import React from "react";
 import {  IMAGES } from "../Assets/Assets";


const Heading = () => {
  return (
    <div
      className="container__heading"
      style={{ margin: "0 auto", textAlign: "center", width: "100%" }}
    >
      <div className="section-title name__heading">
        <h2>
          Jonathan <strong>Raxa</strong>
        </h2>
      </div>

      <div
        className="quotes__heading"
        style={{ margin: "0 auto", textAlign: "left" }}
      >
        <br />
        <div
          className="section-title"
          style={{ padding: "1rem", textAlign: "center" }}
        >
          <div style={{ color: "#fff" }}>
            <p>
              <i>
                Question everything. Build. Solve problems. Make it better for
                the next person.
              </i>
            </p>
            <br />
            <p>
              <i>Leave a legacy that others will remember.</i>
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};
export default Heading;
