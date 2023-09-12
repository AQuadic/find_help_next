"use client";
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { useState } from 'react';

function page() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
console.log('====================================');
console.log(name);
console.log('====================================');
console.log('====================================');
console.log(email);
console.log('====================================');
console.log('====================================');
console.log(selectedFile);
console.log('====================================');
const handleHeaderInputChange = (e) => {
  setSelectedFile(e.target.files[0]);
};
const handelProfile = () => {
  const body = new FormData();
  body.append('name', name);
  body.append('email', email);
  body.append('image', selectedFile);

  const po = axios
    .post(
      "https://findhelpapp.com/api/v1/users/auth/update",
      body,
      {
        headers: {
          "Authorization": `Bearer ${Cookies.get('token')}`,
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    "Accept-Language": "ar",
        },
      }
    )
    .then((res) => {
     console.log(res);
     router.push('/')
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
          <h3>Almost There,</h3>
          <p className="dec" style={{marginBottom: "24px"}}>
            Complete Your Personal Information To Create The Account
          </p>
          <div className="img_persone">
            <img src={selectedFile?URL.createObjectURL(selectedFile):"/images/person.webp"} className="person" alt="person" />
            <div className='inputfile'>
            <input type="file" onChange={handleHeaderInputChange} />
              <img src="/images/Camera.svg" alt="Camera" />
            </div>
           

          </div>
          <form className="row g-3 form_page">
            <div className="col-md-12">
              <label htmlFor="inputname4 " className="form-label">Full Name </label>
              <input
                type="text"
                className="form-control"
                id="inputname4"
                placeholder="Full Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputemail " className="form-label">Email Adress </label>
              <input
                type="email"
                className="form-control"
                id="inputemail"
                placeholder="Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <input type="submit" value="Done" onClick={(e)=>{e.preventDefault();handelProfile()}} className="btn_page" />
          </form>
        </div>
      </div>
    </section>

    <section className="endPage_login">
      <p>© Find Help, 2019-2022 Made by</p>
      <a href="#"> AQuadic Solution Company</a>
    </section>
    </>
  )
}

export default page