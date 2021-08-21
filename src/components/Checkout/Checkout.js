import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams()
    // console.log(id);
    const [checkout, setCheckout] = useState({})
    useEffect(()=>{
        const URL = `http://localhost:5000/product/${id}`
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCheckout(data)
        })
    },[id])
    return (
        <div className='container p-5 '>
          <h2 className='py-5' >Cart</h2>
            <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
      
    <hr />
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{checkout.name}</th>
      <td>1</td>
      <td>{checkout.price}</td>
    </tr>
    
  </tbody>
</table>
        </div>
    );
};

export default Checkout;