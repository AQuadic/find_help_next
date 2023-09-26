"use client";
import ViewCheck from '@/components/compPage/ViewCheck';
import { getUserLocation } from '@/components/useAPI/GetUser';
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const t = useTranslations("checkOut");
  const [location ,setLocation] = useState([])
  const SearchParams = useSearchParams()
const ServiceID = SearchParams.get("id");
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

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
          <li className="breadcrumb-item" aria-current="page">Check Out</li>
          <li className="breadcrumb-item" aria-current="page">Addresses</li>
        </ol>
      </nav>
    </div>

    <section className="checkOut container m90">
      <div className="part1">
        <h2 className="headtitle">{t("titleAddresses")}</h2>
        <form className="box">
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
            <Link 
            href={{
              pathname: "/checkOut/address/newAddress",
              query: { id: ServiceID},
            }}
            className="addAddress">
              <h5>+</h5>
              <h6>{t("addNew")}</h6>
            </Link>
          </div>

          <input type="submit" value={t("next")} className="btn_page" />
        </form>
      </div>
      <ViewCheck id={ServiceID}/>
    </section>

  </>
  )
}

export default page