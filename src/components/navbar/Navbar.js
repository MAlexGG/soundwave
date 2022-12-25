import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { CtLogo, CtNav, CtNavbar, Logo, LogoTxt, NavTxt } from './Navbar.styled'

function Navbar() {
  return (
      <>
          <CtNavbar>
              <Link to='/'>
                  <CtLogo>
                    <Logo src={logo} alt='logo'/>
                    <LogoTxt>Soundwave</LogoTxt>
                  </CtLogo>
              </Link>
              <CtNav>
                  <Link to='/discover'><NavTxt>Discover</NavTxt></Link>
                  <Link to='/join'><NavTxt>Join</NavTxt></Link>
              </CtNav>
          </CtNavbar>
      </>
  )
}

export default Navbar