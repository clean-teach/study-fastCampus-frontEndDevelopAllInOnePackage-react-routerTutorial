import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from './Profile';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/profile/velopert'>Profile : velopert</Link>
          </li>
          <li>
          <Link to='/profile/gildong'>Profile : gildong</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
