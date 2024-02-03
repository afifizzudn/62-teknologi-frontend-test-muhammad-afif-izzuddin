import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {

    let { id } = useParams();
    const navigate = useNavigate();

    const goHome = () => navigate('/')

    return (
        <>
            <div>Detail Page with Id:{id}</div>
            <button onClick={goHome}>Back Home</button>
        </>
    )
}

export default DetailPage