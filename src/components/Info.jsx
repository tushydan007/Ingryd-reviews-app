import React from "react";

const Info = ({ record, onDelete }) => {
  return (
    <div>
      <p>{record.name}</p>
      <button onClick={() => onDelete(record)}>Delete</button>
    </div>
  );
};

export default Info;
