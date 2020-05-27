import React from "react";
 import {  IMAGES } from "../Assets/Assets";


const Heading = () => {
  return (
    <div
      className="container__heading"
      style={{ margin: "0 auto", textAlign: "center", width: "100%" }}
    >
      <div
        className="section-title name__heading light-bg"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>
          Jonathan <span style={{ fontWeight: "700" }}>Raxa</span>
        </h2>

        <button
          className="btn"
          style={{ color: "white", backgroundColor: "#343a40" }}
        >
          <a class="who_link" href="#theMottoTop">who?</a>
        </button>
      </div>
      <div id="theMottoTop"></div>
      <section className="TheMotto" id="motto">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <p className="theMotto">
                  <i>
                    Question everything. Build. Solve problems. Make it better
                    for the next person.
                  </i>
                </p>
                <p className="theMotto">
                  <i>Leave a legacy that others will remember.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Heading;
