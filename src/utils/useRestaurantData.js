// import { useEffect, useState } from "react";

// const useRestaurantData = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const [listOfRes, setListOfRes] = useState([]);
//   const [searchedComp, setSearchedComp] = useState("");
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     console.log(json);
//     setListOfRes(
//       json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
//     );

//     setFilteredRestaurant(
//       json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
//     );
//   };

//   const handleOnSubmit = () => {
//     const filteredRestaurant = listOfRes.filter((restaurant) =>
//       restaurant.info.name.toLowerCase().includes(searchedComp.toLowerCase())
//     );

//     setFilteredRestaurant(filteredRestaurant);
//   };

//   const handleSubmit = (e) => setSearchedComp(e.target.value);

//   return {
//     listOfRes,
//     searchedComp,
//     filteredRestaurant,
//     handleOnSubmit,
//     handleSubmit,
//   };
// };

// export default useRestaurantData;
