import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from './Profiles';

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
            <ul>
              <li>
                <Link to='/about?detail=true'>Query</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/profiles'>유저목록</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </>
  );
}

export default App;
