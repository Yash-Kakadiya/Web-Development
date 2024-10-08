import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddListing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    country: '',
    image: {
      filename: 'listingimage',
      url: ''
    }
  });

  const handleChange = (c) => {
    setFormData({
      ...formData,
      [c.target.name]: c.target.value,
    });
  };

  const handleSubmit = (s) => {
    s.preventDefault();

    let apiUrl = "http://localhost:3001/staybee/listings/add";
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => navigate('/staybee/listings'))
      .catch(e => console.error("Error adding listing:", e));
  };

  return (
    <>
      <div className="container mt-5 fs-4 fw-medium">
        <h2 className="mb-4 text-center">Add New Listing</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded-4 border-warning bg-dark bg-opacity-25 bg-opacity-10"
          style={{ maxWidth: '800px', margin: 'auto' }}
        >
          <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label for="price" className="form-label">Price (&#8377; per night)</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="imageUrl" className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="image.url"
              value={formData.image.url}
              onChange={(c) => {
                setFormData((prevData) => ({
                  ...prevData,
                  image: {
                    ...prevData.image,
                    url: c.target.value
                  }
                }));
              }}
              required
            />
          </div>

          <button type="submit" className=" w-100 mt-3 text-dark btn btn-warning fw-bolder rounded-5">Add Listing</button>
        </form>
      </div>

    </>
  );
}
