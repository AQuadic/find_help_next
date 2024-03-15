"use client";
import ItemCourse from "@/components/ItemCourse";
import styles from "./page.module.css";
import React, { useState } from "react";
import ItemCategories from "@/components/ItemCategories";
import {
  getCategories,
  getHomeServices,
  getServices,
} from "@/components/useAPI/shop/shop";
import { useEffect } from "react";
import { getHomePage } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getLocal } from "@/components/useAPI/Auth";
import { Skeleton } from "@mantine/core";
import { useRecoilState } from "recoil";
import { StateSearch } from "@/atoms";

export default function Home() {
  const locale = useLocale();
  const [categories, setCategories] = useState([]);
  const [selectedElements, setselectedElements] = useState([]);
  const [selectedElementsName, setselectedElementsName] = useState([]);
  const [Search, setSearch] = useState("");
  const [Load1, setLoad1] = useState(true);
  const [Load2, setLoad2] = useState(true);
  const [Load3, setLoad3] = useState(true);
  const [services, setServices] = useState();
  const [homeServices, setHomeServices] = useState([]);
  const [homeServices2, setHomeServices2] = useState([]);
  const [homeServices3, setHomeServices3] = useState([]);
  const [stateSearch, setStateSearch] = useRecoilState(StateSearch);

  const [data, setData] = useState();
  const t = useTranslations("Index");
  useEffect(() => {
    FetchDataOFData();
    FetchDataOFIServices();
    
     
    
  }, []);
useEffect(()=>{
  getThreeService()
},[data])
  const FetchDataOFIServices = async () => {
    const Services = await getServices();
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };

  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    console.log(HomePage);
    setData(HomePage);
    setCategories(HomePage.categories);
  };

  const FetchDataOFHomeServices = async (e) => {
    const HomeServices = await getHomeServices(e);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices(HomeServices.data);
    setLoad1(false)
  };
  const FetchDataOFHomeServices2 = async (e) => {
    const HomeServices = await getHomeServices(e);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices2(HomeServices.data);
    setLoad2(false)
  };
  const FetchDataOFHomeServices3 = async (e) => {
    const HomeServices = await getHomeServices(e);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices3(HomeServices.data);
    setLoad3(false)
  };
  const getThreeService = ()=>{
    setLoad1(true)
    setLoad2(true)
    setLoad3(true)
    if(data){
     
      const indices = [];
      while (indices.length < 3) {
        const randomIndex = Math.floor(Math.random() * data?.service_categories.length);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      const selectedElements = indices.map((index) => data?.service_categories[index]);
      console.log(selectedElements);
      if(selectedElements.length>0){
        console.log(selectedElements[0].id);
        console.log(selectedElements[1].id);
        console.log(selectedElements[2].id);
        setselectedElementsName([getLocal(locale,selectedElements[0].name),getLocal(locale,selectedElements[1].name),getLocal(locale,selectedElements[2].name)])
        FetchDataOFHomeServices(selectedElements[0].id);
        FetchDataOFHomeServices2(selectedElements[1].id);
        FetchDataOFHomeServices3(selectedElements[2].id);
      }
      
    }
  }
  
 

  return (
    <main className={styles.main}>
      <>
        <section className="find">
          <img src="/images/find.webp" className="imgFind" alt="find" />
          <div className="aboutFind container">
            <h1>{t("title")}</h1>
            <h2>{t("title2")}</h2>
            <form action="">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setStateSearch(e.target.value);
                }}
                type="text"
                placeholder={t("search")}
              />
              <Link href={`/categoriesDetails?search=${Search}`}>
                {t("btnSearch")}
              </Link>
            </form>
          </div>
        </section>

        <section className="categories container m90">
          <h2 className="headtitle">{t("categories")}</h2>
          {!data?.service_categories.length > 0 && (
            <div className="loadItems loadItems2">
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
              <div className="item item2 ">
                <Skeleton height={70} width={70} circle mb="xl" />
                <Skeleton height={20} width={100} radius="xl" />
              </div>
            </div>
          )}

          <div className="parts">
            {data?.service_categories?.map((item) => {
              return (
                <ItemCategories
                  key={item.id}
                  id={item.id}
                  title={getLocal(locale, item.name)}
                  image={item.image.url}
                />
              );
            })}
          </div>
        </section>

        <section className="use m90">
          <div className="container">
            <h2>{t("howTo")}</h2>
            <div className="parts">
              <div className="part">
                <div className="numStep">1</div>
                <img src="/images/people-search.webp" alt="people-search" />
                <div className="aboutUse">
                  <h3>{t("find")}</h3>
                  <p>{t("findDec")}</p>
                </div>
              </div>
              <div className="part">
                <div className="numStep">2</div>
                <img src="/images/click.webp" alt="click" />
                <div className="aboutUse">
                  <h3>{t("make")}</h3>
                  <p>{t("makDece")}</p>
                </div>
              </div>
              <div className="part">
                <div className="numStep">3</div>
                <img src="/images/shopping-list1.webp" alt="shopping-list" />
                <div className="aboutUse">
                  <h3> {t("receive")}</h3>
                  <p>{t("receiveDec")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        { 
          <section className="services container m90">
            {
              Load1?homeServices.length>0?<h2 className="headtitle">{selectedElementsName[0]}</h2>:<></>:homeServices.length<=0?null:<h2 className="headtitle">{selectedElementsName[0]}</h2>
            }
            
            {Load1 && (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
              </div>
            )}
            <div className="allServices">
              {homeServices?.slice(0, 3).map((item) => {
                return (
                  <ItemCourse
                    key={item.id}
                    title={getLocal(locale, item.description)}
                    star="4.8"
                    loc={getLocal(locale, item.address_text)}
                    timeFrom={item.work_times?.time_from}
                    timeTo={item.work_times?.time_to}
                    oldsalary=""
                    newsalary={item.price}
                    img={item.images}
                    id={item.id}
                    category_id={item.category_id}
                    fav={item.is_favourite}
                  />
                );
              })}
            </div>
          </section>
        }

        {
          <section className="services container m90">
             {
              Load3?homeServices3.length>0?<h2 className="headtitle">{selectedElementsName[2]}</h2>:<></>:homeServices3.length<=0?null:<h2 className="headtitle">{selectedElementsName[2]}</h2>
            }
           
            {Load3 && (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
              </div>
            )}
            <div className="allServices">
              {homeServices3?.slice(0, 3).map((item) => {
                return (
                  <ItemCourse
                    key={item.id}
                    title={getLocal(locale, item.description)}
                    star="4.8"
                    loc={getLocal(locale, item.address_text)}
                    timeFrom={item.work_times?.time_from}
                    timeTo={item.work_times?.time_to}
                    oldsalary=""
                    newsalary={item.price}
                    img={item.images}
                    id={item.id}
                    category_id={item.category_id}
                    fav={item.is_favourite}
                  />
                );
              })}
            </div>
          </section>
        }

        <section className="need m90">
          <div className="container">
            <div className="parts">
              <div className="part1">
                <h3 style={{ color: "#1866ff" }}>{t("searchBook")}</h3>
                <img
                  src="/images/hotelbooking-pana(1)1.webp"
                  alt="hotelbooking-panar"
                />
                <Link
                  href="/categoriesDetails/26"
                  className="btn_page btn_page2"
                  style={{ backgroundColor: "#1866ff" }}
                >
                  {t("btnFind")}
                </Link>
              </div>
              <div className="part2">
                <h2> {t("everything")}</h2>
              </div>
              <div className="part3">
                <h3 style={{ color: "#f3b100" }}>{t("addAnnounce")}</h3>
                <img src="/images/refund-pana1.webp" alt="refund-pana" />
                <Link
                  href="/add_Services"
                  className="btn_page"
                  style={{ backgroundColor: "#f3b100" }}
                >
                  {t("btnAdd")}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {
          <section className="services container m90">
             {
              Load2?homeServices2.length>0?<h2 className="headtitle">{selectedElementsName[1]}</h2>:<></>:homeServices2.length<=0?null:<h2 className="headtitle">{selectedElementsName[1]}</h2>
            }
          
            {Load2&& (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
              </div>
            )}

            <div className="allServices">
              {homeServices2?.slice(0, 3).map((item) => {
                return (
                  <ItemCourse
                    key={item.id}
                    title={getLocal(locale, item.description)}
                    star="4.8"
                    loc={getLocal(locale, item.address_text)}
                    timeFrom={item.work_times?.time_from}
                    timeTo={item.work_times?.time_to}
                    oldsalary=""
                    newsalary={item.price}
                    img={item.images}
                    id={item.id}
                    category_id={item.category_id}
                    fav={item.is_favourite}
                  />
                );
              })}
            </div>
          </section>
        }
        <section className="try container m90">
          <img src="/images/phone.webp" className="phone" alt="phone" />
          <div className="aboutTry">
            <div className="part1">
              <h2>{t("try")}</h2>
              <p>{t("buy")}</p>
            </div>
            <div className="part2">
              <h3>{t("getApp")}</h3>
              <ul>
                <li>
                  <a href="/">
                    <img src="/images/app.webp" alt="app store" />
                  </a>
                </li>
                <li>
                  <a href="/">
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
