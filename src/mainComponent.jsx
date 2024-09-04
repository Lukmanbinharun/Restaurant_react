import React from 'react';
import BodyComponent from "./bodyComponent/BodyComponent";
import Header from "./header/Header";
import { Route, Routes } from 'react-router-dom';
import Home from './bodyComponent/Home';
import About from './bodyComponent/About';
import Contac from './bodyComponent/Contac';


function MainComponent(props) {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/Menu" element={<BodyComponent />} />
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contac" element={<Contac />} />
        </Routes>
        
      </div>
    );
}

export default MainComponent;