"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

function SignUp() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">Sign up and start learning</h2>
          <div className="signWith">
            <ul>
              <li>
                <a href="" className="google">
                  <img src="/images/media/google2.svg" alt="google" />
                  <p>Sign Up By Gmail</p>
                </a>
              </li>
              <li>
                <a href="" className="facebook">
                  <img src="/images/media/face2.svg" alt="facebook" />
                  <p>Sign Up By Facebook</p>
                </a>
              </li>
            </ul>
          </div>
          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputFirstName" className="form-label">
                First Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputLast Name" className="form-label">
                Last Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLast Name"
                placeholder="Enter Your Last Names"
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
              <label htmlFor="inputpassword" className="form-label">
                Password{" "}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputpassword"
                placeholder="Enter The Password "
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
            {/*value={selectedOption} onChange={handleOptionChange}*/}
            <div className="col-md-12">
              <label htmlFor="inputCountry" className="form-label">
                Country
              </label>

              <select id="inputCountry" className="form-select">
                <option value="option">Select Your Country</option>
                <option value="option1">EG</option>
                <option value="option2">EUR</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputAge" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAge"
                placeholder="Enter Your Age"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputGender" className="form-label">
                Gender
              </label>
              <select id="inputGender" className="form-select">
                <option value="option">Select Your Gender</option>
                <option value="option1">male</option>
                <option value="option2">female</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputProfession" className="form-label">
                What profession are you learning for?
              </label>
              <select id="inputProfession" className="form-select">
                <option value="option">Select Your Profession</option>
                <option value="option1">Profession1</option>
                <option value="option2">Profession2</option>
              </select>
            </div>
            <a href="courseVideo.html" className="btn_page">
              Sign Up
            </a>

            {/*
           ToDo
           <input type="submit" value="Sign Up" className="btn_page" />
  */}
          </form>
          <div className="haveAccount">
            <p>
              Already have an account?<Link href="/signIn"> Log In</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
