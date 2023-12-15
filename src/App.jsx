// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; 
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import TravelBuddy from "./routes/TravelBuddy";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/find-buddy" element={<TravelBuddy />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;


