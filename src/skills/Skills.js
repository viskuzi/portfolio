import React from "react";
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImg from '../assets/images/js.png';
import cssImg from '../assets/images/css.png';
import htmlImg from '../assets/images/html.png';
import reactImg from '../assets/images/react.png';
import reduxImg from '../assets/images/redux.png';
import toolkitImg from '../assets/images/toolkit.png';
import gitImg from '../assets/images/git.png';
import { Slide } from "react-reveal";

function Skills() {
  const js = {
    backgroundImage: `url(${jsImg})`,
  };
  const css = {
    backgroundImage: `url(${cssImg})`,
  };
  const html = {
    backgroundImage: `url(${htmlImg})`,
  };
  const react = {
    backgroundImage: `url(${reactImg})`,
  };
  const redux = {
    backgroundImage: `url(${reduxImg})`,
  };
  const toolkit = {
    backgroundImage: `url(${toolkitImg})`,
  };
  const git = {
    backgroundImage: `url(${gitImg})`,
  };

  return (
    <div className={style.skillsBlock}>
      <div className={style.skillsContainer}>
        <Title title={'Skills'}/>
        <Slide top cascade>
        <div className={style.skills}>
          <Skill title={'JS'} style={js} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'CSS3'} style={css} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'HTML5'} style={html} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'React'} style={react} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'Redux'} style={redux} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'Redux Toolkit'} style={toolkit} description={'beautiful description about me perfect skills in programming'}/>
          <Skill title={'GitHub'} style={git} description={'beautiful description about me perfect skills in programming'}/>
        </div>
        </Slide>
      </div>
    </div>
  );
}

export default Skills;