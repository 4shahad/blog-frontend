import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BLOGS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active"  to="/">Home</Link>
        <Link className="nav-link" to="/about">about</Link>
        <Link className="nav-link" to="/contact">contact</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar