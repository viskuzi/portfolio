import React from "react";
import style from './Title.module.scss';
import styleContainer from '../../../common/styles/Container.module.css'

function Title(props) {
  return (
    <div className={style.title}>
      <span className={style.greenHeader}>my</span>
      <span className={style.cursiveHeader}>{props.title}</span>
    </div>
  );
}

export default Title;