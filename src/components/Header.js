import "./Header.css";
import { LOGO_IMG } from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [log, setLog] = useState("Log-in");

  return (
    <div className="nav-outer">
      <div>
        <img alt="logo-image" src={LOGO_IMG} className="header-logo"></img>
      </div>

      <div className="header-items">
        <span>
          <Link to="/">home</Link>
        </span>
        <span>
          <Link to="/about">about us</Link>
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span
          className="log-btn"
          onClick={() =>
            log == "Log-in" ? setLog("Log-out") : setLog("Log-in")
          }
        >
          <b>{log}</b>
        </span>
      </div>
    </div>
  );
};

export default Header;
