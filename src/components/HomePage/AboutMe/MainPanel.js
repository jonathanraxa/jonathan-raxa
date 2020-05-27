import React from "react";
import { PERSONAL_LINKS, IMAGES } from '../../Assets/Assets';

const MainPanel = () => {
    
    return (
      <div className="full_panel light-bg">
        <div className="full_panel-details">
          <a className="page-scroll" href="#portfolio">
            <h3>Web Developer</h3>
          </a>
          <p>
            <a className="page-scroll" href="#portfolio">
              <div className="team-position">
                <strong>Front-End (aspiring full-stack)</strong>
              </div>
            </a>
          </p>

          <p>
            <a href={PERSONAL_LINKS.linkedin} target="_blank">
              Find me on
              <span style={{ textTransform: "uppercase" }}>
                &nbsp;<span style={{ fontWeight: "700" }}>linkedin</span>
              </span>
            </a>
          </p>

          <p>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "700" }}>tech</span>
            </div>
            <a href={PERSONAL_LINKS.github} target="_blank">
              <a
                class=""
                href="https://github.com/jonathanraxa"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
              Github
            </a>
            &nbsp;|&nbsp;
            <a href={PERSONAL_LINKS.linkedin} target="_blank">
              Dev.to
            </a>
          </p>

          <p>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "700" }}>personal</span>
            </div>
            <a href={PERSONAL_LINKS.linkedin} target="_blank">
              <a
                class=""
                href="https://github.com/jonathanraxa"
                target="_blank"
              >
                <i class="fab fa-medium fa-2x" style={{ color: "black" }}></i>
              </a>
              Medium
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://dev.to/jonraxa">
              <img
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="Jon Raxa's DEV Profile"
                height="30"
                width="30"
              />
              Dev.to
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href={PERSONAL_LINKS.linkedin} target="_blank">
              <a
                class=""
                href="https://github.com/jonathanraxa"
                target="_blank"
              >
                <i
                  class="fab fa-wordpress fa-2x"
                  style={{ color: "black" }}
                ></i>
              </a>
              Wordpress
            </a>
          </p>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a className="page-scroll" href="#portfolio">
              <p>
                Five years of experience with front-end web development in
                technologies such as Responsive HTML, CSS, and JavaScript.
              </p>
            </a>
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
