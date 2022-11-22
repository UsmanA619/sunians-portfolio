import React from "react";
import MasonryExample from "../Components/Masonry";
// import { OptimizedImage } from "../Components/ImageComponent/optimizedImage";

export default function Home({ imageData }) {
  return (
    <>
      <MasonryExample imageData={imageData} />
    </>
  );
}
