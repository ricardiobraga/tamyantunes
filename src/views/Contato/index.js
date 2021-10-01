import React from 'react'
import './styles.css'

import avatar from './assets/avatar.jpg'
import footerImg from './assets/footer.png'



const Gorro = () => {
    return (
        <div className="main-contato" id="contato">
            <div className="content-contato">
                <img className="img-avatar" src={avatar} alt="avatart" />
                <a href={"https://www.instagram.com/tamytheknitter/"} target="_blank"> @tamytheknitter </a>
                <a> tamytheknitter@gmail.com</a>

            </div>
            <div className="contato-footer">

            <img  src={footerImg} alt="footer" />
            </div>
        </div>
    )
}

export default Gorro
