import "./Body.css";
import { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRes, setListOfRes] = useState([]);
  const [searchedComp, setSearchedComp] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleOnSubmit = () => {
    const filteredRestaurant = listOfRes.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchedComp.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurant);
  };

  const handleSubmit = (e) => setSearchedComp(e.target.value);

  if (listOfRes.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant">
      <div className="top-restaurants">
        <div className="top">
          <button
            onClick={() => {
              const filteredList = listOfRes?.filter(
                (res) => res?.info?.avgRating > 4
              );
              setListOfRes(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="searchBox">
          <input
            type="search"
            maxLength={50}
            size={50}
            placeholder=" search for restaurants, cuisines, dishes and more..."
            onChange={handleSubmit}
          />
          <button type="submit" onClick={handleOnSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="restaurants-display">
        {filteredRestaurant?.map((restaraunt) => (
          <Link className="link" to={"/restaurant/" + restaraunt.info.id}>
            <RestarauntCard
              key={restaraunt.info.id}
              restarauntData={restaraunt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
