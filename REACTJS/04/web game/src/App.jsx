// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About"; // Assuming you have an About page
import Blog from "./pages/Blog"; // Assuming you have a Blog page

const App = () => {
  // Mock data for blogs (you can load this dynamically)
  const blogs = require('./posts.json'); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index blogs={blogs} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;