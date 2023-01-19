import React from "react";
import { Roll } from "react-awesome-reveal";
import style from './Nav.module.scss';
import { Link } from 'react-scroll';

function Nav() {
  return (
      <div className={style.nav}>
        <Roll>
          <Link className={style.navItem}  activeClass={style.active} to="home" spy={false} smooth={true} offset={-60} duration={1000}>
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
        </Roll>
      </div>
  );
}

export default Nav;