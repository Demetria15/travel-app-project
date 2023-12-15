
import React from "react";
import TravelBuddyCard from "./TravelBuddyCard"; // Adjust the path accordingly

const FindBuddyPage = () => {
  // Sample data for travel buddies
  const travelBuddies = [
    {
      name: "John Doe",
      image: "john-doe.jpg", // Replace with the actual image path
      description: "I love exploring new places and trying local cuisines.",
      preferredBuddy: "Someone who shares similar interests.",
    },
    // Add more travel buddies as needed
  ];

  return (
    <div className="find-buddy-page">
      <h1>Find a Travel Buddy</h1>
      <div className="travel-buddy-cards">
        {travelBuddies.map((buddy, index) => (
          <TravelBuddyCard key={index} {...buddy} />
        ))}
      </div>
    </div>
  );
};

export default FindBuddyPage;
