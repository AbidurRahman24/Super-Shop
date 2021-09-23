import React, { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';
import Search from './Search/Search';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])
    const history = useHistory()
    const handleClick = (id) => {
        const newCard = [...card, id]
        setCard(newCard)
        const url = `product/${id}`
        history.push(url)
        // console.log('clicked',id);
    }
    useEffect(() => {
        fetch('https://hidden-thicket-93837.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            setProducts(data)
            })
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <Search></Search>
                <div className='card-header'>
                {
                    products.map(products => <Card 
                        products={products}
                        key={products.id}
                        handleClick={handleClick}
                        ></Card>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;