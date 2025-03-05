import React from 'react';
import { Link } from 'react-router-dom';

const Asidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">YashLTE </span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../dist/img/yash.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to={'/dashboard'} className="d-block">
              Yash Admin
            </Link>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Starter Pages
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={'/country'} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Country List</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/state'} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>State List</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/city'} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>City List</p>
                  </Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Asidebar;
