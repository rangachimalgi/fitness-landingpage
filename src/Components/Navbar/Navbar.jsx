import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = (path) => {
  path = path.path;
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    if (service === "General Training") {
      navigate("/fitness");
    }
    setShowServicesDropdown(false);
  };

  return (
    <>
      <div
        className="navbar"
        style={
          path === "home"
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "#15171C" }
        }
      >
        <div className="navbar__logo">
          <Link to="/" className="navbar__links-link">
            <Logo size="medium" />
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li
              style={
                path === "home"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              <Link
                to="/"
                className="navbar__links-link"
                style={
                  path === "home"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                home
              </Link>{" "}
            </li>
            <li
              style={
                path === "services"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <div
                className="navbar__links-link"
                style={
                  path === "services"
                    ? {
                        color: "white",
                        cursor: "pointer",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)", cursor: "pointer" }
                }
              >
                services
                {/* <span style={{ marginLeft: "5px" }}>▼</span> */}
              </div>
              {showServicesDropdown && (
                <div className="services-dropdown">
                  <div className="dropdown-item" onClick={() => handleServiceClick("General Training")}>General Training</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Personal Training")}>Personal Training</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Group Classes")}>Group Classes</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("HIIT Training")}>HIIT Training</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Yoga")}>Yoga</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Boxing")}>Boxing</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Strength & Conditioning")}>Strength & Conditioning</div>
                  <div className="dropdown-item" onClick={() => handleServiceClick("Body Transformation")}>Body Transformation</div>
                </div>
              )}
            </li>
            {/* <li
              style={
                path === "care"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/care"
                className="navbar__links-link"
                style={
                  path === "care"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                care
              </Link>{" "}
            </li>
            <li
              style={
                path === "mind"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/mind"
                className="navbar__links-link"
                style={
                  path === "mind"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                mind
              </Link>{" "}
            </li>
            <li
              style={
                path === "store"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/store"
                className="navbar__links-link"
                style={
                  path === "store"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                store
              </Link>{" "}
            </li> */}
          </ul>
        </div>
        <div className="navbar__cart">
          <div className="navbar__cart-button" style={{ marginRight: "15px" }}>
            <button style={{
              background: "transparent",
              color: "white",
              border: "2px solid rgba(255, 255, 255, 0.75)",
              transition: "all 250ms ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              borderRadius: "5px",
              padding: "7px 15px",
              fontWeight: "700",
              cursor: "pointer"
            }}>
              OWN A FRANCHISE
            </button>
          </div>
          <div className="navbar__cart-button">
            <button>GET APP</button>
          </div>
        </div>
      </div>
      <div className="m-nav">
        <div className="m-nav__hamburgar" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="m-nav__logo">
          <Link to="/" className="navbar__links-link">
            <Logo size="small" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu__overlay" onClick={() => setShowMobileMenu(false)}></div>
            <div className="mobile-menu__content">
              <div className="mobile-menu__header">
                <h3>Menu</h3>
                <button onClick={() => setShowMobileMenu(false)}>✕</button>
              </div>
              <div className="mobile-menu__items">
                <Link to="/" className="mobile-menu__item" onClick={() => setShowMobileMenu(false)}>
                  Home
                </Link>
                <div className="mobile-menu__item mobile-menu__services">
                  <span>Services</span>
                  <div className="mobile-menu__services-list">
                    <div onClick={() => { handleServiceClick("General Training"); setShowMobileMenu(false); }}>General Training</div>
                    <div onClick={() => { handleServiceClick("Personal Training"); setShowMobileMenu(false); }}>Personal Training</div>
                    <div onClick={() => { handleServiceClick("Group Classes"); setShowMobileMenu(false); }}>Group Classes</div>
                    <div onClick={() => { handleServiceClick("HIIT Training"); setShowMobileMenu(false); }}>HIIT Training</div>
                    <div onClick={() => { handleServiceClick("Yoga"); setShowMobileMenu(false); }}>Yoga</div>
                    <div onClick={() => { handleServiceClick("Boxing"); setShowMobileMenu(false); }}>Boxing</div>
                    <div onClick={() => { handleServiceClick("Strength & Conditioning"); setShowMobileMenu(false); }}>Strength & Conditioning</div>
                    <div onClick={() => { handleServiceClick("Body Transformation"); setShowMobileMenu(false); }}>Body Transformation</div>
                  </div>
                </div>
                <div className="mobile-menu__buttons">
                  <button className="mobile-menu__btn mobile-menu__btn--franchise">OWN A FRANCHISE</button>
                  <button className="mobile-menu__btn mobile-menu__btn--app">GET APP</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
