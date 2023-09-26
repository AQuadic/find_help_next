"use client";
import ItemCourse from "@/components/ItemCourse";
import styles from "./page.module.css";
import React, { useState } from "react";
import ItemCategories from "@/components/ItemCategories";
import { getCategories, getServices } from "@/components/useAPI/shop/shop";
import { useEffect } from "react";
import { getHomePage } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState();
  const [data, setData] = useState();
  const t = useTranslations('Index');
useEffect(() => {
  FetchDataOFData()
    FetchDataOFIServices();
  }, []);
  
  console.log(categories);
  const FetchDataOFIServices = async () => {
    const Services = await getServices();
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  console.log('====================================');
  console.log(services);
  console.log('====================================');
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setData(HomePage);
    setCategories(HomePage.categories);
  };
console.log(data);

  return (
    <main className={styles.main}>
      <>
        <section className= "find">
          <img src="/images/find.webp" className= "imgFind" alt="find" />
          <div className= "aboutFind container">
            <h1>{t("title")}</h1>
            <h2>{t("title2")}</h2>
            <form action="">
              <input type="text" placeholder={t("search")} />
              <input type="submit" value={t("btnSearch")} />
            </form>
          </div>
        </section>

        <section className= "categories container m90">
          <h2 className= "headtitle">{t("categories")}</h2>
          <div className= "parts">
            {
              data?.service_categories?.map((item)=>{
return(
  <ItemCategories  key={item.id}  id={item.id} title={item.name.en} image={item.image.url} />
)
              })
            }
          </div>
        </section>

        <section className= "use m90">
          <div className= "container">
            <h2>{t("howTo")}</h2>
            <div className= "parts">
              <div className= "part">
                <div className= "numStep">1</div>
                <img src="/images/people-search.webp" alt="people-search" />
                <div className= "aboutUse">
                  <h3>{t("find")}</h3>
                  <p>
                  {t("findDec")}
                  </p>
                </div>
              </div>
              <div className= "part">
                <div className= "numStep">2</div>
                <img src="/images/click.webp" alt="click" />
                <div className= "aboutUse">
                  <h3>{t("make")}</h3>
                  <p>
                  {t("makDece")}
                  </p>
                </div>
              </div>
              <div className= "part">
                <div className= "numStep">3</div>
                <img src="/images/shopping-list1.webp" alt="shopping-list" />
                <div className= "aboutUse">
                  <h3> {t("receive")}</h3>
                  <p>
                  {t("receiveDec")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {
            categories.slice(0,3).map((category)=>{
              return(
                <section className= "services container m90" key={category.id}>
          
          <h2 className= "headtitle">{category.name.en}</h2>

          <div className= "allServices">
            {
              category.children.slice(0,3).map((item)=>{
                return(
                  <ItemCourse
              title={item.name.en}
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom=""
              timeTo=""
              oldsalary=""
              newsalary={item.price}
              image="1"
              id={item.id}
  category_id={category.id}
            />
                )
              })
            }
           
          
          </div>
        </section>
              )
            })
          }
        

        <section className= "need m90">
          <div className= "container">
            <div className= "parts">
              <div className= "part1">
                <h3 style={{ color: "#1866ff" }}>{t("searchBook")}</h3>
                <img
                  src="/images/hotelbooking-pana(1)1.webp"
                  alt="hotelbooking-panar"
                />
                <Link
                  href="/categoriesDetails/26"
                  className= "btn_page btn_page2"
                  style={{ backgroundColor: "#1866ff" }}
                >
                 {t("btnFind")}
                </Link>
              </div>
              <div className= "part2">
                <h2> {t("everything")}</h2>
              </div>
              <div className= "part3">
                <h3 style={{ color: "#f3b100" }}>{t("addAnnounce")}</h3>
                <img src="/images/refund-pana1.webp" alt="refund-pana" />
                <Link
                  href="/add_Services"
                  className= "btn_page"
                  style={{ backgroundColor: "#f3b100" }}
                >
                 {t("btnAdd")}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className= "services container m90">
          <h2 className= "headtitle">Cleaning Services</h2>
          <div className= "allServices">
            <div className= "allServices">
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                oldsalary="2000"
                newsalary="1000"
                image="1"
                love
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="2"
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="3"
              />
            </div>
          </div>
        </section>
        <section className= "try container m90">
          <img src="/images/phone.webp" className= "phone" alt="phone" />
          <div className= "aboutTry">
            <div className= "part1">
              <h2>{t("try")}</h2>
              <p>
               {t("buy")}
              </p>
            </div>
            <div className= "part2">
              <h3>{t("getApp")}</h3>
              <ul>
                <li>
                  <a href="">
                    <img src="/images/app.webp" alt="app store" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/images/google.webp" alt="google play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}
