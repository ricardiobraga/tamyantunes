import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'


import './styles.css'

import croppest from './assets/base.jpg'
import fotos from './assets/croppest-fotos.png'
import croppestLogo from './assets/croppest-logo.png'
import  bgSqares from './assets/bg-squares.png'














// <img className="img-base" src={foto} alt='foto' />

const Home = () => {    
    
    const [copyData, setCopyData] = useState('')
    

     function copy(param) {  
         console.log(copyData);       
         setCopyData(() => param)          
         console.log(copyData);       
    }


  

    return (
        <div className="main-home" id="croppest">
            
            <div className="croppset-left">
            <img className="img-croppest" src={croppest} alt='croppest' />
            </div>
            
            <div className="croppset-right">
                <div className="img-container">
                
                    <img className="img-croppest-logo" src={croppestLogo} alt='croppest logo' />
                        <p className="title">CROPPEST ● BY TAMY ANTUNES </p>
                            <span className="subtitle"> O nome Croppest é a junção das palavras cropped (curto) e vest (colete), prático, 
                                    com design moderno e contemporâneo, esse pulôver serve como sobreposição 
                                    para vestidos, camisas, blusinhas e traz um charme e elegância todo especial 
                                    para qualquer look! Ele possui barra mullet, o que deixa as costas alongadas e a 
                                    frente levemente mais curta
                            </span>
                    <img className="img-croppest-fotos" src={fotos} alt='croppest fotos' />
                        
                        
                        <div className="pix-info" >                            
                            <span className="pix-value">
                                R$
                                    <span >
                                        20
                                    </span>
                            </span>

                            <div >
                                <p>
                                    Chave PIX
                                </p> 

                                <div >
                                    tamytheknitter@gmail.com                                  
                                    
                                </div> 
                                        
                                <p>
                                    PicPay: 
                                </p>

                                <a className="picpay" href={"http://picpay.me/tamyantunes/0,50"} target="_blank" rel="noopener noreferrer">@tamyantunes </a>
                            </div>                        
                                                      
                        </div>
                        
                        
                </div>
                <div className="bg-mobile"></div>
            </div>
            <div>

                <img className="img-bg-squares" src={bgSqares} alt='croppest' />
            </div>
        </div>
        
    )
}

export default Home
