import React from "react";
import { useState } from "react";
import { data } from "./../utility/data";
import Card from "./Card";

const Main = () => {
  const [record, setRecord] = useState(data);
  const [index, setIndex] = useState(0);

  const onIncrement = () => {
    setIndex((oldValue) => oldValue + 1);
    if (index >= record.length - 1) {
      setIndex(0);
    }
  };

  const onDecrement = () => {
    setIndex((oldValue) => oldValue - 1);
    if (index <= 0) {
      setIndex(data.length - 1);
    }
  };

  const onRandomData = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  return (
    <div className="container">
      <h3 style={{ marginBottom: "40px" }}>
        Our <span className="part">Rev</span>iews
      </h3>
      <Card
        object={data[index]}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRandomData={onRandomData}
      />
    </div>
  );
};

export default Main;
