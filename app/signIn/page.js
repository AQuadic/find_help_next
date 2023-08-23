"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from 'next/navigation'
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";


function SignIn() {
  const router = useRouter()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const handellogin = () => {
    
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setIsUser(true)
        Cookies.set("token",res.data.token);
       console.log(res);
       router.push('/')
      })
      .catch((res) => {
      /*  setLoading(false);
        res.response.data.email
          ? setErroremail(res.response.data.email[0])
          : setErroremail("");
        res.response.data.password
          ? setErrorpassword(res.response.data.password[0])
          : setErrorpassword("");
        res.response.data.error
          ? setError(res.response.data.error)
          : setError("");*/
          console.log(res);
      });
  };
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">Log in and start learning</h2>
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
           
            <TextInput
      placeholder="Enter Your Email"
      label="Email Adress"
      type="email"
      onChange={(e)=>setemail(e.target.value)}
    />

            <div className="col-md-12">
            <PasswordInput
            variant="unstyled"
      placeholder="Enter The Password "
      label="Password"
      onChange={(e)=>setpassword(e.target.value)}
    />
              
            
              <Link href="/forgetPassword" className="forget">
                Forget password?
              </Link>
            </div>

            <input type="submit" onClick={(e)=>{e.preventDefault(); handellogin()}} value="Sign In" className="btn_page" />
          </form>
          <div className="haveAccount">
            <p>
              Don’t have an account?<Link href="/signUp"> Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
