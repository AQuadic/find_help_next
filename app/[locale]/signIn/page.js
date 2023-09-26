"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

function page() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [phone_country, setPhone_country] = useState("EG");
  const [Errorphone, setErrorPhone] = useState("");
  const t = useTranslations("Sign");
  const handellogin = () => {
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
        Cookies.set("token", res.data.token);
        Cookies.set("phone", phone);
        Cookies.set("phone_country", phone_country);
        router.push("/verify");
      })
      .catch((res) => {
        alert("An error occurred: " + res.message);
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  };
  return (
    <>
      <section className="page_log">
        <div className="container">
          <div className="box_log">
            <h2>{t("hello")}</h2>
            <p className="dec">
            {t("please")}
            </p>
            <form className="row g-3 form_page">
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
                <button>
                  <img src="/images/sms.svg" alt="sms" />
                  <p>{t("continueSMS")}</p>
                </button>
              </li>
              <li className="whatsApp">
                <button onClick={() => handellogin()}>
                  <img src="/images/whatsapp.svg" alt="WhatsApp" />
                  <p>{t("continueWhatsApp")}</p>
                </button>
              </li>
            </ul>
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
      </section>

      <section className="endPage_login">
        <p>© Find Help, 2019-2022 Made by</p>
        <a href="#"> AQuadic Solution Company</a>
      </section>
    </>
  );
}

export default page;
