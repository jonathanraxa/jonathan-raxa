import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

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
  }

  render() {
    return (
      <nav className="NavBar sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><Link to={{ pathname: '/jonathan-raxa/' }}>Jonathan Raxa</Link></a>
        
        <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={this.state.isToggleOn ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}
         id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto justify-content-end">
  
            <Link to={{ pathname: '/jonathan-raxa/' }} onClick={this.handleClick} className="nav-item nav-link capitalizeLi">home</Link>
            <Link to={{ pathname: '/resume' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>resume</Link>
            <Link to={{ pathname: '/jonathan-raxa/#experience' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>experience</Link>
            <Link to={{ pathname: '/jonathan-raxa/#portfolio' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>portfolio</Link>
            <Link to={{ pathname: '/jonathan-raxa/#aboutme' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>aboutme</Link>
            <Link to={{ pathname: '/jonathan-raxa/#education' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>education</Link>
            <Link to={{ pathname: '/jonathan-raxa/#contact' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>contact</Link>

          </div>
        </div>
     
      </nav>

      
    );
  }
}
