import React from "react";
import style from './Main.module.scss';

function Main() {
  return (
    <div className={style.mainBlock}>
      <a href="https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:40167993/" className={style.downloadBut}>
				<span>Download CV</span>
			</a>
      <div className={style.container}>
        <div className={style.mainItems}>
          <div className={style.text}>
            <div className={style.name}>Kanstantsin</div>
            <div className={style.surname}> Lushchyk</div>
            <span className={style.cursiveHeader}>Web developer</span>
          </div>
          <div className={style.foto}></div>
        </div>        
      </div>
    </div>  
  );
}

export default Main;

