import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { swiggy_api_URL, IMG_CDN_URL } from '../../Common/Constants'
import Shimmer from '../Shimmer';
import './Body.css'


// Filter the restaurant data according input type

const filterData= (searchText, allRestaurants) => {
    const filterData = allRestaurants.filter((restaurant) => 
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())

    );
    return filterData;
}



const Body = () => {

    const [searchText, setSearchText] = useState("")
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isLoaded,  setIsLoaded] = useState(false);


    

     const  getData = async() =>{
      setIsLoaded(false)
        try {
          const data = await fetch(swiggy_api_URL);
          const json = await data.json();
          setAllRestaurants(json?.data?.cards[2].data?.data?.cards)
          setFilterdRestaurants(json?.data?.cards[2].data?.data?.cards)
          setIsLoaded(true);
        } catch (error) {
          console.log(error);
        }
      }



      useEffect(() => {
        getData();
    }, []);



     
  return (
    <>

    <div className='search_block'>
    <div className='search-right'>
            <h1>Find restaurants near you..</h1>
          </div>
          <div className='search-left'>
          <input
              type="text"
              className="search_input"
              placeholder="Search a restaurant..."
              value={searchText}
              // update the state variable searchText when we typing in input box
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button onClick={() => {
                const data = filterData(searchText, allRestaurants)
            
                  setFilterdRestaurants(data)
                
            }}
              className="search_btn">
              Search
            </button>
          </div>
          
    </div>

    <div className='main_body max-width'>

        


       { !isLoaded ? 
       ( <Shimmer /> ) :(
        <div className='cards'>
            { filterdRestaurants.length === 0 ? (<h1>No Restaurants</h1>) : (
                filterdRestaurants.map((restaurant) => (
                  <Link to={"restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                    <div className='card'>
                        <img src={IMG_CDN_URL + restaurant?.data?.cloudinaryImageId} alt="food" />
                        <div className='card_content'>
                          <h1>{restaurant?.data?.name}</h1>
                          <p className='cuisines'>{restaurant?.data?.cuisines.slice(0,3).join(', ')}...</p>
                      
                        <div className='info'>
                          <p className='rating' style={(restaurant?.data?.avgRating) < 4 ?
                          { backgroundColor: "red"} : (restaurant?.data?.avgRating) === "--" ?
                          {backgroundColor:"green" ,color:"white"} : {backgroundColor:"green", color:"white"}
                          
                          }>
                            
                            {restaurant?.data?.avgRating}<i className="fa-solid fa-star"></i>
                           <span>{restaurant?.avgRating}</span></p>
                          <div>.</div>
                          <p className='lastMileTravel'>{restaurant?.data?.lastMileTravelString}</p>
                          <div>.</div>
                          <p className='classForTwo'>{restaurant?.data?.costForTwoString}</p>
                        </div>
                        </div>
                    </div>
                  </Link>
                ))
            )}
            
            
         
        </div>
     ) }
    </div>
    </>
  )
}

export default Body