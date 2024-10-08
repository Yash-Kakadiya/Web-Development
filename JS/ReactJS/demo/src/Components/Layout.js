import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/hooks'>Hooks</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/api'>APIs</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/crud'>CRUD</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div><Outlet /></div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>
            </footer>

        </>
    )
}
