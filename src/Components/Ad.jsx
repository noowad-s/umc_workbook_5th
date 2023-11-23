import React from 'react';

function Ad({ isVisible }) {
    if (!isVisible) {
        return null; // isVisible prop이 false인 경우 아무것도 렌더링하지 않음
    }

    return (
        <div>
            <img src="/img/Ad.png" alt="광고 이미지" width="1000" />
        </div>
    );
}

export default Ad;
