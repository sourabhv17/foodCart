import { LOGO_IMG } from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="nav-outer">
      <div>
        <img alt="logo-image" src={LOGO_IMG} className="header-logo"></img>
      </div>

      <div className="header-items">
        <span>
          <b>home</b>
        </span>
        <span>
          <b>about us</b>
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span className="log-btn">
          <b>log in</b>
        </span>
      </div>
    </div>
  );
};

export default Header;
