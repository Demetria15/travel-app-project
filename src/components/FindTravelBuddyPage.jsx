// FindTravelBuddyPage.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TravelBuddyForm from "./TravelBuddyForm";
import TravelBuddyCard from "./TravelBuddyCard";
import "./FindTravelBuddyPage.css";

const FindTravelBuddyPage = () => {
  const [travelBuddies, setTravelBuddies] = useState(
    JSON.parse(localStorage.getItem("travelBuddies")) || []
  );

  useEffect(() => {
    localStorage.setItem("travelBuddies", JSON.stringify(travelBuddies));
  }, [travelBuddies]);

  const handleFormSubmit = (userData) => {
    if (userData.image instanceof File || userData.image instanceof Blob) {
      setTravelBuddies([...travelBuddies, userData]);
    } else {
      // Handle the case where userData.image is a URL
      setTravelBuddies([...travelBuddies, { ...userData, image: null }]);
    }
  };

  return (
    <div className="find-buddy-page">
      <h1>Find a Travel Buddy</h1>
      <TravelBuddyForm onSubmit={handleFormSubmit} />
      <div className="travel-buddy-cards">
        {travelBuddies.map((buddy, index) => (
          <TravelBuddyCard key={index} {...buddy} />
        ))}
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default FindTravelBuddyPage;


