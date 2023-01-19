import React from "react";
import { Slide } from "react-awesome-reveal";
import style from './Title.module.scss';

function Title(props) {
  return (
    <Slide >
      <div className={style.title}>
        <span className={style.greenHeader}>my</span>
        <span className={style.cursiveHeader}>{props.title}</span>
      </div>
    </Slide>
  );
}

export default Title;