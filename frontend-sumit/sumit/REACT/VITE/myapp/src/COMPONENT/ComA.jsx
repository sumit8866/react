import React from 'react';
import ComB from './ComB';

function ComA(props) {
    return (
        <div>
            <h1 className='headtext'>this is componentA</h1>
            <ComB/>
        </div>
    );
}

export default ComA;