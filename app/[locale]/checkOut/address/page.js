"use client";
import ViewCheck from '@/components/compPage/ViewCheck';
import { getUserLocation } from '@/components/useAPI/GetUser';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const t = useTranslations("checkOut");
  const locale = useLocale()
  const [location ,setLocation] = useState([])
  const [currentlocation ,setCurrentLocation] = useState(Cookies.get("AdID")?Cookies.get("AdID"):null)
  const SearchParams = useSearchParams()
  const router = useRouter()
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
 

    <section className="checkOut container m90">
      <div className="part1">
        <h2 className="headtitle">{t("titleAddresses")}</h2>
        <form className="box">
          <div className="box1 address_page">
          {
                location.filter((loc)=>loc.details!==null).map((loc)=>{
                  return(
                    <div className={`myAddress  ${ loc.id===+currentlocation&&"active"}`} key={loc.id} onClick={()=>{Cookies.set("AdID",loc.id);setCurrentLocation(loc.id)}}>
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

          <input type="submit" value={t("next")} onClick={(e)=>{e.preventDefault(); router.push(`/checkOut?id=${ServiceID}`)}} className="btn_page" />
        </form>
      </div>
      <ViewCheck id={ServiceID}/>
    </section>

  </>
  )
}

export default page