import React from 'react';
import { Link } from 'react-router-dom';
import beeIcon from '../utils/images/beeIcon.jpg';

export default function () {
    return (
        <nav className="navbar navbar-expand-md bg-body-light fs-4 mx-2 border-bottom text-dark-emphasis sticky-top bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand " to="/staybee">
                    <img src={beeIcon}
                        height={'80px'} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link btn btn-outline-warning" aria-current="page" to="/staybee">Home</Link>
                        <Link className="nav-link btn btn-outline-warning" to="/staybee/listings">All Listings</Link>
                        <Link className="nav-link btn btn-outline-warning" to="/staybee/listings/add">Add new listing</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
