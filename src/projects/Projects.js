import React from "react";
import style from './Projects.module.scss';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import brainImage from '../assets/images/Quaran-brain.png';
import diffCalcImg from '../assets/images/difCalc.png';
import chatImg from '../assets/images/chat.jpg';
import { Slide } from "react-awesome-reveal";

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

  const firstDescription = `A set of five math games for the console on Node.js.
  Skills gained:
    * setting up the environment: Node.js, npm, Prettier, Eslint
    * working with Git / GitHub, CI (GitHub Actions)
    * mastering VSCode
    * working with the readline module
    * using the lodash library`;
  const secondDescription = `Difference calculator - command line utility. Defines a diff between JSON/YAML files with a choice of diff output format.
  Skills gained:
  * using tree recursion
  * writing code in a functional style
  * basics of competent application organization
  * code quality control in Codeclimate
  * working with fs, path modules
  * unit testing in Jest`;
  const thirdDescription = `This is a front-end part of a web application, a simplified analogue of Slack-chat.
  Skills gained:
  * Development on React using React Hooks
  * Using the Redux Toolkit
  * Deploying on Railway
  * Layout using React-Bootstrap
  * Routing organization: React-Router
  * Interacting with the server via web sockets (Socket.IO)
  * Working with libraries Formik, React-Toastify, leo-profanity
  * working with yup, i18next, on-change libraries
  * dealing with backend by HTTP requests (axios)
  * bug tracking in Rollbar`;

  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={style.projectsContainer}>
      <Title title={'Projects'}/>
      <Slide>
        <div className={style.itemsBlock}>
          <Project 
            title={'Brain Games'} 
            description={firstDescription} 
            style={brainGames}
            link={"https://github.com/viskuzi/frontend-project-lvl1"}
          />
          <Project 
            title={'Difference Calculator'} 
            description={secondDescription}
            style={diffCalc}
            link={"https://github.com/viskuzi/frontend-project-lvl2"}
          />
          <Project 
            title={'Online Chat'} 
            description={thirdDescription} 
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