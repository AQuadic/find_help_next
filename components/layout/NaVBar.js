"use client";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="phone_nav ac_nav">
          <div className="dropdown" style={{position:"relative",display:"none" }}>
            <h4
              className="dropdown-toggle nav_btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Donia,
            </h4>

            <ul className="dropdown-menu myAcc">
              <li>
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="myServices.html">
                  My Services
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Prmoted.html">
                  Promotion
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="myOrders.html">
                  My Orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="profile_Addressess.html">
                  Addresses
                </a>
              </li>
            </ul>
          </div>
          <Link href="/signIn" className="nav_btn">
            <img src="/images/login.svg" className="img_login" alt="login" />
            <p>Login</p>
          </Link>
          <button className="search btnsearch">
            <img src="/images/search.svg" alt="search" />
          </button>
        </div>

        <div className="logo">
          <Link className="navbar-brand" href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
          <div className="collapse  col-dec" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/images/categorization.svg" alt="categories" />
                  Categories
                </a>
                <ul className="dropdown-menu row">
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Repairs</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Cleaning Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Salon</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Home Exterior</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Home Maintenance</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Fashion</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Construction Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Medicine</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Engineering</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Travel and Tourism</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Fun</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="right_nav ac_nav" id="">
          <button id="search" className="btnsearch">
            <img src="/images/search.svg" className="search" alt="search" />
          </button>
          <a href="#">
            {" "}
            <img src="/images/fav.svg" className="fav" alt="fav" />
          </a>
          <Link href="/add_Services" className="nav_btn">
            <img src="/images/add.svg" className="add" alt="Add_Services" />
            <p>Add Services</p>
          </Link>
          <div className="dropdown" style={{position:"relative"}}>
            <h4
              className="dropdown-toggle nav_btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Donia,
            </h4>

            <ul className="dropdown-menu myAcc">
              <li>
                <Link className="dropdown-item" href="/account">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/myServices">
                  My Services
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/prmoted">
                  Promotion
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/myOrders">
                  My Orders
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/addressess">
                  Addresses
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/signIn"
            className="nav_btn login_btn"
            style={{display: "none"}}
          >
            <img src="/images/login.svg" className="img_login" alt="login" />
            <p>Login</p>
          </Link>
          <button className="lang">
            <img src="/images/lang.webp" className="lang" alt="lang" />
            <p>En</p>
          </button>
        </div>

        <div className="collapse col-phone" id="navbarSupportedContent">
          <div className="right_nav ac_nav" id="">
            <a href="#">
              <img src="/images/fav.svg" className="fav" alt="fav" />
            </a>
            <Link href="/add_Services" className="nav_btn">
              <img src="/images/add.svg" className="add" alt="Add_Services" />
              <p>Add Services</p>
            </Link>
            <button className="lang">
              <img src="/images/lang.webp" className="lang" alt="lang" />
              <p>En</p>
            </button>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Repairs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cleaning Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Salon
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Exterior
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Maintenance
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fashion
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <form action="" id="form_nav" className="input_srearch">
        <input type="search" placeholder="Search For ......." />
      </form>
    </nav>
  );
}

export default NavBar;
  
