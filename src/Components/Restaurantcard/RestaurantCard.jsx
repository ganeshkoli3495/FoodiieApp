import React from 'react'
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer";
import { IMG_CDN_URL } from "../../Common/Constants";


const RestaurantCard = ({isLoaded, filterdRestaurants}) => {
  return (
    <>
     <div className="main_body max-width">
      <h1>Restaurants near you</h1>
        {!isLoaded ? (
          <Shimmer />
        ) : (
          <div className="cards" key={filterdRestaurants.id}>
            {filterdRestaurants && filterdRestaurants.length === 0 ? (
              <h1>No Restaurants</h1>
            ) : (
              filterdRestaurants.map((restaurant) => (
                
                <Link
                  to={"restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <div className="card" key={restaurant?.info?.id}>
                    <img
                      src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                      alt="food"
                    />
                    <div className="card_content">
                      <h1>{restaurant?.info?.name}</h1>
                      <p className="cuisines">
                        {restaurant?.info?.cuisines.slice(0, 4).join(", ")}...
                      </p>

                      <div className="info">
                        <p
                          className="rating"
                          style={
                            restaurant?.info?.avgRating < 4
                              ? { backgroundColor: "red" }
                              : restaurant?.info?.avgRating === "--"
                              ? { backgroundColor: "green", color: "white" }
                              : { backgroundColor: "green", color: "white" }
                          }
                        >
                          {restaurant?.info?.avgRating ? (<span>{restaurant?.info?.avgRating}</span>) : (<span>NA</span>)}
                          <i className="fa-solid fa-star"></i>
                        </p>
                        <div>|</div>
                        <p className="lastMileTravel">
                          {restaurant?.info?.sla?.lastMileTravelString}
                        </p>
                        <div>|</div>
                        {/* <p className='classForTwo'>{restaurant?.info?.sla?.costForTwoString}</p> */}
                        <p className="classForTwo">
                          {restaurant?.info?.isOpen === true ? (
                            <p>Open</p>
                          ) : (
                            <p>Closed</p>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default RestaurantCard