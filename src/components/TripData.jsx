import React from "react";
import "./TripStyles.css";

function renderStars(rating) {
  const fullStars = "★".repeat(Math.floor(rating));
  const emptyStars = "☆".repeat(Math.floor(5 - rating));

  return `${fullStars}${emptyStars}`;
}

function TripData(props) {
  let stars;

  if (props.heading === "Trip in Indonesia") {
    // If it's Indonesia, always show 5 stars
    stars = "★★★★★";
  } else {
    // Otherwise, use the renderStars function without half stars
    stars = renderStars(props.rating);
  }

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="trip" />
      </div>
      <h4>{props.heading}</h4>
      {stars && (
        <div className="rating">
          <strong>Rating:</strong> {stars}
        </div>
      )}
      <p>{props.text}</p>
      {props.reviews && props.reviews.length > 0 && (
        <div className="reviews">
          <br /> {/* Add a line break before the Reviews section */}
          <strong>Reviews:</strong>
          {props.reviews.map((review, index) => (
            <div key={index}>
              <p>
                <strong>{review.user}:</strong> {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TripData;








