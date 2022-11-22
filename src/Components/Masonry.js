import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import { OptimizedImage } from "./ImageComponent/optimizedImage";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function MasonryExample({ imageData }) {
  const [model, setModel] = React.useState(false);
  const [tempImgSrc, setTempImgSrc] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  const listener = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    listener();
    window.addEventListener("resize", listener);
  }, [isMobile]);
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc ? tempImgSrc : ""} />
        <CloseIcon onClick={() => setModel(false)} className="ImgcloseIcon" />
      </div>
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry
          sx={{ margin: 0 }}
          columns={isMobile ? 2 : 4}
          spacing={0.4}
        >
          {imageData.map((item, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => getImg(item.image)}
              key={index}
            >
              <OptimizedImage
                url={item.image}
                hash={item.encodedImageData}
                itemkey={item.key}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </>
  );
}
