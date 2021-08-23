import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import VerticalMenu from '../../VerticalMenu/VerticalMenu';

const AddProduct = () => {
    const [imageURL, setIMageURL] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // imageData block me, so i can't upload any image for url 
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
        // console.log(eventData);
        fetch('https://hidden-thicket-93837.herokuapp.com/addProduct', {
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
            window.location.reload(false);
    };
    

    return (
        <div>
              <div className="">
                <div className="row  p-5">
                    <div className="col-md-4 h-100" style={{background:'black'}}>
                        <VerticalMenu/>
                    </div>
                    <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='m-3'>
                        <label>Product Name</label>
                        <input className='form-control' {...register("name")} />
                        </div>
                        <div className='m-3'>
                        <label >Wight</label>
                        <input className='form-control' {...register("wigth")} />
                        </div>
                        <div className='m-3'>
                        <label>Price</label>
                        <input {...register("price",  { required: true })} className='form-control' />
                        {errors.price && <span>This field is required</span>}
                        </div>
                        <input  className='m-3' type="submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;