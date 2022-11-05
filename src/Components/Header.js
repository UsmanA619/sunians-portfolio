import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Header() {
  const [open, toggle] = useState(false);

  const navigate = useNavigate();

  const transition = useSpring({
    height: open ? 300 : 0,
  });

  return (
    <>
      <div className="menu_div">
        <animated.div
          style={transition}
          id="menuItemsDiv"
          className="menu_items_div"
        >
          <p
            onClick={() => {
              navigate("/");
              toggle(!open);
            }}
            className="menu_items"
          >
            Home
          </p>
          <p className="menu_items">Graphic Designing</p>
          <p className="menu_items">3D</p>
          <p className="menu_items">Photography</p>
          <p className="menu_items">Videography</p>
          <p className="menu_items">Video Editing</p>
          <p
            onClick={() => {
              navigate("/Contact");
              toggle(!open);
            }}
            className="menu_items"
          >
            Contact me
          </p>
        </animated.div>

        <button onClick={() => toggle(!open)} className="menu_btn">
          Menu
        </button>
      </div>

      <header>
        <h1 onClick={() => navigate("/")} className="uppercase">
          Shah Sunain
        </h1>

        <nav>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>Graphic Designing</li>
            <li>3D</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Video Editing</li>
            <li onClick={() => navigate("/Contact")}>Contact me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
