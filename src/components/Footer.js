import "./Footer.css";
import { PLAY_STORE, LOGO_IMG } from "../utils/links";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-container">
      <div className="experience">
        For better experience, download the Foodogy app now{" "}
        <Link
          to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1"
          className="linkimg"
        >
          <img src={PLAY_STORE}></img>
        </Link>
      </div>
      <div className="company-info">
        <div className="logo-div">
          <img className="logo-image" src={LOGO_IMG}></img>© 2024 Foodogy
          Limited
        </div>

        <div className="rest-info">
          <div>
            <ul>
              Company
              <li>Foodogy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>FoodogyOne</li>
            </ul>
          </div>
          <div>
            <ul>
              Legal
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investors Relations</li>
            </ul>
          </div>
          <div className="available">
            <ul>
              Available in
              <li>bangalore</li>
              <li>Pune</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Udaipur</li>
            </ul>
          </div>
          <div className="social">
            <ul>
              Social
              <li>
                <Link to="https://www.linkedin.com/company/swiggy-in/">
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/swiggyindia/?hl=en">
                  <img
                    className="icon"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-logo-icon-download-in-svg-png-gif-file-formats--share-image-chat-social-media-pack-logos-icons-1466166.png?f=webp&w=256"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to="https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <img
                    src="https://www.shutterstock.com/image-vector/pakistan-07-30-2023-new-260nw-2340851911.jpg"
                    className="icon"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
