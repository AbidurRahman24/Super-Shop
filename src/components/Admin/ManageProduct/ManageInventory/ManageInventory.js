import React from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = ({ manage, handleDelete }) => {
    
    const {_id}= manage
    return (
        <div>
            <table class="table table-striped ">
                
                <tbody>
                    <tr>
                        <th scope="row">{manage.name }</th>
                        <td>{manage.wigth}</td>
                        <td>{manage.price}</td>
                        <td><button onClick={()=>handleDelete(_id)}>delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;