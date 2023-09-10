
"use client";
import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

export const metadata = {
  title: 'analytica | Sign IN',
}

function page() {
  const [value, setValue] = useState();
  const [phone_country, setPhone_country] = useState();
  return (
   <>
<section className="page_log">
      <div className="container">
        <div className="box_log">
          <h2>Hello,</h2>
          <p className="dec">
            Please enter your mobile number to continue the process
          </p>
          <form className="row g-3 form_page">
            <div className="col-md-12">
              <label for="inputPhone " className="form-label">Mobile Number </label>
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
          <ul className="send_sms">
            <li className="sms">
              <a href="">
                <img src="/images/sms.svg" alt="sms" />
                <p>Continue Using The SMS</p>
              </a>
            </li>
            <li className="whatsApp">
              <a href="">
                <img src="/images/whatsapp.svg" alt="WhatsApp" />
                <p>Continue Using WhatsApp</p>
              </a>
            </li>
          </ul>
          <div className="line">
            <span></span>
            <p>Or continue with</p>
            <span></span>
          </div>
          <div className="logApp">
            <ul>
              <li>
                <a href="#">
                  <img src="/images/facebook3.webp" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/twitter3.webp" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/google3.webp" alt="google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="endPage_login">
      <p>© Find Help, 2019-2022 Made by</p>
      <a href="#"> AQuadic Solution Company</a>
    </section>
   </>
  )
}

export default page