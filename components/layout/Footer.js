"use client";
import React from 'react'
import { getHomePage } from '../useAPI/GetUser';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


function Footer() {
  const [data, setData] = useState();
  const t = useTranslations('Footer');
  useEffect(() => {
    FetchDataOFData()
   
    }, []);
    const FetchDataOFData = async () => {
      const HomePage = await getHomePage();
      if (!HomePage) console.log(HomePage?.message);
      setData(HomePage);
    };
  console.log(data);
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
                    <Link href={`/about/${(item.title.en).replace(/\s/g, "")}`} key={item.id}>{item.title.en}</Link>
                  )
                })
              }
              
            </div>
          </div>
          <div className="part">
            <h2>{t("countries")}</h2>
            <div className="links links2">
              <p>Kuwait</p>
              <p>Egypt</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
            </div>
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
            © Find Help, 2019-2022 Made by
            <a href="#">AQuadic Solution Company</a>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer