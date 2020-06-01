import React, { Component } from "react";
import { TechExperienceOne } from './TechExperienceOne';
import { TechExperienceTwo } from './TechExperienceTwo';
import { TechExperienceThree } from './TechExperienceThree';
import { IMAGES } from "../../Assets/Assets";
import { Gutter } from './Gutter';
import Collapsible from "react-collapsible";
import '../../../sass/WorkExperience.scss';

const gapincImg = (
  <img
    src={IMAGES.gapinc}
    alt=""
    className="img-responsive fullWidth no-mar-top"
  />
);
const lqdigitalImg = (
    <img
      src={IMAGES.lqdigital}
      alt=""
      className="img-responsive fullWidth"
    />
);
const sfsuImg = (
    <img
      src={IMAGES.sfsu}
      alt=""
      className="img-responsive fullWidth"
    />
);
class WorkExperience extends Component {

  render() {
    return (
      <div className="experience row custom-row-width" id="experience">
        <section className="mz-module work-experience-container light-bg">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2 style={{ textTransform: "uppercase" }}>work experience</h2>
              <p style={{ textTransform: "uppercase" }}>
                <i>
                  gap inc.&nbsp;&nbsp;|&nbsp;&nbsp;l.q.
                  digital&nbsp;&nbsp;|&nbsp;&nbsp; s.f.s.u.
                </i>
              </p>
            </div>
          </div>

          <div className="experience--icons">
            <div> 
              <Collapsible style={{textAlign: 'center'}} trigger={gapincImg}>
                <div className="job-description">
                  <div className="marg2emTop">
                    <TechExperienceOne />
                  </div>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible style={{textAlign: 'center'}} trigger={lqdigitalImg}>
                <div className="job-description">
                  <div className="marg2emTop">
                    <TechExperienceTwo />
                  </div>
                </div>
              </Collapsible>
            </div>
            <div> 
              <Collapsible style={{textAlign: 'center'}} trigger={sfsuImg}>
                <div className="job-description">
                  <div className="marg2emTop">
                    <TechExperienceThree />
                  </div> 
                </div>
              </Collapsible>
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