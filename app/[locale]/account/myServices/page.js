"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { getMyServices, getMyServices2 } from "@/components/useAPI/shop/shop";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { getLocal } from "@/components/useAPI/Auth";
import { Skeleton } from "@mantine/core";
import api from "../../api";

function page() {
  const router = useRouter()
  const [services, setServices] = useState([]);
  const [services2, setServices2] = useState([]);
  const [status, setStatus] = useState("Services");
  const [ServicesStatus, setServicesStatus] = useState(true);
  const [Loading, setLoading] = useState(true);
  const t = useTranslations("Account");
  const locale = useLocale()
  useEffect(() => {
    setLoading(true)
    if (status === "Services") {
      FetchDataOFMyServices();
      setServicesStatus(true)
    }
    if (status === "PENDING") {
      FetchDataOFMyServices2(
        "PENDING",
        "",
        "",
        ""
      );
      setServicesStatus(false)
    }
    if (status === "ACCEPTED") {
      FetchDataOFMyServices2(
        "ACCEPTED",
        "IN_PROGRESS",
        "IN_DELIVERY",
        ""
      );
      setServicesStatus(false)
    }
    if (status === "COMPLETED") {
      FetchDataOFMyServices2("DELIVERED", "COMPLETED", "", "");
      setServicesStatus(false)
    }
    if (status === "REJECTED") {
      FetchDataOFMyServices2("REJECTED", "CANCELED", "", "");
      setServicesStatus(false)
    }
    console.log("reFresh");
  }, [status]);
console.log(services);
  const FetchDataOFMyServices = async () => {
    const Services = await getMyServices();
    if (!Services) console.log(Services?.message);
    setServices(Services.data.filter(item=>item.user_service!== null));
    setLoading(false)
  };
  const FetchDataOFMyServices2 = async (p1, p2, p3, p4) => {
    const Services = await getMyServices2(p1, p2, p3, p4);
    if (!Services) console.log(Services?.message);
    setServices2(Services.data.filter(item=>item.user_service!== null));
    setLoading(false)
  };

  const handelDelete = (id) => { 
    const po = api
      .delete(
        `api/v1/users/services/${id}`,

        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")} `,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
            country_id:Cookies.get('countryID')
          },
        }
      )
      .then((res) => {
        FetchDataOFMyServices()
        alert('Message: ' + "Delete Services Is Done");
        console.log(res);
      })
      .catch((res) => {
        alert('An error occurred: ' + res.message);
        console.log(res);
      });
  };

  const handelStatus = (id,status) => {
    const po = api
      .post(
        "api/v1/users/orders/change-status",
        {
          "id": id,
          "status": status,
        

        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")} `,
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
        alert('An error occurred: ' + res.message);
        console.log(res);
      }); 
  };
  return (
    <>
     
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account">{t("account")}</Link>
              </li>
              <li>
                <Link href="/account/myServices" className="active">
                 {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/account/myFavourite" >{t("favourites")}</Link>
              </li>
              <li>
                <Link href="/account/prmoted">{t("promotion")}</Link>
              </li>
              <li>
                <Link href="/account/myOrders">{t("myOrders")}</Link>
              </li>
              <li>
                <Link href="/account/addressess">{t("addresses")}</Link>
              </li>
              <li>
                <BtnLogOut />
              </li>
            </ul>
          </div>
          <div className="Profile Profile2">
            <div className="warning">
              <img src="/images/warning.webp" alt="warning" />
              <div className="about_warning">
                <h3>{t("careful")}</h3>
                <p>
                 {t("yourRatings")}
                </p>
              </div>
            </div>
            <div className="type_Services">
              <button
                onClick={() => {
                  setStatus("Services");
                }}
                className={status === "Services" ? "active" : ""}
              >
               {t("services")}
              </button>
              <button
                onClick={() => {
                  setStatus("PENDING");
                }}
                className={status === "PENDING" ? "active" : ""}
              >
               {t("requests")}
              </button>
              <button
                onClick={() => {
                  setStatus("ACCEPTED");
                }}
                className={status === "ACCEPTED" ? "active" : ""}
              >
                 {t("upComing")}
              </button>
              <button
                onClick={() => {
                  setStatus("COMPLETED");
                }}
                className={status === "COMPLETED" ? "active" : ""}
              >
                {t("completed")}
              </button>
              <button
                onClick={() => {
                  setStatus("REJECTED");
                }}
                className={status === "REJECTED" ? "active" : ""}
              >
               {t("rejected")}
              </button>
            </div>
            <section className="services container m90">
              <div className="allServices">
             
                {
                   ServicesStatus&& services?.map((service) => {
                    return (
                      <div className="service" key={service.id}>
                       
                          <div className="del_edit">
                            <button
                              className="delete"
                              onClick={() => {
                                handelDelete(service.id);
                              }}
                            >
                              <img src="/images/delete.svg" alt="delete" />
                            </button>
                            <button className="edit" onClick={()=>{router.push(`/add_New_Services/${service.id}`)}}>
                              <img src="/images/edit.svg" alt="edit" />
                            </button>
                          </div>
                        <img
                          src={
                            service.images?.length > 0
                              ? service.images[0].url
                              : `/images/Logo.svg`
                          }
                          className="imgService"
                          alt="service"
                        />
                        <div className="aboutservice">
                          <div className="head">
                            <h3>{getLocal(locale,service.description)}</h3>
                            <div className="Star">
                              <img src="/images/star.svg" alt="star" />
                              <p>4.8</p>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <img
                                src="/images/Time-Circle.svg"
                                alt="Time-Circle"
                              />
                              <p>
                                {service.work_times?.time_from} to{" "}
                                {service.work_times?.time_to}
                              </p>
                            </li>
                            <li>
                              <img src="/images/Location.svg" alt="Location" />
                              <p>{getLocal(locale,service.address_text)}</p>
                            </li>
                          </ul>
                          <div className="salary_pay">
                            <div className="salary">
                              {/* <span className="sall">2000 EGP</span> */}
                              <p>
                                {service.price}{" "}
                                {service.currency}
                              </p>
                            </div>
                            {
                              service.featured_expires_at&&<div className="recommented">
                              <h4>Recommented</h4>
                              <h5>Expired 5 May 2023</h5>
                            </div>
                            }
                            
                          </div>
                         
                          
                        </div>
                      </div>
                    );
                  })
                }
               
               {
                !ServicesStatus&& 
                services2?.map((service) => {
                  return (
                    <div className="service" key={service.id}>
                   
                    
                        <Link
                          href={`/account/myOrders/${service.id}`}
                          className="client_details"
                        >
                          <p>{t("providerDetails")}</p>
                          <img src="/images/Arrow.svg" alt="Arrow" />
                        </Link>
                    
                      <img
                        src={
                          service.user_service.images?.length > 0
                            ? service.user_service.images[0].url
                            : `/images/Logo.svg`
                        }
                        className="imgService"
                        alt="service"
                      />
                      <div className="aboutservice">
                        <div className="head">
                          <h3>{getLocal(locale,service.user_service.description) }</h3>
                          <div className="Star">
                            <img src="/images/star.svg" alt="star" />
                            <p>4.8</p>
                          </div>
                        </div>
                        <ul>
                          {status === "COMPLETED" ? (
                            <li
                              className="complete"
                              style={{
                                color: "#2d7700",
                                fontSize: "12px",
                                fontFamily: "DM Sans2",
                              }}
                            >
                              {t("completed")}
                            </li>
                          ) : null}
                          <li>
                            <img
                              src="/images/Time-Circle.svg"
                              alt="Time-Circle"
                            />
                            <p>
                              {service.user_service.work_times?.time_from} to{" "}
                              {service.user_service.work_times?.time_to}
                            </p>
                          </li>
                          <li>
                            <img src="/images/Location.svg" alt="Location" />
                            <p>{getLocal(locale,service.user_service.address_text)}</p>
                          </li>
                        </ul>
                        <div className="salary_pay">
                          <div className="salary">
                            {/* <span className="sall">2000 EGP</span> */}
                            <p>
                              {service.user_service.price}{" "}
                              {service.user_service.currency}
                            </p>
                          </div>
                          <div className="recommented">
                            <h4>Recommented</h4>
                            <h5>Expired 5 May 2023</h5>
                          </div>
                        </div>
                        {status === "PENDING" && (
                          <div className="acc_rej">
                            <button className="accept" onClick={()=>handelStatus(service.id,"ACCEPTED")}>{t("accepted")}</button>
                            <button className="reject" onClick={()=>handelStatus(service.id,"REJECTED")}>{t("reject")}</button>
                          </div>
                        )}
                        {status === "ACCEPTED" && (
                          <div className="acc_rej">
                            <button className="accept" onClick={()=>handelStatus(service.id,"COMPLETED")}>{t("completed")}</button>
                            <button className="reject" onClick={()=>handelStatus(service.id,"CANCELED")}>{t("camera")}</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                  
                  
                
                })
               }
 {Loading && (
              <div className="loadItems" style={{width:"100%"}}>
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
              
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
