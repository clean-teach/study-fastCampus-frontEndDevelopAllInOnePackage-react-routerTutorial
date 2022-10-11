import React from 'react';
import { useParams } from 'react-router-dom';

const profileDate = {
    velopert: {
        name: '김민준',
        description: 'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '아버지를 아버지라 부르지 못하고 형님을 형님이라 부르지 못하고..',
    },

};

function Profile() {
    const {username} = useParams();
    const profile = profileDate[username];

    if(!profile) {
        return <div>존재하지 않은 유저입니다.</div>;
    }

    return (
        <div>
            <h3>{username} : ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;