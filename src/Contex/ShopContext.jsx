import React,{createContext} from "react";
import all_product from  "../Components/Assests/all_product"
import { useState } from "react";

// import { createContext } from "react";


 export const ShopContext = createContext(null);
 const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length; index++){
        cart[index] = 0;
    }
    return cart;
} 

 const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems]=useState(getDefaultCart());


    const addToCartt = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }


    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const removeFromCartt = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:0}))
    }
    const totalCart = () => {
        let totalAmt = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmt += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmt;
    };

    const get_total = ()=>{
        let total =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                total+=cartItems[item];
            }
        }
        return total
    }
    const contextValue={get_total,all_product,cartItems,removeFromCart,addToCart,removeFromCartt,addToCartt,totalCart};
 
    console.group(cartItems)

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider



