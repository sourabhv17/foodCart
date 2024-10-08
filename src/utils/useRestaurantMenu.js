import { useState, useEffect } from "react";

const useRestaurantMenu = (Id) => {
  const [restaurantCard, setRestaurantCard] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.58540&lng=73.71410&restaurantId=" +
        Id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setRestaurantCard(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (e) =>
          e?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  return restaurantCard;
};

export default useRestaurantMenu;
