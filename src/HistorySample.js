import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample({history}) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/');

    useEffect(() => {
        return () => {
            window.confirm('정말 떠나시겠어요?');
        }
    }, []);

    return (
        <nav>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </nav>
    );
}

export default HistorySample;