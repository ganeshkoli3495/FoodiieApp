import React, { useEffect, useState } from 'react'
import { RESTAURANT_MENU_URI } from '../src/Common/Constants';

const useRestaurant = (param) => {


    const [restaurant, setRestaurant] = useState(null);
    


    //get the data (fetch api)
    useEffect(() => {
        getRestaurantsInfo();
    }, []); 

    const  getRestaurantsInfo = async () => {
        const data = await fetch(RESTAURANT_MENU_URI + param.id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        
}

//return the data
  return restaurant;
}

export default useRestaurant