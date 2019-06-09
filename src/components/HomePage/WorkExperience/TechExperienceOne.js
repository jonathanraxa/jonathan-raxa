import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

export const TechExperienceOne = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 text-center custom-row-width-col" style={{ paddingTop: '2em'}}>
                    <div className="mz-about-container">
                        <h2 className="resume-title">Front-End Web Content Developer</h2>
                        <p>Gap Inc, San Francisco&nbsp;|&nbsp;September 2016 – Present</p>
                        <ul>
                            <li><strong className="colorRed">Development skills:&nbsp;</strong><i>HTML/CSS, JavaScript (jQuery), Salesforce B2C Development, Front-End Design</i></li>
                            <li>Pioneering new front-end Salesforce CMS process and site templating for Gap EU/UK</li>
                            <li>Launching bi-monthly marketing campaigns using HTML/CSS for engaging customer experience</li>
                            <li>Developed Google scripts to simplify workflow resulting in a 50% increase in productivity</li>
                            <li>Consulting with brand partners and coding HTML for optimal site performance and customer experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}