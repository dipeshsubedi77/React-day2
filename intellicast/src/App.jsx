
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Home/>} />
      <Route path='/about' element = { < Navbar/>} />
      

    </Routes>
    
    </BrowserRouter>


     
    </>
  )
}

export default App
