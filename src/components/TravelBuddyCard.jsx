// TravelBuddyCard.jsx
const TravelBuddyCard = ({ name, age, image, hobbies, idealMatch }) => {
  return (
    <div className="travel-buddy-card">
      {image && (
        <div className="profile-image-container">
          <img src={image} alt={name} className="profile-image" />
        </div>
      )}
      <div className="card-info">
        <h2>
          {name}, {age}
        </h2>
        <p>Hobbies: {hobbies}</p>
        <br />
        <p>Ideal Travel Match: {idealMatch}</p>
      </div>
    </div>
  );
};

export default TravelBuddyCard;









