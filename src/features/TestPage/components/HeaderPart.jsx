import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/images.png";

const HeaderPart = () => {
  return (
    <>
      <section className="header-container">
        <section className="header-bar"></section>
        <section className="header-button">
          <section className="button-1">
            <img src={logo} alt="/" />
            <span className="button-text">XYZ Enterprises Pvt Ltd</span>
          </section>
          <button className="button-2">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </section>
      </section>
    </>
  );
};

export default HeaderPart;
