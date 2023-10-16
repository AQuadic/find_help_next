"use client";


import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

import { TailSpin } from "react-loader-spinner";

import CVerify from "@/components/compPage/CVerify";
import OTPInput from "react-otp-input";
import { useRecoilState } from "recoil";
import { SMS } from "@/atoms";
import { authenti } from "@/utils/firebase";

function page() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [phone_country, setPhone_country] = useState("EG");
  const [Errorphone, setErrorPhone] = useState("");
  const t = useTranslations("Sign");
  const [Loading, setLoading] = useState(false);
  const [SMS1, setSMS] = useRecoilState(SMS);
console.log(SMS1);

  const handellogin = () => {
    setLoading(true)
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/auth/login",
        {
          phone: phone,
          phone_country: phone_country,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSMS("")
        Cookies.set("token", res.data.token);
        Cookies.set("phone", phone);
        Cookies.set("phone_country", phone_country);
        router.push("/verify");
    setLoading(false)

      })
      .catch((res) => {
    setLoading(false)

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  };



const generateRe = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(authenti, 'recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
    }
  });
};
const handelSMS = (e) => {
  e.preventDefault();
  generateRe();
  let appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(authenti, phone, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    setUser(confirmationResult)
    Cookies.set("phone", phone);
    window.confirmationResult = confirmationResult;
    console.log(confirmationResult);
    setSMS(confirmationResult)
    router.push("/verify");
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    // ...
    console.log(error);
  });
};


  return (
    <>
    
<div className="load" style={{ display: Loading ? "flex" : "none" }}>
          <TailSpin
            height={120}
            width={120}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={Loading}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={1}
            strokeWidthSecondary={1}
          />
        </div>

      <section className="page_log">
        <div className="container">
          <div className="box_log">
            <h2>{t("hello")}</h2>
            <p className="dec">{t("please")}</p>
            <form className="row g-3 form_page" onSubmit={(e)=>{e.preventDefault(),handellogin()}}>
              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                  {t("mobile")}
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder={t("enterNumber")}
                  className="form-control"
                  value={phone}
                  onCountryChange={(e) => setPhone_country(e)}
                  onChange={setPhone}
                />
                {Errorphone && (
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      fontSize: "14px",
                      marginTop: "4px",
                    }}
                  >
                    {Errorphone}
                  </p>
                )}
              </div>
            </form>
            <ul className="send_sms">
              <li className="sms">
                <button onClick={handelSMS}>
                  <img src="/images/sms.svg" alt="sms" />
                  <p>{t("continueSMS")}</p>
                </button>
              </li>
              
              <li className="whatsApp">
                <button type='submit' onClick={() => handellogin()}>
                  <img src="/images/whatsapp.svg" alt="WhatsApp" />
                  <p>{t("continueWhatsApp")}</p>
                </button>
              </li>
            </ul>
            <div id="recaptcha">

            </div>
            <div className="line">
              <span></span>
              <p>{t("OrContinue")}</p>
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
        <div id="recaptcha-container"></div>
      </section>

      <section className="endPage_login">
        <p>© Find Help, 2019-2022 Made by</p>
        <a href="#"> AQuadic Solution Company</a>
      </section>
    </>
  );
}

export default page;
