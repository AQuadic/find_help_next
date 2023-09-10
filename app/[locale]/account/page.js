 "use client";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";



export const metadata = {
  title: 'analytica | Account',
}

function page() {
  const [value, setValue] = useState();
  const [phone_country, setPhone_country] = useState();

  return (
    <>
    <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">My Profile</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><a href="profile.html" className="active">My Profile</a></li>
            <li><a href="myServices.html">My services</a></li>
            <li><a href="Prmoted.html">Promotion</a></li>
            <li><a href="myOrders.html">My Orders</a></li>
            <li><a href="profile_Addressess.html">Addresses</a></li>
            <li><a href="">Log out</a></li>
          </ul>
        </div>
        <div className="Profile">
          <h2 className="cart_title2">Personal Details</h2>
          <div className="img_persone">
            <img src="/images/person.webp" className="person" alt="person" />
            <button>
              <img src="/images/Camera.svg" alt="Camera" />
            </button>
          </div>
          <form className="row g-3 form_page">
            <div className="col-md-12">
              <label for="inputname4 " className="form-label">Full Name </label>
              <input
                type="text"
                className="form-control"
                id="inputname4"
                placeholder="Full Name"
                value="Donia El Wazery"
              />
            </div>
            <div className="col-md-12 tel_num">
              <label for="inputtel " className="form-label">Phone Number </label>
             
              <PhoneInput
                defaultCountry="EG"
                placeholder={"Your Mobile Number"}
                className="form-control"
                value={value}
                onCountryChange={(e)=>setPhone_country(e)}
                onChange={setValue}
              />
            </div>
            <div className="col-md-12">
              <label for="inputemail " className="form-label">Email Adress </label>
              <input
                type="email"
                className="form-control"
                id="inputemail"
                placeholder="Email"
                value="doniaahmedelwazery@gmail.com"
              />
            </div>
            <a href="changePassword.html" className="change">Change Password</a>
            <button type="submit" href="" className="next btn_page">Save</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default page;
