import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
  return (
    <div className="body">
      <div>
        <button
          className="top-rated-res"
          onClick={() => {
            restuarantList = listOfRestaurants.filter((res) => res.info.avgRating > 4.1);
            setListOfRestaurants(restuarantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
