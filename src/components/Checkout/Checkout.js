import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams()
    const [checkout, setCheckout] = useState({})
    console.log(checkout);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCheckout(data))
    },[id])
    return (
        <div>
            <h2>This is checkout from:{id}</h2>
            <h1>Name:{checkout.name}</h1>
            <h1>UserName:{checkout.username}</h1>
        </div>
    );
};

export default Checkout;