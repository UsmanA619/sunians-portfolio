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
        <i
          style={{
            color: iconsColor.fbIcon,
          }}
          onMouseEnter={() => changeColors("fbIcon")}
          id="fbIcon"
          className="fa-brands fa-facebook-f"
        ></i>
        <i
          style={{
            color: iconsColor.twticon,
          }}
          onMouseEnter={() => changeColors("twitterIcon")}
          id="twitterIcon"
          className="fa-brands fa-twitter"
        ></i>
        <i
          style={{
            color: iconsColor.ytIcon,
          }}
          onMouseEnter={() => changeColors("ytIcon")}
          id="ytIcon"
          className="fa-brands fa-youtube"
        ></i>
        <i
          style={{
            color: iconsColor.instaIcon,
          }}
          onMouseEnter={() => changeColors("instaIcon")}
          id="instaIcon"
          className="fa-brands fa-instagram"
        ></i>
      </div>
    </footer>
  );
}
