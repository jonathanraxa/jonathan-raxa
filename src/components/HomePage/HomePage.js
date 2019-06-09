import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { AboutMe } from "./AboutMe/AboutMe";
import { TheMotto } from "./AboutMe/TheMotto";
import { PortfolioHeading } from "./Portfolio/PortfolioHeading";
import { Education } from "./AboutMe/Education";

import NavBarHome from "./NavBarHome";
import PanelOne from "./AboutMe/PanelOne";
import PanelTwo from "./AboutMe/PanelTwo";
import PanelThree from "./AboutMe/PanelThree";
import WorkExperience from "./WorkExperience/WorkExperience";
import Portfolio from "./Portfolio/Portfolio";

import { VIDEDU,
        _4UIMG,
        PHOTOWORLD,
        SFPARK,
        RUBYSCRIPT,
        PERSONALWEBSITE,
        GOOGLESCRIPT,
        RENTALS} from '../Assets/Assets';

import axios from 'axios';


class HomePage extends Component {
    
    render() {
      
        return (
           
            <div className="Homepage">
                <NavBarHome />
                <section id="aboutme">
                    <div className="container">
                        <div className="row">
                            <AboutMe />
                        </div>
                    </div>
                </section>

                <section id="panels" style={{ paddingBottom: '0'}}>
                    <div className="container">
                        <div className="row">
                            <PanelOne />
                            <PanelTwo />
                            <PanelThree />
                        </div>
                    </div>
                </section>

                {/* <section id="vimeo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <VimeoVideo />
                            </div>
                        </div>
                    </div>
                </section> */}

                <TheMotto />

                <WorkExperience />

                {/* porfolio / projects */}
                <PortfolioHeading />
                
                <section>
                    <div className="container">
                        <div className="row row-0-gutter">
                        <Portfolio
                            title={VIDEDU.title}
                            description={VIDEDU.description}
                            website_title={VIDEDU.website_title}
                            website_link={VIDEDU.website_link}
                            source_code_title={VIDEDU.source_code_title}
                            source_code_link={VIDEDU.source_code_link}
                            documentation_title={VIDEDU.documentation_title}
                            documentation_link={VIDEDU.documentation_link}
                            contribution={VIDEDU.contribution}
                            languages={VIDEDU.languages}
                            date={VIDEDU.date}
                            extra_resource={VIDEDU.extra_resource}
                            location={VIDEDU.location}
                            extra_resource_TF = {VIDEDU.extra_resource_TF}
                            image = {VIDEDU.image}
                        />  
                            <Portfolio
                                title={_4UIMG.title}
                                description={_4UIMG.description}
                                website_title={_4UIMG.website_title}
                                website_link={_4UIMG.website_link}
                                source_code_title={_4UIMG.source_code_title}
                                source_code_link={_4UIMG.source_code_link}
                                documentation_title={_4UIMG.documentation_title}
                                documentation_link={_4UIMG.documentation_link}
                                contribution={_4UIMG.contribution}
                                languages={_4UIMG.languages}
                                date={_4UIMG.date}
                                extra_resource={_4UIMG.extra_resource}
                                location={_4UIMG.location}
                                extra_resource_TF={_4UIMG.extra_resource_TF}
                                image={_4UIMG.image}
                            /> 
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title={RENTALS.title}
                                description={RENTALS.description}
                                website_title={RENTALS.website_title}
                                website_link={RENTALS.website_link}
                                source_code_title={RENTALS.source_code_title}
                                source_code_link={RENTALS.source_code_link}
                                documentation_title={RENTALS.documentation_title}
                                documentation_link={RENTALS.documentation_link}
                                contribution={RENTALS.contribution}
                                languages={RENTALS.languages}
                                date={RENTALS.date}
                                extra_resource={RENTALS.extra_resource}
                                location={RENTALS.location}
                                extra_resource_TF={RENTALS.extra_resource_TF}
                                image={RENTALS.image}
                            />
                            <Portfolio
                                title={GOOGLESCRIPT.title}
                                description={GOOGLESCRIPT.description}
                                website_title={GOOGLESCRIPT.website_title}
                                website_link={GOOGLESCRIPT.website_link}
                                source_code_title={GOOGLESCRIPT.source_code_title}
                                source_code_link={GOOGLESCRIPT.source_code_link}
                                documentation_title={GOOGLESCRIPT.documentation_title}
                                documentation_link={GOOGLESCRIPT.documentation_link}
                                contribution={GOOGLESCRIPT.contribution}
                                languages={GOOGLESCRIPT.languages}
                                date={GOOGLESCRIPT.date}
                                extra_resource={GOOGLESCRIPT.extra_resource}
                                location={GOOGLESCRIPT.location}
                                extra_resource_TF={GOOGLESCRIPT.extra_resource_TF}
                                image={GOOGLESCRIPT.image}
                            />
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title={PHOTOWORLD.title}
                                description={PHOTOWORLD.description}
                                website_title={PHOTOWORLD.website_title}
                                website_link={PHOTOWORLD.website_link}
                                source_code_title={PHOTOWORLD.source_code_title}
                                source_code_link={PHOTOWORLD.source_code_link}
                                documentation_title={PHOTOWORLD.documentation_title}
                                documentation_link={PHOTOWORLD.documentation_link}
                                contribution={PHOTOWORLD.contribution}
                                languages={PHOTOWORLD.languages}
                                date={PHOTOWORLD.date}
                                extra_resource={PHOTOWORLD.extra_resource}
                                location={PHOTOWORLD.location}
                                extra_resource_TF={PHOTOWORLD.extra_resource_TF}
                                image={PHOTOWORLD.image}
                            />
                            <Portfolio
                                title={SFPARK.title}
                                description={SFPARK.description}
                                website_title={SFPARK.website_title}
                                website_link={SFPARK.website_link}
                                source_code_title={SFPARK.source_code_title}
                                source_code_link={SFPARK.source_code_link}
                                documentation_title={SFPARK.documentation_title}
                                documentation_link={SFPARK.documentation_link}
                                contribution={SFPARK.contribution}
                                languages={SFPARK.languages}
                                date={SFPARK.date}
                                extra_resource={SFPARK.extra_resource}
                                location={SFPARK.location}
                                extra_resource_TF={SFPARK.extra_resource_TF}
                                image={SFPARK.image}
                            />
                        </div>
                        <div className="row row-0-gutter">
                            <Portfolio
                                title={RUBYSCRIPT.title}
                                description={RUBYSCRIPT.description}
                                website_title={RUBYSCRIPT.website_title}
                                website_link={RUBYSCRIPT.website_link}
                                source_code_title={RUBYSCRIPT.source_code_title}
                                source_code_link={RUBYSCRIPT.source_code_link}
                                documentation_title={RUBYSCRIPT.documentation_title}
                                documentation_link={RUBYSCRIPT.documentation_link}
                                contribution={RUBYSCRIPT.contribution}
                                languages={RUBYSCRIPT.languages}
                                date={RUBYSCRIPT.date}
                                extra_resource={RUBYSCRIPT.extra_resource}
                                location={RUBYSCRIPT.location}
                                extra_resource_TF={RUBYSCRIPT.extra_resource_TF}
                                image={RUBYSCRIPT.image}
                            />
                            <Portfolio
                                title={PERSONALWEBSITE.title}
                                description={PERSONALWEBSITE.description}
                                website_title={PERSONALWEBSITE.website_title}
                                website_link={PERSONALWEBSITE.website_link}
                                source_code_title={PERSONALWEBSITE.source_code_title}
                                source_code_link={PERSONALWEBSITE.source_code_link}
                                documentation_title={PERSONALWEBSITE.documentation_title}
                                documentation_link={PERSONALWEBSITE.documentation_link}
                                contribution={PERSONALWEBSITE.contribution}
                                languages={PERSONALWEBSITE.languages}
                                date={PERSONALWEBSITE.date}
                                extra_resource={PERSONALWEBSITE.extra_resource}
                                location={PERSONALWEBSITE.location}
                                extra_resource_TF={PERSONALWEBSITE.extra_resource_TF}
                                image={PERSONALWEBSITE.image}
                            />
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