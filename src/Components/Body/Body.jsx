import React, { useEffect, useState } from "react";
import RestaurantCard from "../Restaurantcard/RestaurantCard";
import { swiggy_api_URL, IMG_CDN_URL } from "../../Common/Constants";
import "./Body.css";

// Filter the restaurant data according input type

const filterData = (searchText, allRestaurants) => {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //  const  getData = async() =>{
  //   setIsLoaded(false)
  //     try {
  //       const data = await fetch(swiggy_api_URL);
  //       const json = await data.json();
  //       setAllRestaurants(json?.data?.cards[2].data?.data?.cards)
  //       setFilterdRestaurants(json?.data?.cards[2].data?.data?.cards)
  //       setIsLoaded(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  const getData = async () => {
    setIsLoaded(false);
    try {
      const res = await fetch(
        swiggy_api_URL
      );
      const data = await res.json();
      setAllRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterdRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="search_block">
        <div className="search-right">
          <h1>Find restaurants near you..</h1>
        </div>
        <div className="search-left">
         <form onSubmit={(e) => {
           const data = filterData(searchText, allRestaurants);
           e.preventDefault();
           setFilterdRestaurants(data);
         }}>
         <input
            type="text"
            className="search_input"
            placeholder="Search a restaurant..."
            value={searchText}
            // update the state variable searchText when we typing in input box
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
         </form>
          {/* <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);

              setFilterdRestaurants(data);
            }}
            className="search_btn"
          >
            Search
          </button> */}
        </div>
      </div>
          
          <RestaurantCard filterdRestaurants={filterdRestaurants} isLoaded={isLoaded}/>
    </>
  );
};

export default Body;
