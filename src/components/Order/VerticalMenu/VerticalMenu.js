import React from 'react';
import './VerticalMenu.css'

const VerticalMenu = () => {
    return (
        <div>
            <div class="vertical-menu ">
                <a href="/manage" >Manage Product</a>
                <a href="/addProduct">Add Product</a>
                <a href="/editProduct">Edit Product</a>
            </div>
        </div>
    );
};

export default VerticalMenu;