import "./Restauant.css";

import { RESTARAUNT_IMG } from "../utils/links";

const RestarauntCard = ({ restarauntData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restarauntData?.info;
  return (
    <div className="restaraunt-container">
      <div className="restaraunt-card">
        <img
          src={RESTARAUNT_IMG + cloudinaryImageId}
          className="restaraunt-img"
        ></img>

        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
      </div>
    </div>
  );
};

export default RestarauntCard;
