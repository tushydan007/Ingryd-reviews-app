import React from "react";

const Text = ({ onTextToggle, isTextVisible }) => {
  return (
    <div>
      <p className={isTextVisible ? "show" : "hide"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        velit nulla praesentium dignissimos autem nobis, corrupti inventore
        explicabo soluta voluptate modi? Numquam nesciunt, eaque error sunt
        cumque aperiam dolorum sapiente.
      </p>
      <button onClick={onTextToggle}>
        {isTextVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default Text;
