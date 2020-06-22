import React from 'react'
import './navbar.css'


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-space-between align-items-lg-center" onmouseover={"whiteBackground(this)"}>
          
            <a className="navbar-brand">
              Grabengo
            </a>
          
          <button type="button" className="btn btn-success ml-auto mr-2 order-lg-3">
            Sign up
          </button>
          <button type="button" className="btn btn-dark mr-2 order-lg-3">
            Sign in
          </button>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className=""></span> */}
            <i className="hamburger fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse p-3 p-lg-0 mt-2 mt-lg-0" id="navbarSupportedContent">
            <form className="form-block d-flex justify-content-center align-items-center my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Recent Lists<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Delivery Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pickup Services
                </a>
              </li>
            </ul>
          </div>
        </nav>
)

export default Navbar