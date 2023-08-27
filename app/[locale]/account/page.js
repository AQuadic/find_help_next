 "use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";


export const metadata = {
  title: 'analytica | Account',
}

function page() {


  const [value, setValue] = useState();
  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>Account</h2>
            <ul>
              <li>
                <Link href="/account" className="active">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/account/password">Password</Link>
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
            <h2 className="cart_title2">Personal Information</h2>
            <div className="img_persone">
              <img
                src="/images/icons/person.webp"
                className="person"
                alt="person"
              />
              <button>
                <img src="/images/icons/Camera.svg" alt="Camera" />
              </button>
            </div>
            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputname1 " className="form-label">
                  First Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname1"
                  placeholder="First Name"
                  value="Donia "
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputname3 " className="form-label">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname3"
                  placeholder="Last Name "
                  value="Ahmed Wazery"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                  Phone Number
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder="Phone Number"
                  className="form-control"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputemail " className="form-label">
                  Email Adress{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder="Email"
                  value="doniaahmedelwazery@gmail.com"
                />
              </div>
              <button type="submit" href="" className="next btn_page">
                Save
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
