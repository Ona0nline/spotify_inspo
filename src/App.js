import React from 'react';
import './App.css';
import TypewriterComponent from './Typewriter';

// import Navbar from "./components/Navbar"
// React Router == library that allows you to make multiple pages
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Mooday from './pages/mooday';
import Registration from './pages/registration';
import Login from './pages/login';


function App() {
  return (
<div className="App">
    <Router>
      {/* <Navbar/> */}
      <Routes>

        {/* Exact path is used for home page and it's a '/' */}
        {/* <Route exact path='/' element={<Mooday/>} ></Route> */}
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>

    </Router>
    
      <TypewriterComponent/>
      <Mooday/>
    </div>
  );
}

export default App;
