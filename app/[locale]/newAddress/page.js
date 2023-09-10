"use client";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

function page() {
  const [value, setValue] = useState();
  const [phone_country, setPhone_country] = useState();
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>

            <li className="breadcrumb-item" aria-current="page">
              Categories
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Repairs
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Sub category
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Check Out
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Addresses
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Add New Address
            </li>
          </ol>
        </nav>
      </div>

      <section className="checkOut container m90">
        <div className="part1">
          <h2 className="headtitle">Addresses</h2>
          <div className="box">
            <form className="row g-3 form_page">
              <div className="map col-md-12">
                <label className="form-label">Select Delivery Location</label>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13644.980469861162!2d29.985604349999996!3d31.2416371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c52fadf4220f%3A0x7d08dceaad4557bd!2sSan%20Stefano%20Grand%20Plaza!5e0!3m2!1sen!2seg!4v1678613910844!5m2!1sen!2seg"
                  width="600"
                  height="450"
                  style={{ border: "0px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-6">
                <label for="inputName " className="form-label">
                  First Name{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="inputNametext"
                  placeholder="your first name"
                />
              </div>
              <div className="col-md-6">
                <label for="inputLast " className="form-label">
                  Last Name{" "}
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="inputLasttext"
                  placeholder="your Last name"
                />
              </div>
              <div className="col-md-12">
                <label for="inputCity" className="form-label">
                  Country{" "}
                </label>
                <select id="inputCity" className="form-select">
                  <option selected>Select Your Country</option>
                  <option>Egypt</option>
                  <option>England</option>
                </select>
              </div>
              <div className="col-md-12">
                <label for="inputCity" className="form-label">
                  City{" "}
                </label>
                <select id="inputCity" className="form-select">
                  <option selected>Select Your City</option>
                  <option>alex</option>
                  <option>cairo</option>
                </select>
              </div>
              <div className="col-md-12">
                <label for="inputAddress" className="form-label">
                  Address{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Type Your Address"
                />
              </div>

              <div className="col-md-6">
                <label for="inputBuilding " className="form-label">
                  Building No.
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="inputBuildingNumber"
                  placeholder="Number"
                />
              </div>
              <div className="col-md-6">
                <label for="inputBuilding Name " className="form-label">
                  Building Name
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="inputBuilding NameNumber"
                  placeholder="Number"
                />
              </div>
              <div className="col-md-6">
                <label for="inputFloor " className="form-label">
                  Floor No.{" "}
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="inputFloorNumber"
                  placeholder="Number"
                />
              </div>
              <div className="col-md-6">
                <label for="inputAppointment " className="form-label">
                  Appointment No.
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="inputAppointmentNumber"
                  placeholder="Number"
                />
              </div>

              <div className="col-md-12">
                <label for="inputPhone " className="form-label">
                  Mobile Number{" "}
                </label>

                <PhoneInput
                defaultCountry="EG"
                placeholder={"Your Mobile Number"}
                className="form-control"
                value={value}
                onCountryChange={(e)=>setPhone_country(e)}
                onChange={setValue}
              />
              </div>
            </form>
            <input
              type="submit"
              value="Add Address"
              className="btn_page btn_Address"
            />
          </div>
        </div>
        <div className="part2">
          <h2 className="headtitle">Booking Summary</h2>
          <div className="box">
            <ul>
              <li>
                <h3>Provider</h3>
                <h4>Muhammed Ahmed</h4>
              </li>
              <li>
                <h3>Service Type</h3>
                <h4>Repair car’s Wheels</h4>
              </li>
              <li className="amount">
                <h3>Amount</h3>
                <h4>2500 EGP</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="carts checkout container">
        <div className="content"></div>
      </section>
    </>
  );
}

export default page;
