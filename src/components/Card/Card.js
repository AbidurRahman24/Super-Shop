import React from 'react';
import './Card.css'

const Card = ({products, handleClick}) => {
    return (
        <div>
            <div >
                    <div class="card-deck">
                        <div class="card">
                        <img className="img-fluid mb-3" src={`data:image/png;base64,${products.image.img}`} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">{products.name}</h5>
                                <p class="card-text">{products.wight}</p>
                            </div>
                            <div class="card-footer card-footer-gird">
                                <div >
                                    <h3 class="card-link">$ {products.price}</h3>
                                </div>
                                <div>
                                <button type="button" class="btn btn-primary" onClick={()=> handleClick(products._id)}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;