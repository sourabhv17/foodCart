import "./ItemList.css";
import { MENU_ITEM_IMG } from "../utils/links";

const ItemList = ({ itemData }) => {
  const { name, description, price, defaultPrice, imageId } = itemData;

  return (
    <div className="items">
      <div className="item-list">
        <span className="item-name">{name}</span>
        <span className="item-description">{description}</span>
        <span className="item-price">
          ₹ {price / 100 ? price / 100 : defaultPrice / 100}
        </span>
      </div>
      <div className="item-list2">
        <img src={MENU_ITEM_IMG + imageId} className="item-img"></img>
      </div>
    </div>
  );
};

export default ItemList;
