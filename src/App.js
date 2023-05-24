import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./Components/Homee";
import Students from './Components/Students';
import Contact from "./Components/Contact";
import Editstudent from "./Components/Editstudent";
import Newstudent from "./Components/Newstudent"
function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
      <Route exact path="/handson7reactjs" element={<Homee/>}></Route>
        <Route exact path="/" element={<Homee/>}></Route>
        <Route exact path="/students" element={<Students/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/editstudent" element={<Editstudent/>}></Route>
        <Route exact path="/newstudent" element={<Newstudent/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App