import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Order = () => {
    const [imageURL, setIMageURL] = useState({}); 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b8c9f94a8eb71f0c8b6f984b4a623038');
        imageData.append('image', event.target.files[0]);

        fetch(`https://api.imgbb.com/1/upload`, {
         method: 'POST',
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(imageData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
            
              }



    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <div className="container">
                <div className="row w-50 ">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='m-2'>
                            <label for="inputEmail4">Product Name</label>
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div className='m-2'>
                            <label for="inputEmail4">Wight</label>
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div className='m-2'>
                            <label for="inputEmail4">Price</label>
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <input className='m-2' type='file' onChange={handleImageUpload}  />

                        <input className='m-2' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;