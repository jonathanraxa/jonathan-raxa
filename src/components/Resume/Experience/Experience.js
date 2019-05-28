import React from 'react';


const Experience = () => {
    return (
        <div className="Experience" id="experience">
            <div className="row">
                <div className="col-md-2">
                    <strong>Experience</strong>
                </div>
            </div>

            {/* GAP INC */}
            <div className="gapinc">
                <div className="row no-gutters">
                    <div className="col-md-2">2016 - Present</div>
                    <div className="col-md-8 upperCase"><strong>Gap Inc.</strong></div>
                    <div className="col-md-2"><strong>San Francisco, CA</strong></div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2 position_title">Front-End Web Content Developer</div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2">
                        <ul className="paddLeft noMarginBottom">
                            <li><strong className="colorRed">Development skills</strong>: HTML/CSS, JavaScript (jQuery), Salesforce B2C Development, Front-End Design</li>
                            <li>Pioneering new front-end Salesforce CMS process and site templating for Gap EU/UK</li>
                            <li>Launching bi-monthly marketing campaigns using HTML/CSS for engaging customer experience</li>
                            <li>Developed Google scripts to simplify workflow resulting in a 50% increase in productivity</li>
                            <li>Consulting with brand partners and coding HTML for optimal site performance and customer experience</li>
                        </ul>
                    </div>
                </div>
            </div>

        <br />
            {/* LQ DIGIAL */}
            <div className="lqdigital">
                <div className="row no-gutters">
                    <div className="col-md-2">2016</div>
                    <div className="col-md-8 upperCase" ><strong>LQ Digital</strong></div>
                    <div className="col-md-2"><strong>Emeryville, CA</strong></div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2 position_title">Front-End Web Content Manager / Developer</div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2">
                        <ul className="paddLeft noMarginBottom">
                            <li><strong className="colorRed">Development skills</strong>: HTML/CSS, Ruby, JavaScript</li>
                            <li>Developed ruby script to simplify content workflow from 4 hours to 15 minutes</li>
                            <li>Produced and re-designed various websites for new promotions using HTML and CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            {/* SFSI I.T.s and COE */}
            <div className="sfsu">
                <div className="row no-gutters">
                    <div className="col-md-2">2012 - 2016</div>
                    <div className="col-md-8 upperCase" ><strong>SFSU I.T. Department (ITS) | College of Education I.T. (POETS)</strong></div>
                    <div className="col-md-2"><strong>San Francisco, CA</strong></div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2 position_title">Technology Consultant | General IT Assistant</div>
                </div>

                <div className="row no-gutters">
                    <div className="offset-md-2">
                        <ul className="paddLeft noMarginBottom">
                            <li><strong className="colorRed">Development skills</strong>: Drupal CMS, HTML/CSS, JavaScript (jQuery)</li>
                            <li>Led faculty training in Drupal CMS practices, development, and deployment</li>
                            <li>Validated Drupal websites to ensure proper accessibility requirements for disability</li>
                            <li>Oversaw and assisted with fixing various websites issues using web tools, HTML, and CSS</li>
                            <li>Developed video prototype for instructor/student interaction using JavaScript, jQuery, HTML, and CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;