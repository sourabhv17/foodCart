import "./RestaurantCategory.css";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="accordion">
      <div className="accordion-head">
        <span>{data.title}</span>
        <span>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg"
            className="down-arrow"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
