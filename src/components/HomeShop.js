import React from 'react';
import ReactDOM from 'react-dom/client';
import homeshop from './homeShop.css';
import shop1 from './images/shop1.webp'
import shop2 from './images/shop2.webp'
import shop3 from './images/shop3.webp'
import shop4 from './images/shop4.webp'


function ShopCard(props) {
    return(
        <div className='col-lg-3 col-md-6 shop-item d-flex justify-content-center'>
        <div className='shop-stuff'>
            <img src={props.img}></img>
            <h3>{props.itemShop}</h3>
            <h4>$15.00</h4>
            <a href='#' className='add-cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                <p>ADD TO CART</p>
            </a>
        </div>
        </div>
    )
}


export default function HomeShop() {

    const itemShop = "Office Chair";

    return (
        <div className='container homeshop align-items-center'>
            <h2 className='shop-title'>Shop</h2>
            <div className='row align-items-center row-shop-item'>

            <ShopCard 
                img={shop1}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop2}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop3}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop4}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop4}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop3}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop2}
                itemShop = {itemShop}
            />

            <ShopCard 
                img={shop1}
                itemShop = {itemShop}
            />

            </div>
        </div>
    )
}