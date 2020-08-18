import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch]= useStateValue();

    console.log(id, title, image, price, rating );
   const removeFromBasket= ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
   }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            
    <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title} </p>
        <p className="checkoutProduct__price">

            <small>₹</small>
            <strong>{price}</strong>
        </p>


        <div className="checkoutProduct__rating">
        {Array(rating)
        .fill() //fill it with empty
        .map((_, i)=>(  //map through 5 times
            <p>⭐</p> //runs for 5 times
        ))}
        </div>
<button onClick={removeFromBasket}>Remove from Basket</button>
    </div>
        </div>
    )
}

export default CheckoutProduct
