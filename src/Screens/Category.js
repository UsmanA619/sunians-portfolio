import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { OptimizedImage } from "../Components/ImageComponent/optimizedImage";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MasonryExample from "../Components/Masonry";
// import imageData from "../Config/imageData";

export default function Category({ data }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [dummyVideoData, setDummyVideoData] = useState([]);
  const [video, setVideo] = useState("");
  const [showExpandIcon, setShowExpandIcon] = useState(true);

  const { state } = useLocation();
  const navigate = useNavigate();

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  // const videos = [
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  //   {
  //     thumbnail:
  //       "https://firebasestorage.googleapis.com/v0/b/shahsunaingadit.appspot.com/o/files%2FPARK%20REMAKE0229.jpg?alt=media&token=eaa9288c-78a0-4ddb-a79e-69572f02b46c",
  //     embedUrl:
  //       "https://www.youtube.com/embed/2fkTowk5sGo?autoplay=1&rel=0&showinfo=0&controls=0",
  //   },
  // ];

  console.log(window.innerWidth);
  useEffect(() => {
    setShowExpandIcon(true);
    if (data[state]) {
      if (Object.keys(data).length) {
        const newDAta = Object.values(data[state])?.reverse();
        console.log("newDAta--------------", newDAta);
        const filteredData = newDAta.filter((element) => !element?.isVerticle);
        const videoFiltered = newDAta.filter((element) => element?.videoURL);
        if (window.innerWidth < 900) {
          setVideoData(filteredData.slice(0, 4));
        } else if (window.innerWidth < 1808) {
          setVideoData(filteredData.slice(0, 6));
        } else {
          setVideoData(filteredData.slice(0, 8));
        }

        setDummyVideoData(videoFiltered);
        setImageData(newDAta);
      }
    } else {
      navigate("/");
    }
  }, [state, Object.keys(data).length]);
  
  return (
    <>
      {imageData[0]?.videoURL ? (
        <>
          <div>
            <div
              className={
                video === "" ? "fullVideoContainer" : "fullVideoContainer open"
              }
            >
              <iframe
                className="fullVideo"
                src={video.replace("controls=0", "controls=1")}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <CloseIcon
                onClick={() => setVideo("")}
                className="ImgcloseIcon"
              />
            </div>
          </div>

          <section className="videos_container">
            {videoData.map(({ image, videoURL, thumbnail, isVerticle }) => {
              if (!isVerticle) {
                return (
                  <div
                    key={image ? image : thumbnail}
                    style={{ position: "relative" }}
                    className="video"
                  >
                    <iframe
                      srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;}img{object-fit: cover;height: 100%}span{height:1.5em;text-align:center;font:1.5rem/1.7 sans-serif;color:white;padding:.4rem 1.4rem;width:auto;left:50%;transform:translateX(-50%);clip-path:ellipse(4rem 1.5rem);border-radius:.95rem}span:hover{background-color:red}</style><a href=${videoURL}?controls=0><img loading='lazy' src=${
                        image ? image : thumbnail
                      } alt='show case video'><span>▶</span></a>`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <FullscreenIcon
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        left: "5px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "26px",
                      }}
                      onClick={() => setVideo(videoURL)}
                    />
                  </div>
                );
              }
            })}
          </section>

          {dummyVideoData?.length > 8 && showExpandIcon && imageData?.length ? (
            <div className="expandMoreDiv">
              <ExpandMoreIcon
                onClick={() => {
                  setVideoData(dummyVideoData);
                  setShowExpandIcon(false);
                }}
                sx={{ color: "dimgrey", fontSize: "65px", cursor: "pointer" }}
              />
            </div>
          ) : null}

          <section style={{ marginTop: "100px" }} className="videos_container">
            {imageData.map(({ image, videoURL, thumbnail, isVerticle }) => {
              if (isVerticle) {
                return (
                  <div
                    key={image ? image : thumbnail}
                    className="video"
                    style={{ position: "relative", height: "65em" }}
                  >
                    <iframe
                      srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;}img{object-fit: cover;height: 100%}span{height:1.5em;text-align:center;font:1.5rem/1.7 sans-serif;color:white;padding:.4rem 1.4rem;width:auto;left:50%;transform:translateX(-50%);clip-path:ellipse(4rem 1.5rem);border-radius:.95rem}span:hover{background-color:red}</style><a href=${videoURL}?controls=0><img loading='lazy' src=${
                        image ? image : thumbnail
                      } alt='How to make a video portfolio'><span>▶</span></a>`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <FullscreenIcon
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        left: "5px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "26px",
                      }}
                      onClick={() => setVideo(videoURL)}
                    />
                  </div>
                );
              }
            })}
          </section>
        </>
      ) : (
        <>
          <MasonryExample imageData={imageData} />
        </>
      )}
    </>
  );
}
