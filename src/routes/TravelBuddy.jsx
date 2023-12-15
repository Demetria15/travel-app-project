// TravelBuddy.jsx
import React from "react";
import { connect } from "react-redux";
import { updateFormData } from "../actions";
import FindTravelBuddyPage from "../components/FindTravelBuddyPage"; // Fix the import

const TravelBuddy = ({ formData, updateFormData }) => {
  const handleFormSubmit = (post) => {
    updateFormData(post);
  };

  return (
    <div>
      {/* Render the page component, not the form component */}
      <FindTravelBuddyPage onSubmit={handleFormSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.form,
});

const mapDispatchToProps = {
  updateFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelBuddy);




