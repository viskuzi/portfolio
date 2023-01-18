import React from "react";
import { Slide } from "react-reveal";
import style from './Nav.module.scss';

function Nav() {
  return (
    <Slide top cascade>
      <div className={style.nav}>
        <a href="/" className={style.navItem}>Home</a>
        <a href="/" className={style.navItem}>Skills</a>
        <a href="/" className={style.navItem}>Projects</a>
        <a href="/" className={style.navItem}>Contacts</a>
      </div>
    </Slide>
  );
}

export default Nav;