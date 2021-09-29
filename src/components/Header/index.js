import React from 'react'
import {Link} from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import './styles.css'

import logo from './assets/logo-branca.png'




const Header = () => {
    return (
        <header>
            <nav className="page-nav" onClick={() => scroll.scrollToTop()}>                
                <img className="logo-tamy" src={logo} alt='logo' />
                <Link to="croppest" smooth={true} duration={500}> Croppest </Link>
                <Link to="gorro" smooth={true} duration={500}> Gorro </Link>
                
            </nav>
        </header>
    )
}

export default Header
