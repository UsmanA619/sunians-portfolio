import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Home({ imageData }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(false);

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };


  return (
    <>
      <div
        className={model ? "model open" : "model"}
      >
        <img src={tempImgSrc ? tempImgSrc : ""} />
        <CloseIcon onClick={() => setModel(false)} className="ImgcloseIcon" />
      </div>
      <section
        style={{ minHeight: "70vh" }}
        className="container-fluid text-center"
      >
        <div className="showcase_images_div">
          {imageData.length
            ? imageData.map((item) => (
                <div
                  onClick={() => getImg(item.image)}
                  key={item.key}
                  className="image_div"
                >
                  <img
                    // loading="lazy"
                    className="showcase_image"
                    src={item.image}
                  />
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
}
