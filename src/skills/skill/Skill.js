import React from "react";
import style from './Skill.module.scss';

function Skill(props) {
  return (
    <div className={style.skill}>
      <div className={style.image} style={props.style}></div>
      <span className={style.middleBlackText }>{props.title}</span>
    </div>
  );
}

export default Skill;