import React from "react";

const Color = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        width: "70px",
        height: "70px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      {color}
    </div>
  );
};

export default Color;
