import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { TheMotto } from "./AboutMe/TheMotto";
import { Education } from "./AboutMe/Education";
import LeaveALegacy from "../Evergreen/LeaveALegacy";
import QuestionBuildSolve from "../Evergreen/QuestionBuildSolve";
import PortfolioContainer from './Portfolio/PortfolioContainer';
import NavBarHome from "./NavBarHome";
import MainPanel from "./AboutMe/MainPanel";

import WorkExperience from "./WorkExperience/WorkExperience";
import Heading from './Heading';

class HomePage extends Component {
    
    render() {
      
        return (
          <div className="Homepage">
            <NavBarHome />
            <Heading />
            <QuestionBuildSolve />
            <section
              id="panels"
              style={{ paddingBottom: "0", paddingTop: "0" }}
            >
              <MainPanel />
            </section>
            <TheMotto />
            <section>
              <WorkExperience />
            </section>
            <section>
             <PortfolioContainer />
            </section>
            <section id="legacy">
              <div className="container">
                <div className="row">
                  <LeaveALegacy />
                </div>
              </div>
            </section>
            <section id="education" className="light-bg">
              <div className="container" style={{ marginTop: "3rem" }}>
                <div className="row">
                  <Education />
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default HomePage;