import { useState } from "react";
import Star from "./star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "rgb(110, 0, 220,.8)",
};

const starContainerStyle = {
  display: "flex",
};

export default function StarRating({
  /* 
  You've probably heard "you should never initialize state from props", as we're doing below with ratingDefault. However, this is only true if you want the state variable to stay in sync with the passed prop. Or, if you want the state value to update in case the prop value is updated, which is not the case here. We're using defaultRating essentially as Seed Data.
  */
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRatingClick(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle} className={className}>
          {Array.from({ length: maxRating }, (cur, i) => (
            <Star
              key={i}
              onRateClick={() => handleRatingClick(i + 1)}
              onRateEnter={() => setTempRating(i + 1)}
              onRateExit={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              color={color}
              size={size}
            />
          ))}
        </div>
        <p style={textStyle}>
          {/* Only display messages if there are the same amount as the maxRating, else look for a tempRating, then a rating. */}
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      </div>
    </>
  );
}
