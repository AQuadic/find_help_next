"use client";

import { navState } from "@/atoms";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useRecoilState } from "recoil";

function CVerify({ params }) {
  const router = useRouter();

  const [phone, setPhone] = useState(Cookies.get('phone'));
  const [phone_country, setPhone_country] = useState(Cookies.get('phone_country'));
  const [otp, setOtp] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [errorcode, setErrorCode] = useState("");

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
    setErrorCode("");
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/auth/verify",
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
        console.log(res);
        if (res.status === 200) {
          setIsUser(true);
          if (res.data.user.name === "FindHelp User") {
            router.push("/created");
          } else {
            router.push("/");
          }
        }
      })
      .catch((res) => {
        res.response.data.message
          ? setErrorCode(res.response.data.message)
          : setErrorCode("");
        console.log(res);
      });
  };
  const handelResend = () => {
    
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/auth/resend",
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
       console.log(res);
       Cookies.set("phone",Cookies.get('phone'));
       Cookies.set("phone_country",Cookies.get("phone_country"));
      })
      .catch((res) => {
          console.log(res);
      });
  };
  return (
    <>
      <section className="page_log">
        <div className="container">
          <div className="box_log">
            <h3>Type The OTP</h3>
            <p className="dec">
              Please enter the verification code we sent to your mobile number
            </p>
            <form action="" className="verify">
              <div className="passcode-wrapper">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
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
                If you don’t receive a code!
                <input type="submit" value={"Resend"} id="resend" className="resend" disabled   onClick={(e) => {
                  e.preventDefault();
                  clearOtp()
                  handelResend();
                }}/>
                  
              
              </h4>
              <input
                type="submit"
                id="ss"
                className="btn_page"
                value="Verify"
                onClick={(e) => {
                  e.preventDefault();
                  handelVerify();
                }}
              />
              
            </form>
            <Link href={'/signIn'} className="change_num">
              change Mobile Number
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
