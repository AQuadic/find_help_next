"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from 'next/navigation'
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";
import { useTranslations } from "next-intl";



function CSignIn(props) {
  const router = useRouter()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations('Sign');
console.log(t('title'));
  console.log(props);
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
          <h2 className="title_sign">{t('in')}</h2>
          <div className="signWith">
            <ul>
              <li>
                <a href="" className="google">
                  <img src="/images/media/google2.svg" alt="google" />
                  <p>{t('gmail')}</p>
                </a>
              </li>
              <li>
                <a href="" className="facebook">
                  <img src="/images/media/face2.svg" alt="facebook" />
                  <p>{t('facebook')}</p>
                </a>
              </li>
            </ul>
          </div>
          <form className="row g-4 form_page">
           
            <TextInput
      placeholder={t('enterEmail')}
      label={t('email')}
      type="email"
      onChange={(e)=>setemail(e.target.value)}
    />

            <div className="col-md-12">
            <PasswordInput
            variant="unstyled"
      placeholder={t('enterPassword')}
      label={t('password')}
      onChange={(e)=>setpassword(e.target.value)}
    />
              
            
              <Link href="/forgetPassword" className="forget">
              {t('forget2')}
              </Link>
            </div>

            <input type="submit" onClick={(e)=>{e.preventDefault(); handellogin()}} value="Sign In" className="btn_page" />
          </form>
          <div className="haveAccount">
            <p>
            {t('don’t')}<Link href="/signUp"> {t('signUp')}</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSignIn;
