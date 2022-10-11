import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
        let activeStyle = {
            backgroundColor: "black",
            color: "white",
        };
        
        return (
        <>
            <nav>
                <h3>유저 목록</h3>
                <ul>
                    <li>
                        <Link to='/profiles/velopert'>Profiles : velopert</Link>
                    </li>
                    <li>
                        <Link to='/profiles/gildong'>Profiles : gildong</Link>
                    </li>
                    <li>
                        <NavLink
                        to="messages"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                        >
                            velopert (NavLink)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="messages"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                        >
                            gildong (NavLink)
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={()=> <div>유저를 선택해 주세요.</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </>
    );
}

export default Profiles;