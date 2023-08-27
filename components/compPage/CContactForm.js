"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

function CContactForm() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const handleCheckboxChange = (checkboxValue) => {
    if (checkboxValue === selectedCheckbox) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(checkboxValue);
    }
  };
  return (
    <>
      <script src="../phone.js" />
      <section className="bookingForm">
        <div className="container">
          <div className="content">
            <h3 className="f-s">
              Hurry Up and fill in this form to get all <span>knowledge</span>{" "}
              and
              <span>fun</span> we will contact you soon.
            </h3>
            <form className="row g-4 form_page">
              <div className="col-md-12">
                <label htmlFor="inputFirstName" className="form-label">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email Adress{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                  Mobile Number
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
                <label htmlFor="inputPhone " className="form-label">
                  WhatsApp Number
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder="Phone Number"
                  className="form-control"
                  value={value2}
                  onChange={setValue2}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputLanguage" className="form-label">
                  Language of The Course
                </label>
                <select id="inputLanguage" className="form-select">
                  <option>Select The Language</option>
                  <option>EN</option>
                  <option>AR</option>
                </select>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputCategory" className="form-label">
                  Category of The Course
                </label>
                <select id="inputCategory" className="form-select">
                  <option>Select The Category</option>
                  <option>Category1</option>
                  <option>Category2</option>
                </select>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputTitle" className="form-label">
                  Title of The Course
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  placeholder="Enter The Title of the course"
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="inputLocation"
                  className="form-label"
                  style={{ margin: "0" }}
                >
                  Subscription Method
                </label>
                <div className="checkgroub">
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck1"
                      value="checkbox1"
                      checked={selectedCheckbox === "checkbox1"}
                      onChange={() => handleCheckboxChange("checkbox1")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      <div className="method active">
                        <h4>Basic</h4>
                        <h5>
                          25 <span>EGP</span>
                        </h5>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>3 Ads</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck1"
                      value="checkbox2"
                      checked={selectedCheckbox === "checkbox2"}
                      onChange={() => handleCheckboxChange("checkbox2")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      <div className="method">
                        <h4>Professional</h4>
                        <h5>
                          250 <span>EGP</span>
                        </h5>
                        <p className="sall">
                          instead of
                          <span>350 EGP </span>
                        </p>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>5 Ads</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck1"
                      value="checkbox3"
                      checked={selectedCheckbox === "checkbox3"}
                      onChange={() => handleCheckboxChange("checkbox3")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      <div className="method active">
                        <h4>Basic</h4>
                        <h5>
                          25 <span>EGP</span>
                        </h5>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 Sessions</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>15 Ads</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                    style={{ color: "#313131", fontFamily: "DM Sans3" }}
                  >
                    This is your agreement that you bear the responsibility for
                    the video that will be downloaded on your platform
                  </label>
                </div>
              </div>
              <input type="submit" value="Apply" className="btn_page" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CContactForm;
