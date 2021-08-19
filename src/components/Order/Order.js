import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Order = () => {
    const [imageURL, setIMageURL] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const handleImageUpload = event => {
    //     const imageData = new FormData();
    //     imageData.set('key', '04d43574beb63f8acb2043f8ac41cd03');
    //     imageData.append('image', event.target.files[0]);

    //     fetch(`https://api.imgbb.com/1/upload`, {
    //      method: 'POST',
    //         body: JSON.stringify(imageData),
    //     })
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setIMageURL(data)
    //         });

    //           }



    const onSubmit = data => {

        const eventData = {
            name: data.name,
            wigth: data.wigth,
            price: data.price
        };
        console.log(eventData);
        fetch('http://localhost:5000/addProduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row w-50 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="test" className='form-control' {...register("name")} />
                        <input defaultValue="wight" {...register("wigth")} />
                        <input {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;