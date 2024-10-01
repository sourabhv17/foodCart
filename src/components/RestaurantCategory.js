import "./RestaurantCategory.css";
import ItemList from "./ItemList";
import { useState } from "react";
import { DOWN_ARROW } from "../utils/links";
import { UP_ARROW } from "../utils/links";

const RestaurantCategory = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-head" onClick={() => setIsActive(!isActive)}>
        <span>{data.title}</span>
        <span>
          {isActive ? (
            <img src={UP_ARROW} className="down-arrow" />
          ) : (
            <img src={DOWN_ARROW} className="down-arrow" />
          )}
        </span>
      </div>
      {isActive && (
        <div className="accordion-list">
          <span>{<ItemList items={data.itemCards} />}</span>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
