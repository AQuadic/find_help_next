"use client";
import React from 'react'
import { getHomePage } from '../useAPI/GetUser';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getLocal } from '../useAPI/Auth';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import {UserCountry } from '@/atoms';


function Footer() {
  const [data, setData] = useState();
  const t = useTranslations('Footer');
  const [UserCountry2, setUserCountry2] = useRecoilState(UserCountry);


  const locale = useLocale()
  useEffect(() => {
    FetchDataOFData()
   
    }, []);
    const FetchDataOFData = async () => {
      const HomePage = await getHomePage();
      if (!HomePage) console.log(HomePage?.message);
      setData(HomePage);
    };

  return (
    <footer>
      <div className="container">
        <div className="fotter_content">
          <div className="head">
            <h1>
              <a href="index.html"><img src="/images/Logo.svg" alt="" /></a>
            </h1>
            <p>{t("footerTitle")}</p>
          </div>
          <div className="part">
            <h2>{t("about")}</h2>
            <div className="links">
              {
                data?.pages.map((item)=>{
                  return(
                    <Link href={`/about/${(getLocal('en',item.title)).replace(/\s/g, "")}`} key={item.id}>{getLocal(locale,item.title)}</Link>
                  )
                })
              }
              
            </div>
          </div>
        
         
            <div className="part" style={{gap:"6px"}}>
            <h2>{t("countries")}</h2>
            <h3>{UserCountry2}</h3>
            <Link href='/country' className='countryLink'>Change Country</Link>
          </div>
      
          
          <div className="part">
            <h2 style={{padding: "0px 20px"}}>{t("followUs")}</h2>
            <div className="links_social">
            
              <a href={data?.socials.facebook} >
                <img src="/images/facebook.webp" alt="facebook" />
              </a>

             {/* { <a href={data?.socials.}>
                <img src="/images/linkedin.webp" alt="instagram" />
              </a>} */}
              <a href={data?.socials.instagram} >
                <img src="/images/insta.webp" alt="linkedin" />
              </a>
              
              <a href={data?.socials.twitter} >
                <img src="/images/twiiter.webp" alt="twitter" />
              </a>
            </div>
            <div className="store">
              <a href=""><img src="/images/app.webp" alt="app store" /></a>
              <a href=""
                ><img src="/images/google.webp" alt="google play"
              /></a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>
            © Find Help, 2019-2022 {t('made')}
            <a href="https://aquadic.com/" target='_blank'> {t('aquadic')}</a>
          </p>
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer