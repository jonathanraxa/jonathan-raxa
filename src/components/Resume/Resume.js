import React, { Component } from 'react';
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import Personal from './PersonalOther/PersonalOther';

import 'bootstrap/dist/css/bootstrap.css';
import './Resume.css';
import NavBarResume from './NavBarResume';


class Resume extends Component {
  
    render(){
       
        return(
            <>
            <NavBarResume />
            <div className="Resume container-fluid" style={{ fontFamily: 'times new roman', maxWidth: '1280px'}}>
                <div className="row" style={{ textAlign: 'center' }}>
                    <div className="col-md-12"><h1 className="upperCase">jonathan raxa</h1></div>
                        <div className="col-md-12">San Francisco, CA 94109&nbsp;|&nbsp;
                        <a href="mailto:jonathanraxa@gmail.com">jonathanraxa@gmail.com</a>&nbsp;|&nbsp;
                        <a href="https://www.linkedin.com/in/jonathanraxa/" target="_blank">LinkedIn</a></div>
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
            </>
        );
    }
}

export default Resume;