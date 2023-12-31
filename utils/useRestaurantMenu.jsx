import React, { useEffect, useState } from 'react'
import { RESTAURANT_MENU_URI } from '../src/Common/Constants';

const useRestaurantMenu = (param) => {


    const [restaurantMenu, setRestaurantMenu] = useState(null);
    


    //get the data (fetch api)
    useEffect(() => {
        getRestaurantsMenuInfo();
    }, []); 

    const  getRestaurantsMenuInfo = async () => {
        const data = await fetch(RESTAURANT_MENU_URI + param.id);
        const res = await data.json();
        setRestaurantMenu(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
}

//return the data
  return restaurantMenu;
}

export default useRestaurantMenu