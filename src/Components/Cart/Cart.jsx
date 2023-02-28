import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../Common/Constants';
import { clearCart, removeItem , updateItemQuantity } from '../../../utils/cartSlice';

import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeCartItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const ClearCartItem = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (itemId, quantity) => {
    dispatch(updateItemQuantity({itemId, quantity}));
  };
  return (
    <>
      <div className="max-width cart">
        <h1>Cart</h1>
        <p>Cart items - {cartItems.length}</p>
        <button className="ClearCart" onClick={ClearCartItem}>
          Clear Cart
        </button>

        <div className="cart_items">
          {cartItems.map((item) => (
            <div className="item" key={item.id}>
              <div className="item_img">
                <img src={IMG_CDN_URL + item?.cloudinaryImageId} />
              </div>
              <div className="item_content">
                <h1>{item.name}</h1>
                <p>Quantity: <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} /></p>
              </div>
              <div className="remove-item">
                <button
                  className="ClearCart"
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
