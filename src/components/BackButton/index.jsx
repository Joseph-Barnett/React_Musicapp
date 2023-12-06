import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {

    const goTo = useNavigate();

    return(
        <button onClick={() => goTo(-1)}>Go Back</button>
    )
}

