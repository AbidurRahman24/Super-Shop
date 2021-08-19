import React from 'react';
import './Card.css'

const Card = (props) => {
    
    const {_id, name, wigth, price} = props.products
    
    return (
        <div>
            <div >
                    <div class="card-deck">
                        <div class="card">
                            <ima class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <p> {_id}</p>
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{wigth}</p>
                            </div>
                            <div class="card-footer card-footer-gird">
                                <div >
                                    <h3 class="card-link">$ {price}</h3>
                                </div>
                                <div>
                                <button onClick={()=> props.handleClick(_id)}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;