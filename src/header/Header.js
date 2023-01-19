import React from "react";
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import { Zoom } from "react-awesome-reveal";

function Header() {
  return (
    <div className={style.header}>
        <div href="/" className={style.emailBut}>
        <Zoom><span>kanstantsin.lushchyk@gmail.com</span></Zoom>
			  </div>
      <Nav />
    </div>
  );
}

export default Header;