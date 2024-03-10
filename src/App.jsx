import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {BrowserRouter, Routes,Route,Link} from "react-router-dom"

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'
import Members from './pages/Members.jsx'

function About(){
  return(
   <h1>Hello React Router</h1>
  )
}

function Home(){
 return(
  <h1>Home,  React Router</h1>
 )
}

function M2(){

  return(
    <h1>Home,  React Router</h1>
   )


}
function App() {
  const [count, setCount] = useState(0)

  return (
      
    < BrowserRouter>
    <header>
      
    <nav className="navbar">
   <Link to = "/">Home   </Link>&nbsp;|&nbsp;
   <Link to = "/about">About </Link>&nbsp;|&nbsp;
   <Link to = "/members">Members   </Link>
   </nav>

   </header>
   <Routes>

      <Route path="/" element={<Home/>}   />
      <Route path="/about" element={<About/>}   />
      <Route path="/members" element={<Members/>}   />

      
      
      </Routes>
   
   
   </BrowserRouter>  
  
  )

}

  export default App



