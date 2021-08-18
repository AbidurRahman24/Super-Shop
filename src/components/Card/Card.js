import React from 'react';
import './Card.css'

const Card = (props) => {
    const {id, name, email} = props.products
    
    return (
        <div>
            <div >
                    <div class="card-deck">
                        <div class="card">
                            <ima class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{email}</p>
                            </div>
                            <div class="card-footer card-footer-gird">
                                <div >
                                    <p class="card-link">{id}</p>
                                </div>
                                <div>
                                <button onClick={()=> props.handleClick(id)}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;