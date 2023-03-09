import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isActive, setIsActive] = useState("/");

    function handleClick(link) {
        setIsActive(link);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               
                <Link className="navbar-brand" to="/">Crispy Kitchen</Link>
                
                <div className="d-lg-none">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">   
                            <Link className={isActive === "/" ? "nav-link active" : "nav-link"} onClick={() => handleClick("/")} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive === "/about" ? "nav-link active" : "nav-link"} onClick={() => handleClick("/about")} to="/about">Story</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive === "/menu" ? "nav-link active" : "nav-link"} onClick={() => handleClick("/menu")} to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive === "/news" ? "nav-link active" : "nav-link"} onClick={() => handleClick("/news")} to="/news">Our Updates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive === "/contacts" ? "nav-link active" : "nav-link"} onClick={() => handleClick("/contacts")} to="/contacts">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar