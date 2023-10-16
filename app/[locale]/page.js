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
  const [Search, setSearch] = useState("");
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
    FetchDataOFHomeServices();
    FetchDataOFHomeServices2();
    FetchDataOFHomeServices3();
  }, []);

  console.log(categories);
  const FetchDataOFIServices = async () => {
    const Services = await getServices();
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  console.log("====================================");
  console.log(services);
  console.log("====================================");
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setData(HomePage);
    setCategories(HomePage.categories);
  };
  console.log(data);

  const FetchDataOFHomeServices = async () => {
    const HomeServices = await getHomeServices(23);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices(HomeServices.data);
  };
  const FetchDataOFHomeServices2 = async () => {
    const HomeServices = await getHomeServices(66);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices2(HomeServices.data);
  };
  const FetchDataOFHomeServices3 = async () => {
    const HomeServices = await getHomeServices(114);
    if (!HomeServices) console.log(HomeServices?.message);
    setHomeServices3(HomeServices.data);
  };
  console.log(homeServices);
  console.log(homeServices2);
  console.log(homeServices3);

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
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
                  <Skeleton height={20} width={100} radius="xl" />
                </div>
                <div className="item item2 ">
                  <Skeleton height={70} width={70} circle  mb="xl" />
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
            <h2 className="headtitle">{t('repairs')}</h2>
            {!homeServices.length > 0 && (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110}  mb="xl" />
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
            <h2 className="headtitle">{t('salon')} </h2>
            {!homeServices3.length > 0 && (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110}  mb="xl" />
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
            <h2 className="headtitle">{t('cleaning')}</h2>
            {!homeServices2.length > 0 && (
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110}  mb="xl" />
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
