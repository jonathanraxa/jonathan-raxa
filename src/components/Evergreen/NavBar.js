import React, { Component } from "react";
import { Link as Link2 } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import './Evergreen.css';
import '../../containers/App.css';

export default class NavBar extends Component {
    
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    // this.checkWindow();
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  // checkWindow = () => {
  //   console.log("step one");
  //   if (window.location.href.indexOf("jonathan-raxa") > -1) {
  //     console.log("hello");
  //   }
  // }
   
  render() {
   
    return (
      <nav className="NavBar sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <Link2 to={{ pathname: '/jonathan-raxa' }} className="navbar-brand">Jonathan Raxa</Link2>
         
        <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={this.state.isToggleOn ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}
         id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto justify-content-end">
  
            {/* <Link to={{ pathname: '/jonathan-raxa' }} onlyActiveOnIndex onClick={this.handleClick} className="nav-item nav-link capitalizeLi">home</Link> */}
            {/* <Link to={{ pathname: '/resume' }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>resume</Link> */}
            {/* <Link to={{ pathname: '/jonathan-raxa', hash: 'experience'  }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>experience</Link> */}
            {/* <Link to={{ pathname: '/jonathan-raxa', hash: 'portfolio' }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>portfolio</Link> */}
            {/* <Link to={{ pathname: '/jonathan-raxa', hash: 'aboutme' }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>aboutme</Link> */}
            {/* <Link to={{ pathname: '/jonathan-raxa', hash: 'education' }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>education</Link> */}
            {/* <Link to={{ pathname: '/jonathan-raxa', hash: 'contact' }} onlyActiveOnIndex onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>contact</Link> */}
            
            <Link2 to={{ pathname: '/jonathan-raxa' }} onClick={(event) => { this.handleClick(); this.scrollToTop(); }} className="nav-item nav-link capitalizeLi">home</Link2>
            <Link2 to={{ pathname: '/resume' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>resume</Link2>
           
            <Link to="experience" onClick={this.handleClick} activeClass="active" activeStyle={{ color: '#fec503' }} spy={true} smooth={true} offset={-100} duration={300} className="nav-item nav-link capitalizeLi">experience</Link>
            <Link to="portfolio" onClick={this.handleClick} activeClass="active" activeStyle={{ color: '#fec503' }} spy={true} smooth={true} offset={-100} duration={300} className="nav-item nav-link capitalizeLi">portfolio</Link>
            <Link to="aboutme" onClick={this.handleClick} activeClass="active" activeStyle={{ color: '#fec503' }} spy={true} smooth={true} offset={-100} duration={300} className="nav-item nav-link capitalizeLi">aboutme</Link>
            <Link to="education" onClick={this.handleClick} activeClass="active" activeStyle={{ color: '#fec503' }} spy={true} smooth={true} offset={-100} duration={300} className="nav-item nav-link capitalizeLi">education</Link>
            <Link to="contact" onClick={this.handleClick} activeClass="active" activeStyle={{ color: '#fec503' }} spy={true} smooth={true} offset={-100} duration={300} className="nav-item nav-link capitalizeLi">contact</Link>

            
          </div>
        </div>
     
      </nav>

      
    );
  }
}
