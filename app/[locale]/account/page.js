 "use client";

import BtnLogOut from "@/components/btnLogOut";
import { getUser } from "@/components/useAPI/GetUser";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";





function page() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const [IsImage, setIsImage] = useState('');
  const [changeImage, setChangeImage] = useState(false);
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState();
  const [user, setUser] = useState("");
  console.log(name);
  console.log(email);
  console.log(IsImage);
  console.log(phone);
  console.log(phone_country);
  console.log(selectedFile);
  
  const handleHeaderInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setChangeImage(true)
  };
  

  useEffect(() => {
    FetchDataOFUser();
  }, []);
  const FetchDataOFUser = async () => {
    const User = await getUser();
    if (!User) console.log(User?.message);
    setUser(User);
    setName(User.name)
    setEmail(User.email?User.email:"")
    setIsImage(User.image?User.image.url:null)
    setPhone(User.phone_normalized)
    setPhone_country(User.phone_country)
  };
console.log(user);

  const handelProfile = () => {
    const body = new FormData();
    body.append('name', name);
    body.append('email', email);
    changeImage&&body.append('image', selectedFile);
    body.append('phone', phone);
    body.append('phone_country', phone_country);
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
       
      })
      .catch((res) => {
          console.log(res);
      });
  };


  return (
    <>
    <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">My Profile</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" className="active">My Profile</Link></li>
            <li><Link href="/account/myServices">My services</Link></li>
            <li><Link href="/account/prmoted">Promotion</Link></li>
            <li><Link href="/account/myOrders">My Orders</Link></li>
            <li><Link href="/account/addressess">Addresses</Link></li>
            <li><BtnLogOut/></li>
          </ul>
        </div>
        <div className="Profile">
          <h2 className="cart_title2">Personal Details</h2>

          
          <div className="img_persone">
            <img src={!changeImage?IsImage:selectedFile?URL.createObjectURL(selectedFile):"/images/person.webp"} className="person" alt="person" /> 
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
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="col-md-12 tel_num">
              <label htmlFor="inputtel " className="form-label">Phone Number </label>
             
              <PhoneInput
                defaultCountry={phone_country}
                placeholder={"Your Mobile Number"}
                className="form-control"
                value={phone}
                onCountryChange={(e)=>setPhone_country(e)}
                onChange={setPhone}
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
               onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <button type="submit" href="" className="next btn_page" onClick={(e)=>{e.preventDefault();handelProfile()}}>Save</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default page;
