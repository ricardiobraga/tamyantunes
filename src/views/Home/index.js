import React from 'react'

import './styles.css'

import croppest from './assets/croppest-cortado.png'
import fotos from './assets/croppest-fotos.png'
import croppestLogo from './assets/croppest-logo.png'
// <img className="img-base" src={foto} alt='foto' />

const Home = () => {
    return (
        <div className="main-home" id="croppest">
            <div className="croppset-left">
            <img className="img-croppest" src={croppest} alt='croppest' />
            </div>

            <div className="croppset-right">
                <div className="img-container">

                    <img className="img-croppest-logo" src={croppestLogo} alt='croppest logo' />
                    <p>Esse é o gorro Marujo, ou como eu gosto de chamar, “gorro de jovem da moda” 💁‍♀️</p>
                    <img className="img-croppest-fotos" src={fotos} alt='croppest fotos' />
                        <div className="pix-info">
                        <span>R$50</span> <p>Chave PIX para compra <br /> <span>tamyantunes@gmail.com</span> </p>                        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
