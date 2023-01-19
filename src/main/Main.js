import React from "react";
import style from './Main.module.scss';
import  { Zoom } from "react-awesome-reveal";

function Main() {
  return (
    <div className={style.mainBlock}>
      <a href="https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:40167993/" className={style.downloadBut}>
				<span>Download CV</span>
			</a>
      <div className={style.container}>
        <div className={style.mainItems}>
          <div className={style.text}>
          <Zoom><div className={style.name}>Kanstantsin</div></Zoom>
          <Zoom><div className={style.surname}> Lushchyk</div></Zoom>
            <Zoom><span className={style.cursiveHeader}>Web Developer</span></Zoom>
          </div>
        <Zoom><div className={style.foto} /></Zoom>
        </div>        
      </div>
    </div>  
  );
}

export default Main;

