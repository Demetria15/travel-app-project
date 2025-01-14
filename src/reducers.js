// reducers.js
const initialState = {
    name: "",
    description: "",
    lookingFor: "",
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_FORM_DATA":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;
  