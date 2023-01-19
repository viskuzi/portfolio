import React, { useState } from "react";
import style from './BurgerNav.module.scss';
import { Link } from 'react-scroll';

function BurgerNav() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const onBurgerMenu =() => {
    setMenuIsOpen(!menuIsOpen);
    console.log('menuisopen', menuIsOpen)
  };

  return (
      <div className={style.burgerNav}>
        <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : `${style.burgerNavItems}`}>
          <Link className={style.navItem}  activeClass={style.active} to="home" spy={true} smooth={true} offset={-60} duration={1000}>
            Home
          </Link>
          <Link className={style.navItem}  to="projects" spy={false} smooth={true} offset={0} duration={1000}>
            Projects
          </Link>
          <Link className={style.navItem}  to="skills" spy={false} smooth={true} offset={0} duration={1000}>
            Skills
          </Link>
          <Link className={style.navItem}  to="contacts" spy={false} smooth={true} offset={0} duration={1000}>
            Contacts
          </Link>
        </div>
        <div onClick={onBurgerMenu} className={style.menuButton}></div>
      </div>
  );
}

export default BurgerNav;