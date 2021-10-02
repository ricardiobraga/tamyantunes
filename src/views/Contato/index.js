import React from 'react'
import './styles.css'

import avatar from './assets/avatar.jpg'
import footerImg from './assets/footer.png'

import {Instagram, Email}  from '@material-ui/icons'

const Gorro = () => {
    return (
        <div className="main-contato" id="contato">
            <div className="content-contato">
                <img className="img-avatar" src={avatar} alt="avatart" />
                <a href={"https://www.instagram.com/tamytheknitter/"} target="_blank"> <Instagram fontSize="inherit" /> @tamytheknitter </a>
                <a href="mailto:tamytheknitter@gmail.com" target="_blank"><Email fontSize="inherit"/> tamytheknitter@gmail.com</a>

            </div>
            
            <div className="contato-footer">

            <img  src={footerImg} alt="footer" />
            </div>
        </div>
    )
}

export default Gorro
