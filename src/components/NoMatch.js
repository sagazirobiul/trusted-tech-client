import React from 'react';
import noMatchImg from '../image/404.svg'

const NoMatch = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={`${noMatchImg}`} alt="" style={{height: '80vh', padding: '2rem 0 0 0'}}/>
        </div>
    );
};

export default NoMatch;