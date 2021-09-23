import React from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = ({ manage, handleDelete }) => {
    
    const {_id}= manage
    return (
        <div>
             <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Wight</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  manage.map((manage, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{manage.name}</td>
                        <td>{manage.wight}</td>
                        <td>{manage.price}</td>
                        <td style={{ cursor: 'pointer' }} className='btn btn-warning' onClick={()=>handleDelete(_id)} >Remove</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
           
        </div>
    );
};

export default ManageInventory;