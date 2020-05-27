import React, { Component } from "react";

import { TechExperienceOne } from './TechExperienceOne';
import { TechExperienceTwo } from './TechExperienceTwo';
import { TechExperienceThree } from './TechExperienceThree';
import { Gutter } from './Gutter';
import '../../../sass/WorkExperience.scss';

class WorkExperience extends Component {
    render() {

        return (
          <div className="row custom-row-width" id="experience">
            <section className="mz-module work-experience-container light-bg">
              <div className="container =">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h2>EXPERIENCE</h2>
                    <p>
                      <i>S.F.S.U. | LQ DIGITAL | GAP INC.</i>
                    </p>
                  </div>
                </div>
                <div className="marg2emTop">
                  <TechExperienceOne />
                </div>
                <div className="marg2emTop">
                  <TechExperienceTwo />
                </div>
                <div className="marg2emTop">
                  <TechExperienceThree />
                </div>
              </div>
              <div className="marg2emTop">
                <Gutter className="marg2emTop" />
              </div>
            </section>
          </div>
        );
    }
}

export default WorkExperience;