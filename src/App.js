import React from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import HistorySample from './HistorySample';
import Home from "./Home";
import Profiles from './Profiles';

function App() {
  const { pathname } = useLocation();

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
            <Link to='/profiles'>Pramas</Link>
          </li>
          <li>
            <Link to='/history'>History</Link>
          </li>
          <li>
            <Link to='/blablablabla'>존재하지 않는 페이지</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path='/*' element={ <h1>이 페이지는 존재하지 않습니다. - {pathname}</h1> } />
      </Routes>
    </>
  );
}

export default App;
