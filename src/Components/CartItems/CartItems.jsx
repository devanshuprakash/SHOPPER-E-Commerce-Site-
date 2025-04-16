import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Contex/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png'
// import all_product from '../Assests/all_product';

function CartItems() {
    const {all_product,cartItems,removeFromCart,addToCart,removeFromCartt,totalCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                        <div className='cartitems-format cartitems-format-main'>
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <div className='"cartitems-quantity"'> 
                         <button  onClick={()=>{removeFromCart(e.id)}}>-</button>
                        <button className="cartitems-quantityy">{cartItems[e.id]}</button>
                        <button onClick={()=>{addToCart(e.id)}}>+</button>
                        </div>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} alt=""  onClick={()=>{removeFromCartt(e.id)}}/>
                    </div>
                        <hr/>
            </div>
            }
            return null;
        })}
       
        <div className="cartitems-down">
        <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
           <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${0}</p>
        </div>
           <hr/>
           <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
           </div>
           <hr/>
           <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${totalCart()}</h3>
           </div>
                <button className='cartitems-total-button'>PROCEED TO CHECHKOUT</button>
            </div>
            <hr/>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className='cartitems-promocode'>
                    <input type="text" placeholder='promocode' />
                    <button>Submit</button>

                </div>
            </div>
        </div>
        </div>
        </div>


 
  )
}

export default CartItems