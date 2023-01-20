import React from 'react';
import style from './Main.module.scss';
import  { Zoom } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import Title from "../common/components/title/Title";

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
              <ReactTypingEffect text="Kanstantsin" speed="140" eraseDelay="60000" typingDelay="1000" cursor=" " />
            </div>
          </Zoom>
          <Zoom>
            <div className={style.surname}>
            <ReactTypingEffect text="Lushchyk" speed="200" eraseDelay="60000" typingDelay="2550" cursor=" " />
            </div>
          </Zoom>
            <Zoom><span className={style.cursiveHeader}>Web Developer</span></Zoom>
          </div>
          <Tilt scale="1.05"><div className={style.foto} /></Tilt>
        </div>        
      </div>
      <div className={style.aboutMe}>
        <Title title={'Story'} />
        <span className={style.myDescription}>  I have a degree in economics and valuable related experience in financial processes and banking. Currently changing my career to Frontend developer. Open for new opportunities within your company. I have a big passion for technologies and languages learning, feel that I can bring more value to society by realizing some interesting projects and improve people's lives within development.
          To my best soft skills I can attribute responsibility, creativity, friendliness, empathy. I'm hard working and ready to study new skills and technologies. Will be a strong member of every team)
          Took part in an international student exchange program Work and travel in the USA.</span>
      </div>
    </div>  
  );
}

export default Main;

