"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BtnLogOut from "@/components/btnLogOut";
import { getUserLocation } from '@/components/useAPI/GetUser';
function page() {

const [location ,setLocation] = useState([])
  useEffect(() => {
    FetchDataOFUserLocation();
  }, []);
  const FetchDataOFUserLocation = async () => {
    const Locations = await getUserLocation();
    if (!Locations) console.log(Locations?.message);

    setLocation(Locations)
  };
  return (
    <>
     <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>
          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">Addressess</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" >My Profile</Link></li>
            <li><Link href="/account/myServices" >My services</Link></li>
            <li><Link href="/account/prmoted" >Promotion</Link></li>
            <li><Link href="/account/myOrders" >My Orders</Link></li>
            <li>
              <Link href="/account/addressess"   className="active">Addresses</Link>
            </li>
           <li><BtnLogOut/></li>
          </ul>
        </div>
        <div className="Profile">
          <h2 className="cart_title2">Addresses</h2>
          <form className="">
            <div className="box1 address_page">
              {
                location.filter((loc)=>loc.details!==null).map((loc)=>{
                  return(
                    <div className="myAddress" key={loc.id}>
                <img src="/images/address.svg" alt="address" />
                <div className="about_address">
                  <p>
                    {loc.details}
                  </p>
                  <p>{loc.phone_normalized}</p>
                </div>
              </div>
                  )
                })
              }
              <div className="myAddress">
                <img src="/images/address.svg" alt="address" />
                <div className="about_address">
                  <p>
                    66 Youssef Ghaly Street, Miami , Alexandria. Appointment No.
                    22 Floor No.4
                  </p>
                  <p>+20 154 256 1235</p>
                </div>
              </div>
              <Link href="/account/addressess/new_Address" className="addAddress">
                <h5>+</h5>
                <h6>Add New Address</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default page