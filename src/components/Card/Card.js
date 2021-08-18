import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);
    return (
        <div>
            <div className='card-header'>
                    <div class="card-deck">
                        <div class="card">
                            <ima class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer card-footer-gird">
                                <div >
                                    <p class="card-link">$250</p>
                                </div>
                                <div>
                                <button onClick={()=> props.handleClick(props.product)}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;