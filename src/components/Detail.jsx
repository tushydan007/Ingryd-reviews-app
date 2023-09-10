import React from "react";

const Detail = ({ record }) => {
  return (
    <div className="img-div">
      <figure>
        <img src={record.image} alt="caption" />
      </figure>
      <div className="details">
        <p>{record.name}</p>
        <p className="gray">{record.age} years</p>
      </div>
    </div>
  );
};

export default Detail;
