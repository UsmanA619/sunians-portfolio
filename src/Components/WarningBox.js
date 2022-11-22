import React from "react";

export default function WarningBox({ mLeft = 0, mTop = 0, message = "" }) {
  return (
    <div className="warning_box" style={{ marginLeft: mLeft, marginTop: mTop }}>
      <i className="fa-solid fa-xmark"></i>
      <p>{message}</p>
    </div>
  );
}
