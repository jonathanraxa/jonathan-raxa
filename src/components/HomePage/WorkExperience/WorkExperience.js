import React, { Component } from "react";

import { TechExperienceOne } from './TechExperienceOne';
import { TechExperienceTwo } from './TechExperienceTwo';
import { TechExperienceThree } from './TechExperienceThree';
import { Gutter } from './Gutter';
import './WorkExperience.css';

class WorkExperience extends Component {
    render() {

        return (
            <div className="row" id="experience">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <h2>EXPERIENCE</h2>
                        <p><i>S.F.S.U. | LQ DIGITAL | GAP INC.</i></p>
                    </div>
                </div>
      
                <section style={{ margin: '0 auto' }} className="mz-module work-experience-container">
                <div className="container light-bg">
                    <TechExperienceOne />
                    <TechExperienceTwo />
                    <TechExperienceThree />
                    <Gutter />
                </div>
            </section>
            </div>
        );
    }
}

export default WorkExperience;