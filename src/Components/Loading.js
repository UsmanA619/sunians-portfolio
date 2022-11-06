import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          width: { xs: "8vw", sm: "5vw" },
          height: { xs: "8vw", sm: "5vw" },
          color: "black",
        }}
      />
    </div>
  );
}
