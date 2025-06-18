import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pags/home'
import Contato from './pags/Contatos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
      
        <Header></Header>

        <Routes>
          <Route path='/' element = {<Home/>} />
          
          <Route path='/Contatos' element = {<Contato/>} />
        </Routes>

      </BrowserRouter>
    </>
    
)


}

export default App
