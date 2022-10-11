import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
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