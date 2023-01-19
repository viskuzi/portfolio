import React from "react";
import { Roll } from "react-awesome-reveal";
import style from './Nav.module.scss';

function Nav() {
  return (
    
      <div className={style.nav}>
        <Roll>
        <a href="/" className={style.navItem}>Home</a>
        <a href="/" className={style.navItem}>Skills</a>
        <a href="/" className={style.navItem}>Projects</a>
        <a href="/" className={style.navItem}>Contacts</a>
        </Roll>
      </div>
    
  );
}

export default Nav;