import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = (path) => {
  path = path.path;



  

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
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>slam</span>
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
            >
              <Link
                to="/fitness"
                className="navbar__links-link"
                style={
                  path === "services"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                services
              </Link>{" "}
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
          <div className="navbar__cart-button">
            <button>GET APP</button>
          </div>
        </div>
      </div>
      <div className="m-nav">
        <div className="m-nav__hamburgar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="m-nav__logo">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
            alt="m-logo"
          />
        </div>


      </div>
    </>
  );
};

export default Navbar;
