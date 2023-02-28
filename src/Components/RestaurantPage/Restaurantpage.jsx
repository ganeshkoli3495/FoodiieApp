import React from 'react'
import './Restaurantpage.css'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../Common/Constants';
import useRestaurant from '../../../utils/useRestaurant';
import { addItem, removeItem } from '../../../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { MenuShimmer } from '../Shimmer';

// import useRestaurant from '../../../utils/useRestaurant'
const Restaurantpage = () => {
    const param = useParams();

//    custom hook for restaurant logics
    // const restaurant = useRestaurant(resID);

    const restaurant = useRestaurant(param)

    const dispatch = useDispatch();

    const handelAdditem = (item) => {
        dispatch(addItem(item));
    }
    
    const handelRemoveItem = (itemId) =>{
        dispatch(removeItem(itemId))
    }
    
  return !restaurant ? (
    <MenuShimmer /> ) : (
     <>
        <div className='restaurant'>
      <div className='restaurant_summary max-width flex'>
            <img className='restaurant_img'
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <div className='restaurant_detail flex column'>
            <h2 className='restaurant_name'>{restaurant?.name}</h2>
            <p className='cuisines'>{restaurant?.cuisines?.join(' ,')}</p>
                <div className='restaurant_rating flex '>
                        <p>{restaurant?.avgRatingString}</p>
                        <div>|</div>
                        <p>{restaurant?.sla?.slaString}</p>
                        <div>|</div>
                        <p>{restaurant?.costForTwoMsg}</p>

                </div>
            </div>
      </div>
    </div>


    <div className='menu_list max-width'>
    {restaurant && restaurant.menu && restaurant.menu.items ? (
                Object.values(restaurant.menu.items).map((item) => (
                <div className='menu-list-items'>
                 <div className='menu_item flex' key={item.id}>
                    {item?.cloudinaryImageId && (
                        <img src={IMG_CDN_URL + item?.cloudinaryImageId} alt={item?.name} />
                    )}
                    <div>
                         <p className='itemName'>{item?.name}</p>
                    </div>
                    <p>{item?.price/100} INR</p>
                    <div className='addbtn'>
                    <button onClick={() => handelRemoveItem(item.id)}>-</button>
                    <p>Add</p>
                    <button onClick={() => handelAdditem(item)}>+</button>
                </div>
                </div>
                 </div>
                ))
            ) : (
                <p>Loading...</p>
  )}
    </div>
     </>
    )

}

export default Restaurantpage