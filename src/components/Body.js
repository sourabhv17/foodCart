import { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRes, setListOfRes] = useState([]);

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
    <div className="restaraunt">
      {listOfRes?.map((restaraunt) => (
        <RestarauntCard key={restaraunt.info.id} restarauntData={restaraunt} />
      ))}
    </div>
  );
};

export default Body;
