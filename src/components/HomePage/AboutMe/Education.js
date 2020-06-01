import React from 'react';
import { PERSONAL_LINKS, IMAGES } from "../../Assets/Assets";

export const Education = () => {
    return (
      <div className="education">
        <div className="text-center">
          <img className="education-img" src={IMAGES.sfsu} />
        </div>
        <div className="text-center">
          <div className="education-description section-title">
            <h2>EDUCATION</h2>
            <p className="school">San Francisco State University</p>
            <p>
              <strong>Bachelor of Science in Computer Science</strong>
              &nbsp;&nbsp;|&nbsp;&nbsp;August 2010 – May 2016
            </p>
            <p>
              and a <strong style={{ color: "red" }}>TON</strong> of Books
            </p>
            <div className="read-more">
              <p>
                <i>
                  click{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    here
                  </a>{" "}
                  for my experience
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}