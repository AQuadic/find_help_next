"use client"
import React, { useEffect } from 'react'
import NavBar from './NaVBar'
import Footer from './Footer'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'
import { getCountryUser, getHomePage } from '../useAPI/GetUser'
import Cookies from 'js-cookie'

function Layout({children,lang}) {
useEffect(()=>{
  !Cookies.get("country")||Cookies.get("country")=='undefined'&&getCountry()
  
},[])
  const getCountry = async () => {
    const CountryUser2 = await getCountryUser();
    const HomePage = await getHomePage();
    HomePage.countries.map((item)=>item.name.en==CountryUser2.country?Cookies.set("countryID",item.id):null)
   
    Cookies.set("country",CountryUser2.country);
  };

  return (
    <>
    <RecoilRoot>
      <NavBar lang={lang}/>
     {children}
      <Footer lang={lang}/> 
     <Script async src='/js/jquery-3.6.1.min.js'/>
     </RecoilRoot>
    </>
  )
}

export default Layout