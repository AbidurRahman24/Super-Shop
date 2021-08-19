import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams()
    console.log(id);
    const [checkout, setCheckout] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/product/'+ id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCheckout(data)
        })
    },[id])
    return (
        <div>
            <h2>This is checkout from: {id}</h2>
            <h1>Name:{checkout.name}</h1>
        </div>
    );
};

export default Checkout;