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
        <a className="navbar-brand" href="/"><Link to="/">Jonathan Raxa</Link></a>
        
        <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={this.state.isToggleOn ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}
         id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link to={{
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>New Post</Link> */}

            <Link to={{ pathname: '/' }} onClick={this.handleClick} className="nav-item nav-link capitalizeLi">home</Link>
            <Link to={{ pathname: '/resume' }} onClick={this.handleClick} className='nav-item nav-link capitalizeLi'>resume</Link>
            <a onClick={this.handleClick} className='nav-item nav-link capitalizeLi' href="/#experience">experience</a>
            <a onClick={this.handleClick} className='nav-item nav-link capitalizeLi' href="/#portfolio">portfolio</a>
            <a onClick={this.handleClick} className='nav-item nav-link capitalizeLi' href="/#aboutme">about me</a>
            <a onClick={this.handleClick} className='nav-item nav-link capitalizeLi' href="/#education">education</a>
            <a onClick={this.handleClick} className='nav-item nav-link capitalizeLi' href="/#contact">contact</a>
          </div>
        </div>
     
      </nav>

      
    );
  }
}
