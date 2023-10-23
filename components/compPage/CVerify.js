"use client";

import api from "@/app/[locale]/api";
import { SMS, navState } from "@/atoms";
import { authenti } from "@/utils/firebase";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import OTPInput from "react-otp-input";
import { useRecoilState } from "recoil";

function CVerify({ params }) {

  const router = useRouter();
  const [SMS1, setSMS] = useRecoilState(SMS);
console.log(SMS1.verificationId);
  const [phone, setPhone] = useState(Cookies.get('phone'));
  const [phone_country, setPhone_country] = useState(Cookies.get('phone_country'));
  const [otp, setOtp] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [errorcode, setErrorCode] = useState("");
  const [Loading, setLoading] = useState(false);

  const t = useTranslations("Sign");
  const clearOtp = () => {
    setOtp("");
  };
  const handelOTP = () => {
    const time = document.getElementById("counter");
    const resend = document.getElementById("resend");
    const starttime = 2;
    let secound = starttime * 60;
    const myTimeout = setInterval(udtime, 1000);
    /*ss.addEventListener('click' , function (e) {
     e.preventDefault();
     const myTimeout = setInterval(udtime, 1000);
  })*/
    function udtime() {
      const min = Math.floor(secound / 60);
      let sec = secound % 60;
      sec = sec < 10 ? "0" + sec : sec;
      if (min === 0 && sec == "00") {
        clearInterval(myTimeout);
        resend.disabled = false;
        resend.classList.add("resend");
        time.classList.add("red");
      } else {
        resend.classList.remove("resend");
        time.classList.remove("red");
      }

      time.innerHTML = `0${min} : ${sec} s`;
      secound--;
    }
  };
  useEffect(() => {
    handelOTP();
  }, []);

  const handelVerify = () => {
    setLoading(true)
    setErrorCode("");
    const po = api
      .post(
        "api/v1/users/auth/verify",
        {
          phone: phone,
          phone_country: phone_country,
          code: otp,
          type: "verify",
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
    setLoading(false)

        console.log(res);
        if (res.status === 200) {
          setIsUser(true);
          Cookies.set("UserID", res.data.user.id);
          if (res.data.user.name === "FindHelp User") {
            router.push("/created");
          } else {
            router.push("/");
          }
        }
      })
      .catch((res) => {
    setLoading(false)

        alert('An error occurred: ' + res.message);
        res.response.data.message
          ? setErrorCode(res.response.data.message)
          : setErrorCode("");
        console.log(res);
      });
  };
  const handelResend = () => {
    setLoading(true)
    
    const po = api
      .post(
        "api/v1/users/auth/resend",
        {
          "phone": phone,
          "phone_country":phone_country,
        },
        {
          headers: {
            "Authorization": `Bearer ${Cookies.get('token')}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
    setLoading(false)

       console.log(res);
       Cookies.set("phone",Cookies.get('phone'));
       Cookies.set("phone_country",Cookies.get("phone_country"));
      })
      .catch((res) => {
    setLoading(false)

        alert('An error occurred: ' + res.message);
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
    signInWithPhoneNumber(authenti, Cookies.get('phone'), appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
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

  useEffect(() => {
    if(otp.split("").length===6){
      SMS1.verificationId?handelVerifySMS():handelVerify()
      
    }
  }, [otp]);
  const handelVerify2 = (token) => {
    setLoading(true)
    setErrorCode("");
    const po = api
      .post(
        "api/v1/users/auth/firebase",
        {
          "provider": "FIREBASE",
           "access_token": token
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
    setLoading(false)

        console.log(res);
        if (res.status === 200) {
          setIsUser(true);
          Cookies.set("token", res.data.token);
          if (res.data.user.name === "go he to our") {
            router.push("/created");
          } else {
            router.push("/");
          }
        }
       
      })
      .catch((res) => {
    setLoading(false)

        console.log(res);
      });
  };
  const handelVerifySMS =()=>{
    SMS1.confirm(otp).then((result)=>{
      console.log(result);
      handelVerify2(result.user.accessToken)
    }).catch((err)=>{
      console.log(err);
    })
      }
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
            <h3>{t("typeOTP")}</h3>
            <p className="dec">
            {t("verification")}
            </p>
            <form action="" className="verify">
              <div className="passcode-wrapper">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  shouldAutoFocus
                  numInputs={6}
                  renderInput={(props) => <input {...props} width="90px" />}
                />
              </div>
              {errorcode && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  {errorcode}
                </p>
              )}
              <p id="counter" className="counter red">
                02:00 s
              </p>
              <h4>
              {t("receive")}
                <input type="submit" value={t("resend")} id="resend" className="resend" disabled   onClick={(e) => {
                  e.preventDefault();
                  clearOtp()
                  SMS1.verificationId?handelSMS():handelResend();
                  
                }}/>
                  
              
              </h4>
              <input
                type="submit"
                id="ss"
                className="btn_page"
                value= {t("vrefiy")}
                onClick={(e) => {
                  e.preventDefault();
                  SMS1.verificationId?handelVerifySMS():handelVerify()
                 
                }}
              />
              
            </form>
            <Link href={'/signIn'} className="change_num">
            {t("changeMobile")}
            </Link>
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

export default CVerify;
