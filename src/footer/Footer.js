import React from "react";
import style from './Footer.module.scss';
import instaImg from '../assets/images/insta.jpeg';
import linkedinImg from '../assets/images/linkedin.jpg';
import gitImg from '../assets/images/git.png';

function Footer() {
  const footerContainer = [
    {name: 'linkedIn', logo: linkedinImg, link: 'https://www.linkedin.com/in/kanstantsin-lushchyk-b2bb65235/'},
    {name: 'gitHub', logo: gitImg, link: 'https://github.com/viskuzi'},
    {name: 'instagram', logo: instaImg, link: 'https://www.instagram.com/viskuzi/'},
  ];

  const logoHandler = (link) => {
    window.location.href = link;
  };

  return (
    <div className={style.containerBlock}>
      <div className={style.linksBlock}>
        {footerContainer.map((f, i) =>
          <div key={i} className={style.logo} onClick={() => logoHandler(f.link)}>
            <img alt="" src={f.logo} className={style.imgLogo} />
          </div>
        )}
      </div>
      <span className={style.littleBlackText}>© 2023 All Rights Reserved.</span>
    </div>
  );
}

export default Footer;