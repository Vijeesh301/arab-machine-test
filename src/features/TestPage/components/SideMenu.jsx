import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronRight,
  faLayerGroup,
  faSpa,
  faPuzzlePiece,
  faComments,
  faUser,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../../assets/images/Sachin-Tendulkar_(cropped).jpg";

const SideMenu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <section className="side-menu">
        <section className="side-menu-container">
          <section className="side-menu-logo">
            <p>LOGO</p>
          </section>
          <section className="side-menu-profile">
            <section className="side-menu-photo">
              <section>
                <img className="side-menu-photo-box" src={profilePic} alt="/" />
              </section>
            </section>
            <section className="side-menu-profile-name">
              <span>Ram Mohan</span>
              <FontAwesomeIcon
                style={{
                  fontSize: "12px",
                  marginLeft: "2%",
                  cursor: "pointer",
                }}
                icon={faChevronRight}
              />
            </section>
            <section className="side-menu-profile-email">
              <span>rammohan2@gmail.com</span>
            </section>
          </section>
          <section className="menu-items">
            <section className="menu-1">
              <section className="menu-item-1">
                <FontAwesomeIcon
                  style={{ marginRight: "5%" }}
                  icon={faLayerGroup}
                />
                Dashboard
              </section>
            </section>
            <section className="menu-2">
              <section className="menu-item-2">
                <FontAwesomeIcon style={{ marginRight: "5%" }} icon={faSpa} />
                Perks
              </section>
            </section>
            <section className="menu-3">
              <section className="menu-item-3">
                <FontAwesomeIcon
                  style={{ marginRight: "5%" }}
                  icon={faPuzzlePiece}
                />
                Addons
              </section>
            </section>
            <section className="menu-4">
              <section className="menu-item-4">
                <FontAwesomeIcon
                  style={{ marginRight: "5%" }}
                  icon={faComments}
                />
                FAQ
              </section>
            </section>
            <section className="menu-5">
              <section className="menu-item-5">
                <FontAwesomeIcon style={{ marginRight: "5%" }} icon={faUser} />
                Support
              </section>
            </section>
          </section>
        </section>
        <section className="side-menu-bottom">
          <section>
            <span>Logout</span>
            <FontAwesomeIcon
              style={{ fontSize: "13px", marginLeft: "10px" }}
              icon={faPowerOff}
            />
          </section>
        </section>
      </section>
      {menu === false ? (
        <section className="side-menu-small-window">
          <section className="side-menu-small-window-container">
            <FontAwesomeIcon onClick={() => setMenu(true)} icon={faBars} />
          </section>
        </section>
      ) : (
        <section className="side-menu-small-window-1">
          <section className="side-menu-small-window-container-1">
            <section className="side-menu-small-close">
              <FontAwesomeIcon onClick={() => setMenu(false)} icon={faXmark} />
            </section>
          </section>
          <section className="side-menu-container">
            <section className="side-menu-logo">
              <p>Menu</p>
            </section>
            <section className="side-menu-profile">
              <section className="side-menu-photo">
                <section>
                  <img
                    className="side-menu-photo-box"
                    src={profilePic}
                    alt="/"
                  />
                </section>
              </section>
              <section className="side-menu-profile-name">
                <span>Ram Mohan</span>
                <FontAwesomeIcon
                  style={{
                    fontSize: "12px",
                    marginLeft: "2%",
                    cursor: "pointer",
                  }}
                  icon={faChevronRight}
                />
              </section>
              <section className="side-menu-profile-email">
                <span>rammohan2@gmail.com</span>
              </section>
            </section>
            <section className="menu-items">
              <section className="menu-1">
                <section className="menu-item-1">
                  <FontAwesomeIcon
                    style={{ marginRight: "5%" }}
                    icon={faLayerGroup}
                  />
                  Dashboard
                </section>
              </section>
              <section className="menu-2">
                <section className="menu-item-2">
                  <FontAwesomeIcon style={{ marginRight: "5%" }} icon={faSpa} />
                  Perks
                </section>
              </section>
              <section className="menu-3">
                <section className="menu-item-3">
                  <FontAwesomeIcon
                    style={{ marginRight: "5%" }}
                    icon={faPuzzlePiece}
                  />
                  Addons
                </section>
              </section>
              <section className="menu-4">
                <section className="menu-item-4">
                  <FontAwesomeIcon
                    style={{ marginRight: "5%" }}
                    icon={faComments}
                  />
                  FAQ
                </section>
              </section>
              <section className="menu-5">
                <section className="menu-item-5">
                  <FontAwesomeIcon
                    style={{ marginRight: "5%" }}
                    icon={faUser}
                  />
                  Support
                </section>
              </section>
            </section>
          </section>
          <section className="side-menu-bottom">
            <section>
              <span>Logout</span>
              <FontAwesomeIcon
                style={{ fontSize: "13px", marginLeft: "10px" }}
                icon={faPowerOff}
              />
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default SideMenu;
