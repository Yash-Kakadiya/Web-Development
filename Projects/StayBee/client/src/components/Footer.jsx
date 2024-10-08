import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-to fs-4 bg-body-tertiary">
            <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 StayBee Pvt. Ltd.</p>

            <ul className="nav col-md-4 justify-content-center fs-3 ">
                <li className="nav-item"  ><Link to="/staybee" className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-square-instagram"></i></Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-square-facebook"></i></Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-square-x-twitter"></i></Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary"><i className="fa-brands fa-linkedin"></i></Link></li>
            </ul>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary">Features</Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                <li className="nav-item"><Link to="/staybee" className="nav-link px-2 text-body-secondary">About</Link></li>
            </ul>
        </footer>
    );
}