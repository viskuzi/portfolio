import React from 'react';
import style from './Main.module.scss';
import  { Zoom } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

function Main() {
  return (
    <div id="home" className={style.mainBlock}>
      <a href="https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:40167993/" className={style.downloadBut}>
				<span>Download CV</span>
			</a>
      <div className={style.container}>
        <div className={style.mainItems}>
          <div className={style.text}>
          <Zoom>
            <div className={style.name}>
              <ReactTypingEffect text="Kanstantsin" speed="200" eraseDelay="60000" typingDelay="1000" cursor=" " />
            </div>
          </Zoom>
          <Zoom>
            <div className={style.surname}>
            <ReactTypingEffect text="Lushchyk" speed="200" eraseDelay="60000" typingDelay="3200" cursor=" " />
            </div>
          </Zoom>
            <Zoom><span className={style.cursiveHeader}>Web Developer</span></Zoom>
          </div>
        <Zoom>
          <Tilt scale="1.05"><div className={style.foto} /></Tilt>
        </Zoom>
        </div>        
      </div>
    </div>  
  );
}

export default Main;

