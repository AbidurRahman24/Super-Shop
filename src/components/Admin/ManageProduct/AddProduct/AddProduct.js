import React, { useState } from 'react';
import VerticalMenu from '../../../Order/VerticalMenu/VerticalMenu';

const AddProduct = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
   
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

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('wight', info.wight);
        formData.append('price', info.price);

        fetch('https://hidden-thicket-93837.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            window.location.reload(false);
    }
    

    return (
        <div>
              <div className="">
                <div className="row  p-5">
                    <div className="col-md-4 h-100vh" style={{background:'black'}}>
                        <VerticalMenu></VerticalMenu>
                    </div>
                    <div className="col-md-8">
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Wight</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="wight" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;