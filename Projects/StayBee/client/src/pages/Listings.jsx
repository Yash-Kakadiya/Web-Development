import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Listings() {

    const [data, setData] = useState([]);

    let apiUrl = "http://localhost:3001/staybee/listings";

    useEffect(() => {
        fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(res => setData(res))
            .catch(e => console.error('There was a problem with the fetch operation: ', e));

    }, []);

    const formattedListings = data.map((listing) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 my-2" key={listing._id}>
                <div className="card h-100">
                    <img
                        src={listing.image.url}
                        className="card-img-top"
                        alt="listing_image"
                    />
                    <div className="card-body d-flex flex-column p-1">
                        <h5 className="card-title">{listing.title}</h5>
                        <p className="card-text">&#8377; {listing.price} /night</p>
                        <Link to={'/staybee/listings/'+listing._id}className="btn btn-outline-warning mt-auto text-dark">Read More</Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    {formattedListings}
                </div>
            </div>
        </>
    )
}
