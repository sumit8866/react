import React from 'react';
import ComC from './ComC';

function ComB(value) {
    return (
        <div>
            <h1 className='headtext'>this is componentB</h1>
            <ComC/>
        </div>
    );
}

export default ComB;