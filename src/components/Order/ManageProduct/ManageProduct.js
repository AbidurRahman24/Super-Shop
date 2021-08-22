import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import ManageInventory from './ManageInventory/ManageInventory';

const ManageProduct = () => {
    const [manage, setManage] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManage(data)
                console.log(data)
            })
    }, [])
    const handleDelete = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div className='h-100%'>
            <div className="row ">
                <div className="col-md-4" style={{ background: 'black' }}>
                    <VerticalMenu></VerticalMenu>
                </div>
                <div className='col-md-8'>
                    <h1>Manage Products</h1>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Wight</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        manage.map(manage => <ManageInventory
                            manage={manage}
                            handleDelete={handleDelete}
                        ></ManageInventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;