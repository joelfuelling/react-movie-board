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

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRatingClick(rating) {
    setRating(rating);
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (cur, i) => (
            <Star
              key={i}
              onRateClick={() => handleRatingClick(i + 1)}
              onRateEnter={() => setTempRating(i + 1)}
              onRateExit={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
        <p style={textStyle}>{tempRating || rating || ""}</p>
      </div>
    </>
  );
}
