import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";

// import imageData from "../Config/imageData";

export default function Category({ data }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(false);
  const [imageData, setImageData] = useState([]);

  const { state } = useLocation();
  const navigate = useNavigate();

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  useEffect(() => {
    console.log(data[state]);
    if (data[state]) {
      if (Object.keys(data).length) {
        const newDAta = Object.values(data[state]);

        setImageData(newDAta);
      }
    } else {
      navigate("/");
    }
  }, [state, Object.keys(data).length]);

  return (
    <>
      <div className={model ? "model open" : "model"}>
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
