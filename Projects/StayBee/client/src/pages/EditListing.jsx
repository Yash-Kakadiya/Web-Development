import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditListing() {
    const navigate = useNavigate();
    const { id } = useParams();

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

    useEffect(() => {
        const apiUrl = 'http://localhost:3001/staybee/listings/' + id;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setFormData(data);
            })
            .catch(error => console.error("Error fetching listing:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "imageUrl") {
            setFormData((prevData) => ({
                ...prevData,
                image: {
                    ...prevData.image,
                    url: value
                }
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        console.log('ok');
        
        e.preventDefault();

        const apiUrl = 'http://localhost:3001/staybee/listings/edit/' + id;
        fetch(apiUrl, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => navigate('/staybee/listings'))
            .catch(error => console.error("Error editing listing:", error));
    }
    return (
        <>
            <div className="container mt-5 fs-4 fw-medium">
                <h2 className="mb-4 text-center">Edit Listing</h2>
                <form onSubmit={handleSubmit} className="p-4 border rounded-4 border-warning bg-dark bg-opacity-25 bg-opacity-10"
                    style={{ maxWidth: '800px', margin: 'auto' }}
                >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
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
                        <label htmlFor="description" className="form-label">Description</label>
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
                        <label htmlFor="price" className="form-label">Price (&#8377; per night)</label>
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
                        <label htmlFor="location" className="form-label">Location</label>
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
                        <label htmlFor="country" className="form-label">Country</label>
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
                        <label htmlFor="imageUrl" className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.image.url}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="w-100 mt-3 text-dark btn btn-warning fw-bolder rounded-5">
                        Update Listing
                    </button>
                </form>
            </div>
        </>
    );
}