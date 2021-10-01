import React from 'react'

import Home from './views/Home'
import Header from './components/Header'
import Contato from './views/Contato'

const App = () => {
    return (
        <>
        <Header />
        
       <main>
           <Home />
           <Contato />
       </main>
       </>
    )
}

export default App
