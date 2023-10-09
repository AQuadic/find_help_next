"use client";
import ItemCourse from "@/components/ItemCourse";
import { getLocal } from "@/components/useAPI/Auth";
import { getProvider } from "@/components/useAPI/GetUser";
import {
  getServicesClient,
  getSingleServices,
} from "@/components/useAPI/shop/shop";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

function page({ params }) {
  const [services, setServices] = useState();
  const [servicesClient, setServicesClient] = useState();
  const [provider, setProvider] = useState([]);
  const [ClientID, setClientID] = useState();
  const [servicesID, setServicesID] = useState();
  const t = useTranslations("Categories");
  const locale = useLocale()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: provider?.services?.length<3?provider.services.length-1:3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    FetchDataOFSingleServices();
    FetchDataOFServicesClient();
    FetchDataOFProvider();
  }, [ClientID]);
  
  const FetchDataOFSingleServices = async () => {
    const Services = await getSingleServices(params.id2);
    if (!Services) console.log(Services?.message);
    setServices(Services);
    setServicesID(Services.id);
    setClientID(Services.user.id);
  };
  console.log("====================================");
  console.log(services);
  console.log(servicesID);
  console.log("====================================");

  const FetchDataOFServicesClient = async () => {
    if (ClientID) {
      const ServicesClient = await getServicesClient(ClientID);
      if (!ServicesClient) console.log(ServicesClient?.message);
      setServicesClient(ServicesClient);
    }
  };
  console.log(ClientID);
  const FetchDataOFProvider = async () => {
    if (ClientID) {
      const Providers = await getProvider(ClientID);
      if (!Providers) console.log(Providers?.message);
      setProvider(Providers);
    }
  };
  console.log(provider);
  return (
    <>
      {services && (
        <>
          <div className="container breadcrumbDetails">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  Home
                </li>

                <li className="breadcrumb-item" aria-current="page">
                  Categories
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Repairs
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Sub category
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
          </div>

          <section className="current_Service container m90">
            <img
              src={
                services.images[0] ? services.images[0].url : "/images/Logo.svg"
              }
              className="img_current"
              alt="Service"
            />
            <div className="about_current_Service">
              <div className="head">
                <h3>{getLocal(locale,services.description)}</h3>
                <div className="Star">
                  <img src="/images/star.svg" alt="star" />
                  <p>4.8</p>
                </div>
              </div>
              <ul>
                {services.work_times && (
                  <li>
                    <img src="/images/Time-Circle.svg" alt="Time-Circle" />
                    <p>
                      {services.work_times.time_from} to{" "}
                      {services.work_times.time_to}
                    </p>
                  </li>
                )}
                <li>
                  <img src="/images/Location.svg" alt="Location" />
                  <p>{getLocal(locale,services.address_text)}</p>
                </li>
              </ul>
              {services.price > 0 && (
                <div className="salary_Service">
                  <p>{services.price}EGP</p>
                </div>
              )}
              <div className="bookNow_Fav">
                <Link href={`/checkOut?id=${services.id}`} className="btn_page">
                  {t("book")}
                </Link>
                <div
                  className="fav"
                  style={{ backgroundImage: "url(/images/love.svg)" }}
                ></div>
              </div>
            </div>
          </section>

          <section className="provider container m90">
            <h2 className="headtitle">{t("providerDetails")}</h2>
            <div className="part1">
              <img
                src={
                  services.user.image
                    ? services.user.image.url
                    : "/images/person.webp"
                }
                className="person"
                alt="person"
              />
              <div className="about_Provider">
                <h3>{services.user.name}</h3>
                <p>{getLocal(locale,services.address_text)}</p>
              </div>
            </div>
            <div className="part2">
              <div className="rat_cus">
                <div className="rating rat_cus_same">
                  <h3>{t("providerRating")}</h3>
                  <div className="Star">
                    <p>4.8</p>
                    <img src="/images/star.svg" alt="star" />
                  </div>
                  <p>
                    <span>79% </span> {t("providerRating")}
                  </p>
                </div>
                <div className="customers rat_cus_same">
                  <h3>{t("customers")}</h3>
                  <h4>249K+</h4>
                  <p>During the last 90 days</p>
                </div>
              </div>
              <div className="all_Rating">
                <ul>
                  <li>
                    <div className="headRating">
                      <div className="allStars">
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                      </div>
                      <p>12/11/2022</p>
                    </div>
                    <h3>He’s so Professional</h3>
                    <h4>By: Ahmed</h4>
                  </li>
                  <li>
                    <div className="headRating">
                      <div className="allStars">
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                      </div>
                      <p>12/11/2022</p>
                    </div>
                    <h3>He’s so Professional</h3>
                    <h4>By: Ahmed</h4>
                  </li>
                  <li>
                    <div className="headRating">
                      <div className="allStars">
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                        <img src="/images/star.svg" alt="star" />
                      </div>
                      <p>12/11/2022</p>
                    </div>
                    <h3>He’s so Professional</h3>
                    <h4>By: Ahmed</h4>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {
            provider?.services?.length>1&&<section className="ServicesProvider services container m90">
            <h2 className="headtitle">{t("searchBook")}</h2>
            <div
              style={{ maxWidth: "100%", display: "block" }}
              className=" allServices"
            >
              <Slider {...settings}>
              {
                    provider?.services?.filter((item)=>item.id!=servicesID).map((service)=>{
                      return(
                        <div
                  className="item"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  key={service.id}
                >
                 
                  <ItemCourse
                    title={getLocal(locale,service.description)}
                    star="4.8"
                    loc={getLocal(locale,service.address_text)}
                    timeFrom={service.work_times?.time_from}
                    timeTo={service.work_times?.time_to}
                    img={service.images}
                    newsalary={service.price}
                    image="1"
                    id={service.id}
                    category_id={service.category_id}
                  />
                </div>
                      )
                    })
                  }
                  
           
              
              </Slider>
            </div>
          </section>
          }
 

         
        </>
      )}
    </>
  );
}

export default page;
