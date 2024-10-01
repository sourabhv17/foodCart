import "./ItemList.css";
import { MENU_ITEM_IMG } from "../utils/links";
import { useDispatch } from "react-redux";
import { addItem } from "../toolkit/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // const { name, description, price, defaultPrice, imageId } = itemData;

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="items">
          <div className="item-list">
            <span className="item-name">{item?.card?.info?.name}</span>
            <span className="item-description">
              {item?.card?.info?.description}
            </span>
            <span className="item-price">
              ₹{" "}
              {item?.card?.info?.price / 100
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div className="item-list2">
            <img
              src={MENU_ITEM_IMG + item?.card?.info?.imageId}
              className="item-img"
            ></img>
            <button className="add-button" onClick={() => handleAddItem(item)}>
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
