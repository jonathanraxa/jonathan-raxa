import React from 'react';
import ProjectItem from './ProjectItem';
import { VIDEDU, _4UIMG, PHOTOWORLD, SFPARK, RUBYSCRIPT, PERSONALWEBSITE } from '../../../js/Portfolio';

const Projects = () => {
    return (
        <div className = "Projects" >
            <div className="row no-gutters">
                <div className="col-md-2">
                    <strong>Projects</strong>
                </div>
            <div className="col-md-8"><span><i>click a project name to see more</i></span></div>
            </div>
            <ProjectItem 
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
            />        
            <ProjectItem
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
            />
            <ProjectItem
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
            />
            <ProjectItem
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
            />
            <ProjectItem
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
            />
            <ProjectItem
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
            />
        </div>
    );
}

export default Projects;