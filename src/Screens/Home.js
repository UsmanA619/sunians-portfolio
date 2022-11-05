import React from "react";
import { useSpring, animated } from "react-spring";

import imageData from "../Config/imageData";

export default function Home() {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <section className="container-fluid text-center">
      <div className="showcase_images_div">
        {imageData.map((item) => (
          <animated.div key={item.src} style={fade} className="image_div">
            <img
              loading="lazy"
              className="showcase_image"
              src={item.src}
              alt={item.alt}
            />
          </animated.div>
        ))}
      </div>
    </section>
  );
}
