import React from 'react'

import Home from './views/Home'
import Header from './components/Header'
import Gorro from './views/Gorro'

const App = () => {
    return (
        <>
        <Header />
        
       <main>
           <Home />
           <Gorro />
       </main>
       </>
    )
}

export default App
