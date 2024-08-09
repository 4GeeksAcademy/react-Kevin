import React from "react";

export function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
              <div className="text-light">
                  <h2>Start Bootstrap</h2>
              </div>
              <div className="d-flex">
                  <a className="nav-link text-light me-3" href="#">Home</a>
                  <a className="nav-link text-light me-3" href="#">About</a>
                  <a className="nav-link text-light me-3" href="#">Services</a>
                  <a className="nav-link text-light me-3" href="#">Contact</a>
              </div>
          </div>
      </div>
  </nav>
    )
}

export default Navbar;

