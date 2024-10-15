import userContext from "../utils/userContext";
import { useContext } from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="about-div">
      <div className="about-inner">
        <div className="heading">About us</div>
        <div className="inner-content">
          Welcome to Foodgy, where we bring the flavors of your favorite
          restaurants right to your doorstep. We're more than just a food
          delivery app – we're your trusted partner in satisfying cravings,
          exploring new tastes, and making mealtime moments memorable. Our
          Mission At Foodie, our mission is to make food delivery not just
          convenient, but an experience to savor. We're passionate about
          connecting people with the food they love, from beloved local eateries
          to trending culinary hotspots. With every order, we aim to deliver not
          just meals, but joy and satisfaction. What Sets Us Apart Curated
          Selection: We handpick the best restaurants in your area, ensuring
          that every bite you take is a culinary delight. From cozy cafes to
          five-star dining, we offer a diverse selection to cater to every
          craving and occasion. Seamless Ordering: Ordering with Foodie is a
          breeze. With our user-friendly app, you can browse menus, customize
          your orders, and track deliveries in real-time. Say goodbye to waiting
          on hold or standing in line – we've streamlined the entire process for
          your convenience. Reliable Delivery: We understand that timely
          delivery is crucial to a great dining experience. That's why we work
          with a network of trusted drivers who are committed to delivering your
          meals promptly and with care, so you can enjoy them fresh and hot.
          Exceptional Service: Our dedicated customer support team is here to
          ensure that every aspect of your Food
        </div>

        <div className="founder">Founder</div>
        <div className="name">Name: Sourabh Umarvaishya</div>
        <div className="contacts">Contacts: 7665504207</div>
        <div className="email">Email: sourabh.umarvaishya@gmail.com</div>
        <div className="welcome">Welcome to Foodgy, {loggedInUser} </div>
      </div>
    </div>
  );
};
