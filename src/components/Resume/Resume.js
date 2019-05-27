import React, { Component } from 'react';
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import Personal from './PersonalOther/PersonalOther';

import 'bootstrap/dist/css/bootstrap.css';
import './Resume.css';


class Resume extends Component {
  
    render(){
       
        return(
            <div className="Resume container-fluid" style={{ fontFamily: 'times new roman', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-md-12"><h1 className="upperCase">jonathan raxa</h1></div>
                    <div className="col-md-12">San Francisco, CA 94109</div>
                </div>
                <div className="body-container leftAlign"> 
                    <Experience />
                    <hr />
                    <Projects />
                    <hr />
                    <Education />
                    <hr />
                    <Personal />   
                </div>
             
            </div>
            

        );
    }
}

export default Resume;