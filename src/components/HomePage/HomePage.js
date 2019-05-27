import React, { Component } from "react";
// import '../../../css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AboutMe } from "./AboutMe/AboutMe";
import { VimeoVideo } from "./AboutMe/VimeoVideo";
import { TheMotto } from "./AboutMe/TheMotto";
import { PortfolioHeading } from "./Portfolio/PortfolioHeading";
import { Education } from "./AboutMe/Education";
import { Contact } from "../Evergreen/Contact";

import PanelOne from "./AboutMe/PanelOne";
import PanelTwo from "./AboutMe/PanelTwo";
import PanelThree from "./AboutMe/PanelThree";
import WorkExperience from "./WorkExperience/WorkExperience";
import Portfolio from "./Portfolio/Portfolio";
import { Route } from 'react-router-dom';
import { IMAGES } from '../../js/Images';
import axios from 'axios';


class HomePage extends Component {
    
    // state = {
    //     projects: []
    // }

    // componentDidMount() {
    //     axios.get('https://api.github.com/users/jonathanraxa/repos')
    //         .then(response => {
    //             console.log(response);
    //             this.setState({ projects: response.data });
    //             console.log(projects);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });

    // }

    render() {
        // const this.projects = this.state.projects.map(projects => {

        // });
        return (
            <div className="Homepage">
                <section id="aboutme">
                    <div className="container">
                        <div className="row">
                            <AboutMe />
                        </div>
                    </div>
                </section>

                <section id="panels">
                    <div className="container">
                        <div className="row">
                            <PanelOne />
                            <PanelTwo />
                            <PanelThree />
                        </div>
                    </div>
                </section>

                <section id="vimeo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <VimeoVideo />
                            </div>
                        </div>
                    </div>
                </section>

                <TheMotto />

                <WorkExperience />

                {/* porfolio / projects */}
                <PortfolioHeading />
                
                <section id="portfolio">
                    <div className="container">
                        <div className="row row-0-gutter">
                        <Portfolio
                            title="VidEdu"
                            subtitle="Video note taking application"
                            image={IMAGES.videdu}
                            id="1" />
                        <Portfolio
                            title="4Uimg"
                            subtitle="Video note taking application"
                            image={IMAGES.pending}
                            id="2" />
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title="Photoworld"
                                subtitle="Video note taking application"
                                image={IMAGES.photoworld}
                                id="1" />
                            <Portfolio
                                title="SFPark"
                                subtitle="Video note taking application"
                                image={IMAGES.sfpark}
                                id="2" />
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title="Question/Answer Video "
                                subtitle="Video note taking application"
                                image={IMAGES.pending}
                                id="1" />
                            <Portfolio
                                title="Directory Text Replacer Scripts"
                                subtitle="Video note taking application"
                                image={IMAGES.script}
                                id="2" />
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title="Personal Website"
                                subtitle="Video note taking application"
                                image={IMAGES.mywebsite}
                                id="1" />
                            <Portfolio
                                title="Property Calculator"
                                subtitle="Video note taking application"
                                image={IMAGES.rentals}
                                id="2" />
                        </div>
                    </div>
                </section>

                <hr />

                <section id="education">
                    <div className="container">
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