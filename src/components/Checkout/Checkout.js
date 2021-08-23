import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
  const { id } = useParams()
  // const [orderData, setOrderData] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // console.log(id);
  const [checkout, setCheckout] = useState({})
  useEffect(() => {
    const URL = `https://hidden-thicket-93837.herokuapp.com/product/${id}`
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCheckout(data)
      })
  }, [id])
  const handleSendDatabase = () => {
    const orderDetails = { ...loggedInUser, ProductName: checkout.name, ProductPrice: checkout.price, OrderTime: new Date() }

    fetch('https://hidden-thicket-93837.herokuapp.com/addOrders', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert('Your order successfully submited')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
//   useEffect(() => {
//     fetch('https://hidden-thicket-93837.herokuapp.com/order')
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//         setOrderData(data)
//         })
// }, [])
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
      <button onClick={handleSendDatabase}>Send Database</button>
     
    </div>
  );
};

export default Checkout;