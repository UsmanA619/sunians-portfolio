import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Header({ categorynames }) {
  const [open, toggle] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItemsDivHeight = 42 * (categorynames.length + 2);

  const transition = useSpring({
    height: open ? menuItemsDivHeight : 0,
  });

  const changeRoute = (route) => {
    if (pathname === "/" && route === "/") {
      window.location.reload();
    } else {
      navigate(route);
      toggle(false);
    }
  };

  return (
    <>
      <div className="menu_div">
        <animated.div
          style={transition}
          id="menuItemsDiv"
          className="menu_items_div"
        >
          {categorynames?.map((elem, index) => (
            <p
              key={index}
              onClick={() => {
                setActiveItem(elem.name);
                if (elem.name === "Home") {
                  navigate("/");
                  toggle(false);
                } else {
                  navigate("/Category", { state: elem.name });
                  toggle(false);
                }
              }}
              className={
                activeItem === elem.name
                  ? "menu_items menuItemActive"
                  : "menu_items"
              }
            >
              {elem.name}
            </p>
          ))}
          <p
            onClick={() => {
              changeRoute("/About");
              setActiveItem("About");
            }}
            className={
              activeItem === "About"
                ? "menu_items menuItemActive"
                : "menu_items"
            }
          >
            About
          </p>
          <p
            onClick={() => {
              changeRoute("/Contact");
              setActiveItem("Contact");
            }}
            className={
              activeItem === "Contact"
                ? "menu_items menuItemActive"
                : "menu_items"
            }
          >
            Contact me
          </p>
        </animated.div>

        <button onClick={() => toggle(!open)} className="menu_btn">
          Menu
        </button>
      </div>

      <header>
        <h1 onClick={() => changeRoute("/")} className="uppercase">
          Shah Sunain
        </h1>

        <nav>
          <ul>
            {categorynames?.map((elem) => (
              <li
                key={elem.name}
                onClick={() =>
                  elem.name === "Home"
                    ? navigate("/")
                    : navigate("/Category", { state: elem.name })
                }
              >
                {elem.name}
              </li>
            ))}
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/Contact")}>Contact me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
