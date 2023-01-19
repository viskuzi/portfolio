import React from "react";
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import { Zoom } from "react-awesome-reveal";
import BurgerNav from "./burgerNav/BurgerNav";

function Header() {
  return (
    <div className={style.header}>
        <div className={style.emailBut}>
          <Zoom><span>kanstantsin.lushchyk@gmail.com</span></Zoom>
			  </div>
      <Nav />
      <BurgerNav />
    </div>
  );
}

export default Header;