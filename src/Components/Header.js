import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Header({ categorynames }) {
  const [open, toggle] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const transition = useSpring({
    height: open ? 330 : 0,
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
          <p onClick={() => changeRoute("/")} className="menu_items">
            Home
          </p>
          <p className="menu_items">Graphic Designing</p>
          <p className="menu_items">3D</p>
          <p className="menu_items">Photography</p>
          <p className="menu_items">Videography</p>
          <p className="menu_items">Video Editing</p>
          <p onClick={() => changeRoute("/About")} className="menu_items">
            About
          </p>
          <p onClick={() => changeRoute("/Contact")} className="menu_items">
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
            {/* <li onClick={() => navigate("/")}>Home</li>
            <li>Graphic Designing</li>
            <li>3D</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Video Editing</li> */}
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/Contact")}>Contact me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
