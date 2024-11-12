import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark sticky-top navbar-expand-lg border-bottom border-black" style={{ backgroundColor: "rgb(73 75 77 / 68%)", }}>
                <div className="container-fluid" >
                    <Link to="/" className="navbar-brand" href="/"><img src="https://abes.ac.in/assets/frontend/img/logo-9.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blocks
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item " to="/kc/rooms">Kalpana Chawla</Link></li>
                                    <li><Link className="dropdown-item " to="/ab/rooms">Aryabhatta</Link></li>
                                    <li><Link className="dropdown-item " to="/bb/rooms">Bhabha</Link></li>
                                    <li><Link className="dropdown-item " to="/rj/rooms">Ramanujan</Link></li>
                                    <li><Link className="dropdown-item " to="/rm/rooms">Raman</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
