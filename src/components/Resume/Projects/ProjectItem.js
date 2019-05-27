import React from 'react';
import Collapsible from 'react-collapsible';
import '../../../js/Portfolio';

const ProjectItem = ({ title, description,
     website_title, website_link,
     source_code_title, source_code_link,
     documentation_title, documentation_link,
     contribution, languages,
     date,location, extra_resource }) => {

 


    return (
        <div className="ProjectItem" >
  
            <div className="row no-gutters paddBottom1em">
                <div className="col-md-2">{date}</div>
                <div className="col-md-8 portfolio-item">
                    <Collapsible trigger={title}>
                        <div>
                            <div><strong className="colorRed">Development skills</strong>: {languages.map(language => `${language}, `)}</div>
                            <div><span className="colorRed">Website:</span><span>&nbsp;<a href={website_link}>{website_title}</a></span></div>
                            <div><span className="colorRed">Description:</span><span>&nbsp;{description}</span></div>
                            <div><span className="colorRed">Source Code:</span><span>&nbsp;<a href={source_code_link}>{source_code_title}</a></span></div>
                            <div><span className="colorRed">Documentation:</span><span>&nbsp;<a href={documentation_link}>{documentation_title}</a></span></div>
                            <div><span className="colorRed">Contribution:</span><span>&nbsp;{contribution}</span></div>
                            <div><span className="colorRed">Extra Resource:</span><span>&nbsp;{extra_resource}</span></div>
                        </div>
                    </Collapsible>
                </div>
                <div className="col-md-2"><strong>{location}</strong></div>
            </div>
        </div>

    )
}

export default ProjectItem;