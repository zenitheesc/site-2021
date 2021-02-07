import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Fade as Hamburger } from 'hamburger-react';
import style from '../../styles/NavBar.module.css';
import NavLinks from './NavLinks';

export default function NavHeader(props) {
  const { toggleMenu } = props;
  const { isMenuOpen } = props;

  return (
    <>
      <div className={style.navBarHeaderContainer}>
        <a href="./">
          <img className={style.navBarIcon} src="/images/NavigationBar/logo.png" />
        </a>

        <NavLinks className={style.navigationHeader} />

        <Hamburger size={24} className={style.menuIcon} color={"#FFF"} duration={0.3} toggled={isMenuOpen} toggle={toggleMenu} rounded />

      </div>
    </>
  );
}
