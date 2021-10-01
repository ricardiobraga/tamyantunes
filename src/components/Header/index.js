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
                <p className="link" onClick={() => scroll.scrollToTop()}> Croppest </p>
                <Link className="link" to="contato" smooth={true} duration={500}> Contato </Link>
                
            </nav>
        </header>
    )
}

export default Header
