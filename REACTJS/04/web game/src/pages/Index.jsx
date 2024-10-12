// src/pages/Index.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./../App.css"; // Or whichever path for your CSS

const Index = ({ blogs }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>ANYWHERE FOR THE CLUB</h1>
            <p>Coming Sep 24, 2024</p>
            <div className="buttons">
              <a href="#" className="btn-app-store">
                Download on the App Store
              </a>
              <a href="#" className="btn-google-play">
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="belingoal.jpg" alt="EA Sports FC Mobile Hero Image" />
          </div>
        </div>
      </section>

      <section className="new-season">
        <div className="container">
          <h2>KICK OFF NEW 24/25 SEASON</h2>
          <p>
            EA SPORTS FC™ Mobile's new season update brings exciting new
            additions to the way you play.
          </p>
          <p>Anywhere for the club.</p>
        </div>
      </section>

      <div className="blogs content">
        <h2>All Blogs</h2>
        {blogs.length ? (
          blogs.map((blog) => (
            <a key={blog._id} className="single" href={`/blogs/${blog._id}`}>
              <h3 className="title">{blog.title}</h3>
              <p className="snippet">{blog.snippet}</p>
            </a>
          ))
        ) : (
          <p>There are no blogs to display...</p>
        )}
      </div>
    </>
  );
};

export default Index;