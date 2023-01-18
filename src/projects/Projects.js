import React from "react";
import style from './Projects.module.scss';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import brainImage from '../assets/images/Quaran-brain.png';
import diffCalcImg from '../assets/images/difCalc.png';
import chatImg from '../assets/images/chat.jpg';
import { Slide } from "react-reveal";

function Projects() {
  const brainGames = {
    backgroundImage: `url(${brainImage})`,
  };

  const diffCalc = {
    backgroundImage: `url(${diffCalcImg})`,
  };

  const chat = {
    backgroundImage: `url(${chatImg})`,
  };

  return (
    <div className={style.projectsBlock}>
      <div className={style.projectsContainer}>
      <Title title={'Projects'}/>
      <Slide top cascade>
        <div className={style.itemsBlock}>
          <Project 
            title={'Brain Games'} 
            description={'beautiful description about me perfect skills in programming'} 
            style={brainGames}
            link={"https://github.com/viskuzi/frontend-project-lvl1"}
          />
          <Project 
            title={'Difference Calculator'} 
            description={'beautiful description about me perfect skills in programming'}
            style={diffCalc}
            link={"https://github.com/viskuzi/frontend-project-lvl2"}
          />
          <Project 
            title={'Online Chat(in progress)'} 
            description={'beautiful description about me perfect skills in programming'} 
            style={chat}
            link={"https://github.com/viskuzi/js-react-developer-project-12"}
          />
        </div>
        </Slide>
      </div>
    </div>
  );
}

export default Projects;