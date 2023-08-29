import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faArrowRightLong,
  faUser,
  faCloud,
  faEnvelope,
  faSquareCaretRight,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  return (
    <>
      <section className="cards-main-container">
        <section className="cards-container">
          <section className="inside-container">
            <p className="p-heading">FAQ !</p>
            <section className="cards-button-container"></section>
            <section className="cards-section">
              <section className="cards">
                <section>
                  <span className="span-basic">Basic</span>
                </section>
                <section>
                  <span className="span-basic-amt">$ 89.99/mo</span>
                </section>
                <section>
                  <span className="span-basic-total">$ 9.99/mo</span>
                </section>
                <section>
                  <button className="basic-button">
                    Get Started &nbsp;
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                </section>
                <hr></hr>
                <section>
                  <span className="span-basic-what">What you'll get :</span>
                </section>
                <section className="span-basic-user">
                  <FontAwesomeIcon
                    style={{ width: "10px", marginRight: "2.5%" }}
                    icon={faUser}
                  />
                  <span className="span">Upto 25 Users</span>
                </section>
                <section className="span-basic-storage">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faCloud}
                  />
                  <span className="span">Upto 25gb storage</span>
                </section>
                <section className="span-basic-email">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faEnvelope}
                  />
                  <span className="span">Email Support</span>
                </section>
                <section className="span-basic-explore">
                  <span>EXPLORE FEATURES</span>
                  <FontAwesomeIcon
                    style={{ marginLeft: "5px", color: "rgb(247, 229, 164)" }}
                    icon={faSquareCaretRight}
                  />
                </section>
              </section>
              <section className="cards">
                <section>
                  <span className="span-basic">Standard</span>
                </section>
                <section>
                  <span className="span-basic-amt">$ 189.99/mo</span>
                </section>
                <section>
                  <span className="span-basic-total">$ 99.99/mo</span>
                </section>
                <section>
                  <button className="standard-button">
                    Get Started &nbsp;
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                </section>
                <hr></hr>
                <section>
                  <span className="span-basic-what">What you'll get :</span>
                </section>
                <section className="span-basic-user">
                  <FontAwesomeIcon
                    style={{ width: "10px", marginRight: "2.5%" }}
                    icon={faUser}
                  />
                  <span className="span">Upto 50 Users</span>
                </section>
                <section className="span-basic-storage">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faCloud}
                  />
                  <span className="span">Upto 60gb storage</span>
                </section>
                <section className="span-basic-email">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faEnvelope}
                  />
                  <span className="span">Email+Chat Support</span>
                </section>
                <section className="span-basic-explore">
                  <span>EXPLORE FEATURES</span>
                  <FontAwesomeIcon
                    style={{ marginLeft: "5px", color: "rgb(247, 190, 164)" }}
                    icon={faSquareCaretRight}
                  />
                </section>
              </section>
              <section className="cards">
                <section>
                  <span className="span-basic">Premium</span>
                </section>
                <section>
                  <span className="span-basic-amt">$ 389.99/mo</span>
                </section>
                <section>
                  <span className="span-basic-total">$ 199.99/mo</span>
                </section>
                <section>
                  <button className="premiuim-button">
                    Get Started &nbsp;
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                </section>
                <hr></hr>
                <section>
                  <span className="span-basic-what">What you'll get :</span>
                </section>
                <section className="span-basic-user">
                  <FontAwesomeIcon
                    style={{ width: "10px", marginRight: "2.5%" }}
                    icon={faUser}
                  />
                  <span className="span">Upto 75 Users</span>
                </section>
                <section className="span-basic-storage">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faCloud}
                  />
                  <span className="span">Upto 100gb storage</span>
                </section>
                <section className="span-basic-email">
                  <FontAwesomeIcon
                    style={{ width: "13px", marginRight: "2%" }}
                    icon={faEnvelope}
                  />
                  <span className="span">Email+Chat+Whatsapp Support</span>
                </section>
                <section className="span-basic-explore">
                  <span>EXPLORE FEATURES</span>
                  <FontAwesomeIcon
                    style={{ marginLeft: "5px", color: "rgb(221, 164, 247)" }}
                    icon={faSquareCaretRight}
                  />
                </section>
              </section>
            </section>
            <section className="cards-section-card-2">
              <section className="cards-card-2">
                <section className="card-2-container">
                  <section>
                    <button>Free Forever</button>
                  </section>
                  <section>
                    <span className="free-starter">Free Starter</span>
                  </section>
                  <section>
                    <span className="sub-title-free-starter">
                      The quickest and easiest way to try Protocols with basic
                      functionalities
                    </span>
                  </section>
                  <section className="free-starter-button">
                    <button>
                      Get Started &nbsp;
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                  </section>
                </section>
                <section className="card-2-container">
                  <section>
                    <span className="span-basic-what">What you'll get :</span>
                  </section>
                  <section className="span-basic-user">
                    <FontAwesomeIcon
                      style={{ width: "10px", marginRight: "2.5%" }}
                      icon={faUser}
                    />
                    <span className="span">Upto 8 Users</span>
                  </section>
                  <section className="span-basic-storage">
                    <FontAwesomeIcon
                      style={{ width: "13px", marginRight: "2%" }}
                      icon={faCloud}
                    />
                    <span className="span">Upto 3gb Storage</span>
                  </section>
                  <section className="span-basic-email">
                    <FontAwesomeIcon
                      style={{ width: "13px", marginRight: "2%" }}
                      icon={faEnvelope}
                    />
                    <span className="span">Email Support</span>
                  </section>
                  <section className="span-basic-storage">
                    <FontAwesomeIcon
                      style={{ width: "13px", marginRight: "2%" }}
                      icon={faCheckDouble}
                    />
                    <span className="span">
                      Basics of Documents, Task Flow, Voting, Accounting,
                      Banking, Notes, Investor, Director and Team Management
                      included
                    </span>
                  </section>
                </section>
              </section>
              <section className="cards-card-2">
                <section className="card-2-container">
                  <section className="lets-connect">
                    <button>Let's Connect</button>
                  </section>
                  <section>
                    <span className="free-starter">Enterprise Plan</span>
                  </section>
                  <section>
                    <span className="sub-title-free-starter">
                      Effortlessly customize and fine-tube services as your
                      needs shift, ensuring the perfect tools for success
                    </span>
                  </section>
                  <section className="contact-button">
                    <button>
                      Contact Us &nbsp;
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                  </section>
                </section>
                <section className="card-2-container">
                  <section>
                    <span className="span-basic-what">What you'll get :</span>
                  </section>
                  <section className="span-basic-user">
                    <FontAwesomeIcon
                      style={{ width: "10px", marginRight: "2.5%" }}
                      icon={faUser}
                    />
                    <span className="span">More tha 75 Users</span>
                  </section>

                  <section className="span-basic-storage">
                    <FontAwesomeIcon
                      style={{ width: "13px", marginRight: "2%" }}
                      icon={faCheckDouble}
                    />
                    <span className="span">
                      Customization of all other features
                    </span>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section className="bottom-test-some-unique">
            <p>
              *some unique features are provided as add-ons with individual
              plans for each features
            </p>
          </section>
        </section>
        <section className="cards-notification-icon">
          <section className="notification-icon">
            <FontAwesomeIcon icon={faBell} />
          </section>
        </section>
      </section>
    </>
  );
};

export default Faq;
