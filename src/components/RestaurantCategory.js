import "./RestaurantCategory.css";
import ItemList from "./ItemList";
import { useState } from "react";
import { DOWN_ARROW } from "../utils/links";
import { UP_ARROW } from "../utils/links";

const RestaurantCategory = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion" onClick={() => setIsActive(!isActive)}>
      <div className="accordion-head">
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
          <span>
            {data.itemCards.map((c) => (
              <ItemList key={c?.card?.info?.id} itemData={c?.card?.info} />
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
