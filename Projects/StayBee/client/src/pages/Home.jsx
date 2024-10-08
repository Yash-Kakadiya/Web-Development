import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container mt-5">
      <section className="hero-section text-center mb-5">
        <h1 className="display-4 fw-bold text-warning">Welcome to StayBee!</h1>
        <p className="fs-4 text-dark">
          The perfect place to find and book cozy stays around the world.
        </p>
        <p className="fs-5 text-dark">
          Whether you are looking to explore beautiful locations or list your own property, StayBee has you covered.
        </p>
        <Link to="/staybee/listings" className="btn btn-warning fw-bold rounded-pill mx-1 text-center">
          Explore Listings
        </Link>
        <Link to="/add" className="btn btn-outline-warning fw-bold rounded-pill mx-1 text-dark ">
          Add Your Listing
        </Link>
      </section>

      <section className="introduction-section text-center py-5 bg-dark text-light rounded-4 mb-5 p-5">
        <h2 className="text-warning">Why Choose StayBee?</h2>
        <p className="fs-5 mt-3">
          At StayBee, we offer a platform to help travelers find beautiful stays around the world.
          Our goal is to make travel easier by providing a vast selection of accommodations at great prices.
        </p>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <h3 className="text-warning">Explore Stays</h3>
            <p>
              Browse through a diverse range of listings and find your next cozy spot. We offer listings in different countries and unique locations.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="text-warning">Add Your Own</h3>
            <p>
              Do you own a property? Add your listing easily and reach thousands of travelers. Our platform is designed for hassle-free listing management.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="text-warning">Book with Confidence</h3>
            <p>
              Secure your booking with just a few clicks. StayBee ensures a seamless experience with secure payments and reliable customer support.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section text-center mb-5">
        <h2 className="text-warning">Ready to Start Your Journey?</h2>
        <p className="fs-5 text-dark">
          Whether you're booking your next stay or listing your own property, StayBee makes it simple.
        </p>
      </section>
    </div>
  );
}
