"use client"
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

function Verify() {
  const [otp, setOtp] = useState("");
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
  return (
    <>
      <script src="../js/otp.js" />
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">Verify Your Email Address</h2>
          <p className="p_sign">
            Please enter the verification code we sent to your Email Address
          </p>
          <form action="">
            <div className="passcode-wrapper">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} width="90px" />}
              />
            </div>

            <p id="counter" className="counter red">
              02:00 s
            </p>
            <h4>
              If you don’t receive a code!
              <button id="resend" disabled onClick={clearOtp}>
                Resend
              </button>
            </h4>
            <input
              type="submit"
              id="ss"
              disabled={otp.length < 4}
              className="btn_page"
              value="Verify"
            />
          </form>
          {/* <button  type="button" disabled={otp.trim() === ''} onClick={clearOtp}>
                Clear
  </button>*/}
        </div>
      </section>
    </>
  );
}

export default Verify;
