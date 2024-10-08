import "./Header.css";
import { LOGO_IMG } from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [log, setLog] = useState("Log-in");
  const { loggedInUser } = useContext(userContext);

  const cartLength = useSelector((store) => store.cart.items);

  return (
    <div className="nav-outer">
      <div>
        {" "}
        <Link to="/">
          <img alt="logo-image" src={LOGO_IMG} className="header-logo"></img>
        </Link>
      </div>

      <div className="header-items">
        <span>
          <Link to="/" className="linked home">
            home
          </Link>
        </span>
        <span>
          <Link to="/about" className="linked about">
            about us
          </Link>
        </span>
        <span>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            <span className="cart-length"> {cartLength.length}</span>
          </Link>
        </span>
        <span
          className="log-btn"
          onClick={() =>
            log == "Log-in" ? setLog("Log-out") : setLog("Log-in")
          }
        >
          <Link to="/log" className="log-linked">
            <b>{log}</b>
          </Link>
        </span>
        <span className="logged-in-user">{loggedInUser}</span>
      </div>
    </div>
  );
};

export default Header;
