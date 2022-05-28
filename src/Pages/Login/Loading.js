import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-50 max-auto mt-4 text-center' >
            <Spinner  animation="grow" />
        </div>
    );
};

export default Loading;