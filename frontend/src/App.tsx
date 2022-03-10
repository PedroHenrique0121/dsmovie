
import NavBar from "componentes/Navbar";

import Form from "componentes/Pages/Form";
import Listing from "componentes/Pages/Listing";
import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {
  return (
    
    <BrowserRouter>
       <NavBar></NavBar>
      <Routes>
          <Route path="/" element={<Listing></Listing>}></Route>
          <Route path="/form">
              <Route path=":movieIc" element={<Form></Form>}></Route>
          </Route>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
