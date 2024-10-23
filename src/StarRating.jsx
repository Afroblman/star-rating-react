import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(0);
  }
  function handleClick(currentIndex) {
    setRating(rating === currentIndex ? currentIndex - 1 : currentIndex);
  }
  return (
    <div className="star-rate">
      <h1>Star Rating</h1>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              color: index <= (hover || rating) ? "green" : "yellow",
              fontSize: 50,
            }}
          />
        );
      })}
      <h2>Rating {rating}</h2>
      <h2>Hover {hover}</h2>
    </div>
  );
}
export default StarRating;
