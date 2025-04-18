import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Contex/ShopContext'

function ProductDisplay(props) {
  const {product}=props;
  const {addToCart,addToCartt} = useContext(ShopContext);
 return(
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='product display-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon } alt="" />
            <p>(198)</p>
          </div>
          <div className="productdisplay-right-prices ">
          <div className="productdisplay-right-price-old ">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-description">
          Crafted from premium fabric, this stylish and comfortable garment blends modern design with timeless appeal. Perfect for everyday wear or special occasions, it offers a flattering fit, soft texture, and lasting durability. Elevate your wardrobe effortlessly with this versatile piece that combines elegance, comfort, and quality in one.
          </div>
          <div className="productdisplay-right-size ">
              <h1>SELECT SIZE</h1>

          <div className="productdisplay-right-sizes ">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
          </div>
          </div>
          <button onClick={()=>{addToCartt(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Catrgory :</span><span>Summer Cloth, Women, T-Shirt</span>
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span><span>Latest,Modern</span>
          </p>
        </div>
    </div> 
  )
}

export default ProductDisplay