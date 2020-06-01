import React, { Component } from "react";
import IntroIntell from './IntroIntell';
import Podcast from './Podcast';
import Toastbusters from './Toastbusters';
import IntroIntellDescription from "./descriptions/IntroIntellDescription";
import PodcastDescription from './descriptions/PodcastDescription';
import ToastbustersDescription from './descriptions/ToastbustersDescription';

class ExtraCurricularCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel_1: false,
      panel_2: false,
      panel_3: false,
    };
  }

  showPersonal = (id) => {
    switch (id) {
      case "panel_1":
        this.setState({
          panel_1: true,
          panel_2: false,
          panel_3: false,
        });
        break;

      case "panel_2":
        this.setState({
          panel_1: false,
          panel_2: true,
          panel_3: false,
        });
        break;

      case "panel_3":
        this.setState({
          panel_1: false,
          panel_2: false,
          panel_3: true,
        });
        break;

      default:
        this.setState({
          panel_1: false,
          panel_2: false,
          panel_3: false,
        });
        break;
    }
  };
  render() {
      
    return (
      <div className="extracurricular">
        <div className="extracurricular-icons">
          <div onMouseEnter={() => this.showPersonal('panel_1')}><IntroIntell /></div>
          <div onMouseEnter={() => this.showPersonal('panel_2')}><Podcast /></div>
          <div onMouseEnter={() => this.showPersonal('panel_3')}><Toastbusters /></div>
        </div>
        <div className="extracurricular-description">
          {this.state.panel_1 ? <IntroIntellDescription /> : ''}
          {this.state.panel_2 ? <PodcastDescription /> : ''}
          {this.state.panel_3 ? <ToastbustersDescription /> : ''}
        </div>
      </div>
    );
  }
};
export default ExtraCurricularCont;
