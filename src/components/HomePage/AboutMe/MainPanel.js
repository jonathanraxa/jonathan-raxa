import React from "react";
import { PERSONAL_LINKS, IMAGES } from '../../Assets/Assets';

const MainPanel = () => {
    
    return (
      <div className="full_panel light-bg">
        <div className="full_panel-details">
          <a className="page-scroll" href="#portfolio">
            <h3>Web Developer</h3>
          </a>

          <div>
            <a className="page-scroll" href="#portfolio">
              <div className="team-position">
                <strong>Front-End (aspiring full-stack)</strong>
              </div>
            </a>
          </div>

          <div>
            <a href={PERSONAL_LINKS.linkedin} target="_blank">
              Find me on
              <span style={{ textTransform: "uppercase" }}>
                &nbsp;<span style={{ fontWeight: "700" }}>linkedin</span>
              </span>
            </a>
          </div>

          <div style={{ textAlign: "center", margin: "2rem" }}>
            <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
              tech
            </span>
          </div>


          <div className="full_panel-icon-rows">
            <div className="fake_link">
              <div className="real_link">
                <a href={PERSONAL_LINKS.github} target="_blank">
                  Github
                </a>
              </div>
              <div>
                <a
                  className=""
                  href="https://github.com/jonathanraxa"
                  target="_blank"
                >
                  <i class="fab fa-github fa-4x" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a href={PERSONAL_LINKS.linkedin} target="_blank">
                  Dev.to
                </a>
              </div>
              <div>
                <a className="" href="https://dev.to/jonraxa" target="_blank">
                  <i class="fab fa-dev fa-4x" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "2rem" }}>
            <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
              personal
            </span>
          </div>

          <div className="full_panel-icon-rows">
            <div className="fake_link">
              <div className="real_link">
                <a href={PERSONAL_LINKS.linkedin} target="_blank">
                  Medium
                </a>
              </div>
              <div>
                <a
                  className=""
                  href="https://github.com/jonathanraxa"
                  target="_blank"
                >
                  <i class="fab fa-medium fa-4x" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a href={PERSONAL_LINKS.linkedin} target="_blank">
                  Dev.to
                </a>
              </div>
              <div>
                <a className="" href="https://dev.to/jonraxa" target="_blank">
                  <i class="fab fa-dev fa-4x" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a href={PERSONAL_LINKS.linkedin} target="_blank">
                  Wordpress
                </a>
              </div>
              <div>
                <a href="https://github.com/jonathanraxa" target="_blank">
                  <i
                    className="fab fa-wordpress fa-4x"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p>
              Five years of experience with front-end web development in
              technologies such as Responsive HTML, CSS, and JavaScript.
            </p>
            <br></br>
            <p>
              I've also worked with SFCC (Salesforce), React JS, Swift, & other
              scripting languages.
            </p>
          </div>
        </div>
        <img
          src={IMAGES.profile_photo}
          className="img-responsive profile-image"
          alt="author: jon raxa"
        />
      </div>
    );
}

export default MainPanel;
