"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { getHomePage, getUser } from "../useAPI/GetUser";
import { useState } from "react";
import { navState } from "@/atoms";
import { useRecoilState } from "recoil";
import {usePathname, useRouter} from 'next-intl/client';
import { useTranslations } from "next-intl";

function NavBar({lang}) {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations('Nav');
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    FetchDataOFUser();
  }, [IsUser]);
  useEffect(() => {
    FetchDataOFData();
  }, []);
  const FetchDataOFUser = async () => {
    const User = await getUser();
    if (!User) console.log(User?.message);
    setUser(User);
  };
console.log(user);
const FetchDataOFData = async () => {
  const HomePage = await getHomePage();
  if (!HomePage) console.log(HomePage?.message);
  setCategories(HomePage.categories);
};
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="phone_nav ac_nav">
          {IsUser && (
            <div className="dropdown" style={{ position: "relative" }}>
              <h4
                className="dropdown-toggle nav_btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name},
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                   {t("myProfile")}
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/account/myServices">
                  {t("myServices")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/account/prmoted">
                   {t("promotion")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/account/myOrders">
                    {t("myOrders")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/account/addressess">
                    {t("addresses")}
                  </a>
                </li>
              </ul>
            </div>
          )}
          {!IsUser && (
            <Link href="/signIn" className="nav_btn">
              <img src="/images/login.svg" className="img_login" alt="login" />
              <p>Login</p>
            </Link>
          )}
          <button className="search btnsearch">
            <img src="/images/search.svg" alt="search" />
          </button>
        </div>

        <div className="logo">
          <Link className="navbar-brand" href="/">
            <img src="/images/Logo.svg" alt="" />
          </Link>
          <div className="collapse  col-dec" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/images/categorization.svg" alt="categories" />
                  {t("categories")}
                </a>
                <ul className="dropdown-menu row">
                  {
                    categories?.map((category)=>{
                      return(
                        <li className="col-md-4 col-sm-6 col-12" key={category.id}>
                    <h5>{category.name.en}</h5>
                    <div className="ul_all">
                      <ul>
                        {
                        category.children?.map((item)=>{
                          return(
                            <li key={item.id}>
                            <Link className="dropdown-item" href={`/categoriesDetails/${item.id}`}>
                             {item.name.en}
                            </Link>
                          </li>
                          )
                        })
                        }
                        
                    
                      </ul>
                    </div>
                  </li>
                      )
                    })
                  }
                 
             
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="right_nav ac_nav" id="">
          <button id="search" className="btnsearch">
            <img src="/images/search.svg" className="search" alt="search" />
          </button>
          <a href="#">
            {" "}
            <img src="/images/fav.svg" className="fav" alt="fav" />
          </a>
          <Link href="/add_Services" className="nav_btn">
            <img src="/images/add.svg" className="add" alt="Add_Services" />
            <p>{t("addServices")}</p>
          </Link>
          {IsUser && (
            <div className="dropdown" style={{ position: "relative" }}>
              <h4
                className="dropdown-toggle nav_btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               {t("hi")}, {user.name}
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                   {t("myProfile")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/myServices">
                   {t("myServices")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/prmoted">
                   {t("promotion")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/myOrders">
                    {t("myOrders")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/addressess">
                    {t("addresses")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {!IsUser && (
            <Link href="/signIn" className="nav_btn login_btn">
              <img src="/images/login.svg" className="img_login" alt="login" />
              <p>Login</p>
            </Link>
          )}
          <button className="lang" onClick={()=>{router.replace(`${pathname+window.location.search}`, {locale: lang==='en'?'ar':'en'});}}>
            <img src="/images/lang.webp" className="lang" alt="lang" />
            <p>{lang==='en'?'Ar':'En'}</p>
          </button>
        </div>

        <div className="collapse col-phone" id="navbarSupportedContent">
          <div className="right_nav ac_nav" id="">
            <a href="#">
              <img src="/images/fav.svg" className="fav" alt="fav" />
            </a>
            <Link href="/add_Services" className="nav_btn">
              <img src="/images/add.svg" className="add" alt="Add_Services" />
              <p>{t("addServices")}</p>
            </Link>
            <button className="lang" onClick={()=>{router.replace(`${pathname+window.location.search}`, {locale: lang==='en'?'ar':'en'});}}>
              <img src="/images/lang.webp" className="lang" alt="lang" />
              <p>{lang==='en'?'Ar':'En'}</p>
            </button>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              categories?.map((category)=>{
                return(
                  <li className="nav-item dropdown" key={category.id}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               {category.name.en}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      {
                        category.children?.map((item)=>{
                          return(
                            <li key={item.id}>
                            <Link className="dropdown-item" href={`/categoriesDetails/${item.id}`}>
                              {item.name.en}
                            </Link>
                          </li>
                          )
                        })
                      }
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      
                 
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
                )
              })
            }
            
           
           
          </ul>
        </div>
      </div>
      <form action="" id="form_nav" className="input_srearch">
        <input type="search" placeholder="Search For ......." />
      </form>
    </nav>
  );
}

export default NavBar;
