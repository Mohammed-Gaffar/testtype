import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";

export interface HeaderProps {
  prop?: string;
}

export function Header(props : HeaderProps) {
  return (
    <div className={"Header"}>
      <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand fw-bold" href="#">
        MyApp
      </a>



      <button   
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="mainMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={'/HomePage'} className="nav-link">Home Page </Link>
          </li>

          <li className="nav-item">
            <Link to={'/ContactUs'} className="nav-link"> Contact Us </Link>
          </li>

          <li className="nav-item">
          <Link  to={'/Profile'} className="nav-link"> Profile </Link>
          </li>

          <li className="nav-item">
          <Link  to={'/Products'} className="nav-link"> Products </Link>
          </li>

          <li className="nav-item">
          <Link  to={'/ProductsCategories'} className="nav-link"> Products Categories </Link>
          </li>

        </ul>
      </div>
    </nav>
      </>
    </div>
  );
}
