
import React from 'react'
import {Route, BrowserRouter as Router, Routes,} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Upload from './components/Upload';
import Login from './components/LogIn';
import Signup from './components/Signup';
const App = () => {
  return (
   
    <Router>
    <Header/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/projects'  element={<Projects/>} />
        <Route path='/upload'  element={<Upload/>} />
        <Route path='/login'  element={<Login/>} />
        <Route path='/signup'  element={<Signup/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
