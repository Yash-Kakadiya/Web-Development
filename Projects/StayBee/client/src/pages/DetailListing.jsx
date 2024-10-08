import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DetailListing() {

    const { id } = useParams();
    const navigate = useNavigate();

    let apiUrl = "http://localhost:3001/staybee/listings/" + id;

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);


    const handleDelete = () => {
        const apiUrl="http://localhost:3001/staybee/listings/delete/" + id;

        fetch(apiUrl, { method: "DELETE" })
            .then(() => navigate(-1))
            .catch(error => console.error("Error deleting data:", error));
    };


    return (
        <>
            <div className="container-fluid mt-3">
                <button onClick={() => navigate(-1)} className="text-dark fs-5 btn btn btn-outline-warning fw-medium">
                    &larr; Back
                </button>

                <div className="detailListing p-3 rounded-4  fw-bold" >
                    <div className="row g-4">
                        {/* Image Column */}
                        <div className="col-md-6">
                            {data.image && (
                                <img
                                    src={data.image.url}
                                    alt={data.title || "Listing Image"}
                                />
                            )}
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-between">
                            <div>
                                <h1 className='fs-1 fw-bold'>{data.title}</h1>
                                <p className='fs-5 mt-5'>{data.description}</p>
                                <h3 className=' fw-bold text-dark'>
                                    &#8377; {data.price} /night
                                </h3>
                                <p className='fs-5 mt-4'>Location: {data.location}</p>
                                <p className='fs-5'>Country: {data.country}</p>
                            </div>

                            <div className="d-flex justify-content-evenly">
                                <Link to={'/staybee/listings/edit/' + data._id} className="btn btn-primary fs-4 text-dark fw-bold px-3 rounded-5">Edit</Link>
                                <button onClick={handleDelete} className="btn btn-danger fs-4 text-dark fw-bold px-3 rounded-5">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
