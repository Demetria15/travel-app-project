import React, { useState } from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  const [selectedRating, setSelectedRating] = useState(null);

  const trips = [
    {
      image: Trip1,
      heading: "Trip in Indonesia",
      text:
        "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
      rating: 5,
      reviews: [
        { user: "John Doe", comment: "Great trip!" },
        { user: "Jane Smith", comment: "Amazing experience!" },
      ],
    },
    {
      image: Trip2,
      heading: "Trip in Malaysia",
      text:
        "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.",
      rating: 3.8,
      reviews: [
        { user: "Alice Johnson", comment: "Beautiful scenery!" },
        { user: "Bob Williams", comment: "Good food!" },
      ],
    },
    {
      image: Trip3,
      heading: "Trip in France",
      text:
        "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
      rating: 4.2,
      reviews: [
        { user: "Charlie Brown", comment: "Lovely trip!" },
        { user: "Diana Martinez", comment: "Cultural experience!" },
      ],
    },
  ];

  const filteredTrips = selectedRating
    ? trips.filter((trip) => Math.floor(trip.rating) === selectedRating)
    : trips;

  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div>
        <label>
          Filter by Rating:
          <select
            value={selectedRating || ""}
            onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
          >
            <option value="">All</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </label>
      </div>
      <div className="tripcard">
        {filteredTrips.map((trip, index) => (
          <TripData
            key={index}
            image={trip.image}
            heading={trip.heading}
            text={trip.text}
            rating={trip.rating}
            reviews={trip.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default Trip;



