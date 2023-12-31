import React from 'react'
import './Restaurantpage.css'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../Common/Constants';
import useRestaurant from '../../../utils/useRestaurant';
import useRestaurantMenu from '../../../utils/useRestaurantMenu';
import { addItem, removeItem } from '../../../utils/cartSlice';
import { useDispatch } from 'react-redux';
import foodie from '../../assets/Images/foddie.png';
import { MenuShimmer } from '../Shimmer';

// import useRestaurant from '../../../utils/useRestaurant'
const Restaurantpage = () => {
    const param = useParams();

//    custom hook for restaurant logics

    const restaurant = useRestaurant(param)
    const restaurantMenu = useRestaurantMenu(param)
   
    const dispatch = useDispatch();

    const handelAdditem = (item) => {
        dispatch(addItem(item));
    }
    
    const handelRemoveItem = (itemID) =>{
        dispatch(removeItem(itemID))
    }
    
  return !restaurant ? (
    <MenuShimmer /> ) : (
     <>
        <div className='restaurant' >
      <div className='restaurant_summary max-width flex'>
            <img className='restaurant_img'
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <div className='restaurant_detail flex column'>
            <h2 className='restaurant_name'>{restaurant?.name}</h2>
            <p className='cuisines'>{restaurant?.cuisines.join(' ,')}</p>
                <div className='restaurant_rating flex '>
                        <p>{restaurant?.avgRatingString}</p>
                        <div>|</div>
                        <p>{restaurant?.locality}</p>
                        <div>|</div>
                        <p>{restaurant?.costForTwoMessage}</p>

                </div>
            </div>
      </div>
    </div>

    <div className='menu_list max-width'>
    {/* {restaurantMenu && restaurantMenu?.card.card?.title === 'Recommended' ? (
                Object.values(restaurantMenu?.card?.card?.itemCards).map((item) => (
                <div className='menu-list-items'  key={item.id}>
                 <div className='menu_item flex'>
                    {item?.cloudinaryImageId && (
                        <img src={IMG_CDN_URL + item?.cloudinaryImageId} alt={item?.name} />
                    )}
                    <div>
                         <p className='itemName'>{item?.card?.info?.name}</p>
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
  )} */}

{
  restaurantMenu ?  (
    restaurantMenu.map((menu) => (
      menu?.card?.card?.itemCards ? (
        menu.card.card.itemCards.map((item) => (
            
          <>
          {console.log(item?.card?.info?.id)}
          <div className='menu-list-items'  key={item.card?.info?.id}>
                 <div className='menu_item flex'>
                    {item?.card?.info?.imageId ? (
                        <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                    ) : (<img src={foodie} alt="" />  )}
                    <div>
                         <p className='itemName'>{item.card.info.name}</p>
                    </div>
                    <p>{item?.card?.info?.price/100} INR</p>
                    <div className='addbtn'>
                    <button onClick={() => handelRemoveItem(item)}>-</button>
                    <p>Add</p>
                    <button onClick={() => handelAdditem(item)}>+</button>
                </div>
                </div>
                 </div>
          </>
        ))
      ) : null
    ))
  ) : null
}

    </div>
     </>
    )

}

export default Restaurantpage