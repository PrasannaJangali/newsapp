import React from 'react'

import {
  Link
} from 'react-router-dom';

const Navbar = () => {
  const style={
    position:'sticky',
    top:'0px',
    left:'0px',
    zIndex:1,
  }
  return (
    <div style={style}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" >Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sciences">Science</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;