"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios";



function CSignup() {
  const t = useTranslations('Sign');
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [value, setValue] = useState();
  const [phone_country, setPhone_country] = useState();
  const [value2, setValue2] = useState();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
 
console.log(value);

  const handelSignUP = () => {
    
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/signup",
        {
          "name": name,
           email: email,
          "password": password,
          "phone": value,
          "phone_country": 'EG',
          "parent_phone":value,
    "nid": "a",
    "area_id": 20,
    "city_id": 1,
    "country_id": 8,
    "level_id": 12,
    "parent_phone_country":"EG",
    "password_confirmation":password
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
       console.log(res);
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
          <h2 className="title_sign">{t('up')}</h2>
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
            <div className="col-md-12">
              <label htmlFor="inputFirstName" className="form-label">
              {t('first')}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder={t('enterFirst')}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputLast Name" className="form-label">
              {t('last')}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLast Name"
                placeholder={t('enterLast')}
               
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
              {t('email')}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder={t('enterEmail')}
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputpassword" className="form-label">
              {t('password')}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputpassword"
                placeholder={t('enterPassword')}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputPhone " className="form-label">
              {t('mobile')}
              </label>
              <PhoneInput
                defaultCountry="EG"
                placeholder={t('enterNumber')}
                className="form-control"
                value={value}
                onCountryChange={(e)=>setPhone_country(e)}
                onChange={setValue}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPhone " className="form-label">
              {t('whatsApp')}
              </label>
              <PhoneInput
                defaultCountry="EG"
                placeholder={t('enterNumber')}
                className="form-control"
                value={value2}
                onChange={setValue2}
              />
            </div>
            {/*value={selectedOption} onChange={handleOptionChange}*/}
            <div className="col-md-12">
              <label htmlFor="inputCountry" className="form-label">
              {t('country')}
              </label>

              <select id="inputCountry" className="form-select">
                <option value="option">{t('selectCountry')}</option>
                <option value="option1">EG</option>
                <option value="option2">EUR</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputAge" className="form-label">
              {t('age')}
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAge"
                placeholder={t('enterAge')}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputGender" className="form-label">
              {t('gender')}
              </label>
              <select id="inputGender" className="form-select">
                <option value="option">{t('selectGender')}</option>
                <option value="option1">male</option>
                <option value="option2">female</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputProfession" className="form-label">
              {t('profession')}
              </label>
              <select id="inputProfession" className="form-select">
                <option value="option">{t('selectProfession')}</option>
                <option value="option1">Profession1</option>
                <option value="option2">Profession2</option>
              </select>
            </div>
            {/* <a href="courseVideo.html" className="btn_page">
            {t('signUp')}
            </a> */}

           
          
           <input type="submit" value="Sign Up" onClick={(e)=>{e.preventDefault();handelSignUP()}} className="btn_page" />

          </form>
          <div className="haveAccount">
            <p>
            {t('already')}<Link href="/signIn"> {t('logIn')}</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSignup;
