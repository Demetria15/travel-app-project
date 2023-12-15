import React, { useState } from "react";
import "./TravelBuddyForm.css"; 

const TravelBuddyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    image: null,
    hobbies: "",
    idealMatch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      age: "",
      image: null,
      hobbies: "",
      idealMatch: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="travel-buddy-form">
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <label className="form-label">
        Hobbies:
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Ideal Travel Match:
        <textarea
          name="idealMatch"
          value={formData.idealMatch}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default TravelBuddyForm;


