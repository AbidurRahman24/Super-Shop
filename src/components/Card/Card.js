import React from 'react';
import './Card.css'

const Card = (props) => {
    
    const {_id, name, wigth, price} = props.products
    
    return (
        <div>
            <div >
                    <div class="card-deck">
                        <div class="card">
                        <img className="img-fluid mb-3" src={`data:image/png;base64,${props.products.image.img}`} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{wigth}</p>
                            </div>
                            <div class="card-footer card-footer-gird">
                                <div >
                                    <h3 class="card-link">$ {price}</h3>
                                </div>
                                <div>
                                <button type="button" class="btn btn-primary" onClick={()=> props.handleClick(_id)}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;