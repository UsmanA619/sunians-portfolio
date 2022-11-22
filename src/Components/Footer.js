import React, { useState } from "react";

const defaultColors = {
  twticon: "black",
  fbIcon: "black",
  ytIcon: "black",
  instaIcon: "black",
};

const defaultHoverColors = {
  twticon: "grey",
  fbIcon: "grey",
  ytIcon: "grey",
  instaIcon: "grey",
};

export default function Footer() {
  const [iconsColor, setIconsColor] = useState(defaultColors);

  const changeColors = (name) => {
    if (name === "fbIcon") {
      setIconsColor({ ...defaultHoverColors, fbIcon: "black" });
    }

    if (name === "twitterIcon") {
      setIconsColor({ ...defaultHoverColors, twticon: "black" });
    }

    if (name === "ytIcon") {
      setIconsColor({ ...defaultHoverColors, ytIcon: "black" });
    }

    if (name === "instaIcon") {
      setIconsColor({ ...defaultHoverColors, instaIcon: "black" });
    }
  };

  const changeToDefaultColor = () => {
    setIconsColor({ ...defaultColors });
  };

  return (
    <footer>
      <div onMouseLeave={changeToDefaultColor}>
        <a target="__blank" href="https://www.facebook.com/shahsunain.gadit">
          <i
            style={{
              color: iconsColor.fbIcon,
            }}
            onMouseEnter={() => changeColors("fbIcon")}
            id="fbIcon"
            className="fa-brands fa-facebook-f"
          ></i>
        </a>
        <a target="__blank" href="https://twitter.com/SSunain?">
          <i
            style={{
              color: iconsColor.twticon,
            }}
            onMouseEnter={() => changeColors("twitterIcon")}
            id="twitterIcon"
            className="fa-brands fa-twitter"
          ></i>
        </a>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/shah-sunain-826995221"
        >
          <i
            style={{
              color: iconsColor.ytIcon,
            }}
            onMouseEnter={() => changeColors("ytIcon")}
            id="ytIcon"
            class="fa-brands fa-linkedin-in"
          ></i>
        </a>
        <a target="__blank" href="https://instagram.com/_shahsunain_">
          <i
            style={{
              color: iconsColor.instaIcon,
            }}
            onMouseEnter={() => changeColors("instaIcon")}
            id="instaIcon"
            className="fa-brands fa-instagram"
          ></i>
        </a>
      </div>
    </footer>
  );
}
