import React from "react";
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import { Fade } from "react-reveal";

function Header() {
  return (
    <div className={style.header}>
      <Fade right>
        <div href="/" className={style.emailBut}>
			  	<span>kanstantsin.lushchyk@gmail.com</span>
			  </div>
      </Fade>
      <Nav />
    </div>
  );
}

export default Header;