import React, { Component } from "react";
import { Contact } from "../components/Evergreen/Contact";
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Footer from "../components/Evergreen/Footer";
import Resume from '../components/Resume/Resume';
import HomePage from '../components/HomePage/HomePage';

import './App.css';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-top">
        <BrowserRouter>
          
          <div>
            <Route path="/jonathan-raxa" component={HomePage} />
            <Route path="/resume" exact component={Resume} />          
          <hr />
          <Contact />
          </div>
          <Footer
            dark={true}
            id="footer"
          />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;