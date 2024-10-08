import "./RestaurantCard.css";
import { useState } from "react";
import { RESTARAUNT_IMG } from "../utils/links";
import { Link } from "react-router-dom";

const RestarauntCard = ({ restarauntData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restarauntData?.info;

  return (
    <div className="restaraunt-container">
      <div className="restaraunt-card">
        <img
          src={RESTARAUNT_IMG + cloudinaryImageId}
          className="restaraunt-img"
        ></img>

        <h5>{name}</h5>
        <h6 className="cuisines">{cuisines.join(", ")}</h6>
        <h6 className="rating">Rating: {avgRating}</h6>
      </div>
    </div>
  );
};

export default RestarauntCard;
