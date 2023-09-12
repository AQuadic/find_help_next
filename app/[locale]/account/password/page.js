"use client";
import Link from "next/link";
import React from "react";



function page() {
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>

            <li className="breadcrumb-item" aria-current="page">
              Account
            </li>
            <li className="breadcrumb-item" aria-current="page">
              My Profile
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Change Password
            </li>
          </ol>
        </nav>
      </div>

      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account" className="active">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/account/myServices">My services</Link>
              </li>
              <li>
                <Link href="/account/prmoted">Promotion</Link>
              </li>
              <li>
                <Link href="/account/myOrders">My Orders</Link>
              </li>
              <li>
                <Link href="/account/addressess">Addresses</Link>
              </li>
              <li>
                <button >Log out</button>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2" style={{ marginBottom: "8px" }}>
              Change Password
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                color: "#747474",
                marginBottom: "20px",
              }}
            >
              You can enter your new password.
            </p>

            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputpass1 " className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass1"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass2 " className="form-label">
                  New Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="inputpass2"
                  placeholder="Enter a new password "
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass3 " className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass3"
                  placeholder="Enter a new password again"
                />
              </div>

              <button type="submit" href="" className="next btn_page">
                Change
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
