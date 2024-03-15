"use client";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { TailSpin } from "react-loader-spinner";
import { useRecoilState } from "recoil";
import { SMS, navState } from "@/atoms";
import { authenti } from "@/utils/firebase";
import api from "../api";
import { useSession, signIn } from "next-auth/react";

function page() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [phone_country, setPhone_country] = useState("EG");
  const [Errorphone, setErrorPhone] = useState("");
  const t = useTranslations("Sign");
  const [Loading, setLoading] = useState(false);
  const [SMS1, setSMS] = useRecoilState(SMS);
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [otpCode, setOtpCode] = useState("");


  const handellogin = () => {
    setLoading(true);
    const po = api
      .post(
        "api/v1/users/auth/login",
        {
          verify_type :'whatsapp_receive',
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
        setSMS("");
        Cookies.set("token", res.data.token);
        Cookies.set("phone", phone);
        Cookies.set("phone_country", phone_country);
        router.push("/verify");
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  };
  const handelloginSMS = () => {
    setLoading(true);
    const po = api
      .post(
        "api/v1/users/auth/login",
        {
          verify_type :'sms',
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
        setSMS("");
        Cookies.set("token", res.data.token);
        Cookies.set("phone", phone);
        Cookies.set("phone_country", phone_country);
        router.push("/verify");
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  };
  const handelloginSend = () => {
    setLoading(true);
    const po = api
      .post(
        "api/v1/users/auth/login",
        {
          verify_type :'whatsapp_send',
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
        console.log(res.data.otp_callback.message);
        setOtpCode(res.data.otp_callback.message)
        setSMS("");
        startInterval()
        setLoading(false);

      })
      .catch((res) => {
        setLoading(false);

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  };
  function requestData() {
    // Your API request logic goes here
    console.log('Making API request...');
    setLoading(true);
    const po = api
      .post(
        "api/v1/users/auth/otp/check",
        {
          verify_type :'reference',
          phone: phone,
          phone_country: phone_country,
          reference:otpCode
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
        setSMS("");
        startInterval(res.data.otp_callback.message)
        setLoading(false);

      })
      .catch((res) => {
        setLoading(false);

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        res.response.data.message
          ? setErrorPhone(res.response.data.message)
          : setErrorPhone("");
        console.log(res);
      });
  }
  
 
    const [intervalId, setIntervalId] = useState(null);
  
    const startInterval = () => {
      // Start the interval when the button is clicked
      const id = setInterval(requestData, 2000);
  
      // Stop the interval after 50 minutes (3000000 milliseconds)
      setTimeout(() => {
        clearInterval(id);
        console.log('Interval stopped after 50 minutes.');
      }, 3000000);
    };
  
  const generateRe = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      authenti,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
  };
  const handelSMS = (e) => {
    e.preventDefault();
    generateRe();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authenti, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        Cookies.set("phone", phone);
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        setSMS(confirmationResult);
        router.push("/verify");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };
  const { data } = useSession();
  console.log(data);
  const handelloginGoogleFacebookTwitter = (token) => {
    const po = api
      .post(
        "api/v1/users/auth/social",
        {
          provider: Cookies.get("typeLogin"),
          access_token: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
           setIsUser(true);
           Cookies.set("token", res.data.token);
           Cookies.set("UserID", res.data.user.id);

            router.push("/");
            
        }
        
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  if (data?.accessToken) {
    console.log("hhhhhhhhhhhhhhh");
    handelloginGoogleFacebookTwitter(data.accessToken);
  }
  const handleLogin = async () => {
    Cookies.set("typeLogin", "google");
    const response = await signIn("google", { redirect: false });
    if (response.ok) router.push("/");
    else console.log("ssssssssssssssssssssssssss");
  };
  const handleLoginFacebook = async () => {
    Cookies.set("typeLogin", "facebook");

    const response = await signIn("facebook", { redirect: false });
    if (response.ok) router.push("/");
    else console.log("ssssssssssssssssssssssssss");
  };
  const handleLoginTwitter = async () => {
    Cookies.set("typeLogin", "twitter");

    const response = await signIn("twitter", { redirect: false });
    if (response.ok) router.push("/");
    else console.log("ssssssssssssssssssssssssss");
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
            <form
              className="row g-3 form_page"
              onSubmit={(e) => {
                e.preventDefault(), handellogin();
              }}
            >
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
                <button onClick={handelloginSMS}>
                  <img src="/images/sms.svg" alt="sms" />
                  <p>{t("continueSMS")}</p>
                </button>
              </li>

              <li className="whatsApp">
                <button type="submit" onClick={() => handellogin()}>
                  <img src="/images/whatsapp.svg" alt="WhatsApp" />
                  <p>{t("continueWhatsApp")}</p>
                </button>
              </li>
              <li className="whatsApp">
                <button type="submit" onClick={() => handelloginSend()}>
                  <img src="/images/whatsapp.svg" alt="WhatsApp" />
                  <p>{t("continueWhatsApp")} send</p>
                </button>
              </li>
            </ul>
            <div id="recaptcha"></div>
            <div className="line">
              <span></span>
              <p>{t("OrContinue")}</p>
              <span></span>
            </div>
            <div className="logApp">
              <ul>
                <li>
                  <button
                    onClick={() => {
                      handleLoginFacebook();
                    }}
                  >
                    <img src="/images/facebook3.webp" alt="facebook" />
                  </button>
                </li>
                <li>
                  <button onClick={()=>{handleLoginTwitter()}}>
                    <img src="/images/twitter3.webp" alt="twitter" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    <img src="/images/google3.webp" alt="google" />
                  </button>
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
