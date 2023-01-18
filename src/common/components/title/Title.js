import React from "react";
import { Fade } from "react-reveal";
import style from './Title.module.scss';

function Title(props) {
  return (
    <Fade left>
      <div className={style.title}>
        <span className={style.greenHeader}>my</span>
        <span className={style.cursiveHeader}>{props.title}</span>
      </div>
    </Fade>
  );
}

export default Title;