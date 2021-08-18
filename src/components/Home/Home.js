import React, { useState } from 'react';
import Card from '../Card/Card';
import Search from './Search/Search';

const Home = () => {

    const [products, setProducts] = useState([]);
    const handleClick = (product)=>{
        console.log('clicked', product);
    }
    return (
        <div className='container'>
            <div className="row">
                <Search></Search>
                
                <Card 
                handleClick={handleClick}
                products={products}
                ></Card>
            </div>
        </div>
    );
};

export default Home;