"use client";

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { useState } from 'react'

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { authenti } from '@/utils/firebase';



export default function Home() {
  const [phone,setPhone]=  useState()
  const [User,setUser]=  useState(null)
  const [OTP,setOTP]=  useState("")
  const t = useTranslations("Sign");
  const router = useRouter();

  const handellogin = () => {
    
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/auth/login",
        {
          phone: "phone",
          phone_country: "phone_country",
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

        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
       
        console.log(res);
      });
  };


  const generateRe = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(authenti, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    });
  };
  const handelotp = (e) => {
    e.preventDefault();
    generateRe();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authenti, phone, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      setUser(confirmationResult)
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);

      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
    });
  };
  const handelVerify =()=>{
User.confirm(OTP).then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
})
  }
  return (
    
     <>
 {t("mobile")}
      <p>Phone</p>
     <input type="text" placeholder='phone' onChange={(e)=>{setPhone(e.target.value)}} />
     <button onClick={handelotp}>sent otp</button>
     <p>OTP</p>
     <input type="text" placeholder='OTP'  onChange={(e)=>{setOTP(e.target.value)}} />
     <button onClick={()=>{handelVerify()}}>verify</button>
     <div id='recaptcha-container'></div>
     </>
    
  )
}
