import React from "react";

const ColorPicker = ({ colors, onColorSelect, selectedColor }) => {
  return (
    <div>
      <h3 className="mb-8">You choice of color is color {selectedColor}</h3>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => onColorSelect(color)}
          className="rounded-full bg-slate-300 cursor-pointer mb-3"
        >
          {color}
        </div>
      ))}
      {selectedColor ? (
        <div
          style={{
            backgroundColor: `${selectedColor}`,
            height: "80px",
            width: "80px",
            border: " 3px solid black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "50px auto",
          }}
        >
          {selectedColor}
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
