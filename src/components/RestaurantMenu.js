import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { Id } = useParams();
  const restaurantCard = useRestaurantMenu(Id);
  // console.log(restaurantCard);

  if (restaurantCard === null) {
    return <Shimmer />;
  }

  return (
    <div>
      {restaurantCard.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
