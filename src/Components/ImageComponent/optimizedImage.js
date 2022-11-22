// import { Fade, Grow, Slide, Zoom } from "@mui/material";
import { Fade } from "@mui/material";
import { useState } from "react";
// import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

function OptimizedImage({ url, hash, itemkey }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    // console.log("Ended: ");
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    // console.log("Started: ");
    setLoadStarted(true);
  };

  return (
    <>
      {!isLoaded && isLoadStarted && (
        // <Blurhash
        //   style={{ width: "100%", height: "100%", zIndex: 999 }}
        //   hash={hash}
        //   punch={1}
        // />
        <div
          style={{
            width: "100%",
            height: "100%",
            zIndex: 999,
            background: "white",
          }}
        ></div>
      )}
      {/* Fade, Grow, Slide, Zoom  */}
      <Fade timeout={1000} in={isLoaded}>
        <div className="showcase_image">
          <LazyLoadImage
            key={itemkey}
            src={url}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            beforeLoad={handleLoadStarted}
            onLoad={handleLoad}
          />
        </div>
      </Fade>
    </>
  );
}

export { OptimizedImage };
