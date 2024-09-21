import { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRes, setListOfRes] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="restaurant">
      <div className="top-restaurants">
        <button
          onClick={() => {
            const filteredRestaurant = listOfRes?.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRes(filteredRestaurant);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurants-display">
        {listOfRes?.map((restaraunt) => (
          <RestarauntCard
            key={restaraunt.info.id}
            restarauntData={restaraunt}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
