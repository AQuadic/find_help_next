"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BtnLogOut from "@/components/btnLogOut";
import { getUserLocation } from '@/components/useAPI/GetUser';
import { useTranslations } from 'next-intl';
function page() {

const [location ,setLocation] = useState([])
const t = useTranslations("Account");
  useEffect(() => {
    FetchDataOFUserLocation();
  }, []);
  const FetchDataOFUserLocation = async () => {
    const Locations = await getUserLocation();
    if (!Locations) console.log(Locations?.message);

    setLocation(Locations)
  };
  console.log(location);
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
            <li><Link href="/account" >{t("account")}</Link></li>
            <li><Link href="/account/myServices" >{t("services")}</Link></li>
            <li><Link href="/account/prmoted" >{t("promotion")}</Link></li>
            <li><Link href="/account/myOrders" >{t("myOrders")}</Link></li>
            <li>
              <Link href="/account/addressess"   className="active">{t("addresses")}</Link>
            </li>
           <li><BtnLogOut/></li>
          </ul>
        </div>
        <div className="Profile">
          <h2 className="cart_title2">{t("addresses")}</h2>
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
             
              <Link href="/account/addressess/new_Address" className="addAddress">
                <h5>+</h5>
                <h6>{t("addAddress")}</h6>
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