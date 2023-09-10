import { FaQuoteRight } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const Card = ({ object, onIncrement, onDecrement, onRandomData }) => {
  return (
    <div className="card-div">
      <div className="quote-image">
        <img src={object.image} Alt="human" />
        <div className="quote-div">
          <FaQuoteRight className="double-quote" />
        </div>
      </div>

      <h3>{object.name}</h3>
      <div className="job-text">
        <p className="job">{object.job.toUpperCase()}</p>
        <p className="text">{object.text}</p>
      </div>
      <span className="span">
        <div className="icons">
          <HiChevronLeft color="#000" onClick={onDecrement} />
        </div>
        <div className="icons">
          <HiChevronRight color="#000" onClick={onIncrement} />
        </div>
      </span>
      <button onClick={onRandomData}>Surprise me</button>
    </div>
  );
};

export default Card;
