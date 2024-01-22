// Importing react to make it all work
import React from "react";

function Nav() {
  return (
    <div className="card-header">
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}
