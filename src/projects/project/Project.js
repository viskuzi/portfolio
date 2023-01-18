import React from "react";
import style from './Project.module.scss';

function Project(props) {
  return (
    <div className={style.item}>
      <div className={style.image} style={props.style}>
        <a href={props.link} className={style.link}>See project</a>
      </div>
      <span className={style.middleBlackText}>{props.title}</span>
      <span>{props.description}</span>
    </div>
  );
}

export default Project;