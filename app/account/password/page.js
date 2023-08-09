import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>Account</h2>
            <ul>
              <li>
                <Link href="/account">My Profile</Link>
              </li>
              <li>
                <Link href="/account/password" className="active">
                  Password
                </Link>
              </li>
              <li>
                <Link href="/account/activeSessions">Linked Accounts</Link>
              </li>
              <li>
                <a href="">Log out</a>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">Change Password</h2>
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

              <button type="submit" href="" className=" btn_page">
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
