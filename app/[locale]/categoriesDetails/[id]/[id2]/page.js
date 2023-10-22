"use client";
import api from "@/app/[locale]/api";
import ItemCourse from "@/components/ItemCourse";
import { getLocal } from "@/components/useAPI/Auth";
import { getProvider } from "@/components/useAPI/GetUser";
import {
  getServicesClient,
  getSingleServices,
} from "@/components/useAPI/shop/shop";
import { Skeleton } from "@mantine/core";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

function page({ params }) {
  const [services, setServices] = useState();
  const [ImageNum, setImageNum] = useState(0);
  const [servicesClient, setServicesClient] = useState();
  const [provider, setProvider] = useState([]);
  const [ClientID, setClientID] = useState();
  const [servicesID, setServicesID] = useState();
  const [selectCurrentCategories, setSelectCurrentCategories] = useState();
  const [selectCurrentCategoriesName, setSelectCurrentCategoriesName] = useState("");
  const [selectCurrentSubCategories, setSelectCurrentSubCategories] = useState();
  const [selectCurrentSubCategoriesName, setSelectCurrentSubCategoriesName] = useState("");
  const t = useTranslations("Categories");
  const locale = useLocale()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: provider?.services?.length>3?3:provider?.services?.length-1,
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
    setSelectCurrentCategories(Services.category_id)
    setSelectCurrentCategoriesName(getLocal(locale,Services.category.name))
    setSelectCurrentSubCategories(Services.sub_category.id)
setSelectCurrentSubCategoriesName(getLocal(locale,Services.sub_category.name) )

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
  const handelFav = (id) => {
   
    const po = api
      .post(
        "api/v1/users/favourites",
        {
          "model_type": "UserService",
          "model_id": id
        },
        {
          headers: Cookies.get("token")?{
            Authorization: `Bearer ${Cookies.get("token")} `,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          }:{
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
    setLoading(false)

        console.log(res);
      });
  };
  return (
    <>
      {services && (
        <>
          <div className="container breadcrumbDetails">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                <Link href='/'>
              Home
              </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
              <Link href={`/categoriesDetails/${selectCurrentCategories}`}>
             {selectCurrentCategoriesName}
              </Link>
            
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <Link href={`/categoriesDetails/${selectCurrentSubCategories}`}>
             {selectCurrentSubCategoriesName}
              </Link>
            
            </li>
                <li className="breadcrumb-item active" >
                {getLocal(locale,services.description)}
                </li>
              </ol>
            </nav>
          </div>
          {!services.id && (
              <div className="loadItems loadItems4 container">
              <div className="item">
                <Skeleton height={400}  radius="xl" mb="xl" />
                
              </div>
              <div className="item" style={{alignItems:"flex-start"}}>
                <Skeleton height={60}  radius="md" mb="xl" />
                <Skeleton height={40}  radius="md" mb="xl" />
                <Skeleton height={30}   />
                <Skeleton height={20}  mt={6} radius="xl" />
               
              </div>
              
            </div>
            )}
          <section className="current_Service container m90">
         <div className="boxImages">
          <div className="CurrentImage">
          <img
              src={
                services.images[ImageNum] ? services.images[ImageNum].url : "/images/Logo.svg"
              }
              className="img_current"
              alt="Service"
            />
          </div>
          {
            services.images.length>1&&   <div className="groupImages">
              {
                services.images.map((img,i)=>{
                  return(
                    <img
                    onClick={()=>{setImageNum(i)}}
                  src={
                    img.url
                  }
                  className="img_current"
                  alt="Service"
                />
                  )
                })
              }
           
                 
            </div>
          }
     
         </div>
           
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
                <button
                onClick={()=>{handelFav(params.id2)}}
                  className="fav"
                  style={{ backgroundImage:services.is_favourite?"url(/images/loved.svg)":"url(/images/love.svg)" }}
                ></button>
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
                <div className="twoRate">
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
                
                <div className="btnChateMe">
                 
                <Link href={`/chat`} className="btn_page">
                <img src="/images/chat.svg" alt="chat"/>
                Chat with me
                </Link>
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
                    fav={service.is_favourite}

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
