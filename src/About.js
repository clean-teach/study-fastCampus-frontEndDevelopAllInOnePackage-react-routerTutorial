import React from 'react';
// import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import WithRouterSample from './withRouterSample';

function About({ location }) {
    // const query = qs.parse(location.search, {
    //     ignoreQueryPrefix: true
    // });
    // const detail = query.detail === 'true';

    const [searchParams] = useSearchParams();
    const detail = searchParams.get('detail') === 'true';

    return (
        <>
            <div>
                <h1>소개</h1>
                <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
                {detail && <p>추가적인 정보 어찌고 저찌고..</p>}
            </div>
            <WithRouterSample />
        </>
    );
}

export default About;