"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { getMyServices, getMyServices2 } from "@/components/useAPI/shop/shop";
import axios from "axios";

function page() {
  const [services, setServices] = useState([]);
  const [services2, setServices2] = useState([]);
  const [status, setStatus] = useState("Services");
  const [ServicesStatus, setServicesStatus] = useState(true);
  useEffect(() => {
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
  };
  const FetchDataOFMyServices2 = async (p1, p2, p3, p4) => {
    const Services = await getMyServices2(p1, p2, p3, p4);
    if (!Services) console.log(Services?.message);
    setServices2(Services.data.filter(item=>item.user_service!== null));
  };

  const handelDelete = (id) => { 
    const po = axios
      .delete(
        `https://findhelpapp.com/api/v1/users/services/${id}`,

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
        alert('Message: ' + res.data.message);
        console.log(res);
      })
      .catch((res) => {
        alert('An error occurred: ' + res.message);
        console.log(res);
      });
  };

  const handelStatus = (id,status) => {
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/orders/change-status",
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
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>

            <li className="breadcrumb-item" aria-current="page">
              Account
            </li>
            <li className="breadcrumb-item" aria-current="page">
              My Services
            </li>
            <li className="breadcrumb-item" aria-current="page">
              All Services
            </li>
          </ol>
        </nav>
      </div>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account">My Profile</Link>
              </li>
              <li>
                <Link href="/account/myServices" className="active">
                  My services
                </Link>
              </li>
              <li>
                <Link href="/account/prmoted">Promotion</Link>
              </li>
              <li>
                <Link href="/account/myOrders">My Orders</Link>
              </li>
              <li>
                <Link href="/account/addressess">Addresses</Link>
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
                <h3>Be careful!</h3>
                <p>
                  Your ratings have become low, please work to improve your
                  service.
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
                My Services
              </button>
              <button
                onClick={() => {
                  setStatus("PENDING");
                }}
                className={status === "PENDING" ? "active" : ""}
              >
                Requests
              </button>
              <button
                onClick={() => {
                  setStatus("ACCEPTED");
                }}
                className={status === "ACCEPTED" ? "active" : ""}
              >
                Up Coming
              </button>
              <button
                onClick={() => {
                  setStatus("COMPLETED");
                }}
                className={status === "COMPLETED" ? "active" : ""}
              >
                Completed
              </button>
              <button
                onClick={() => {
                  setStatus("REJECTED");
                }}
                className={status === "REJECTED" ? "active" : ""}
              >
                Rejected
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
                            <button className="edit">
                              <img src="/images/edit.svg" alt="edit" />
                            </button>
                          </div>
                        <img
                          src={
                            service.images?.length > 0
                              ? service.images[0].url
                              : `/images/logo.svg`
                          }
                          className="imgService"
                          alt="service"
                        />
                        <div className="aboutservice">
                          <div className="head">
                            <h3>{service.description.en}</h3>
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
                              <p>{service.address_text.en}</p>
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
                          <p>Provider Details</p>
                          <img src="/images/Arrow.svg" alt="Arrow" />
                        </Link>
                    
                      <img
                        src={
                          service.user_service.images?.length > 0
                            ? service.user_service.images[0].url
                            : `/images/logo.svg`
                        }
                        className="imgService"
                        alt="service"
                      />
                      <div className="aboutservice">
                        <div className="head">
                          <h3>{service.user_service.description.en}</h3>
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
                              Completed
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
                            <p>{service.user_service.address_text.en}</p>
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
                            <button className="accept" onClick={()=>handelStatus(service.id,"ACCEPTED")}>Accept</button>
                            <button className="reject" onClick={()=>handelStatus(service.id,"REJECTED")}>Reject</button>
                          </div>
                        )}
                        {status === "ACCEPTED" && (
                          <div className="acc_rej">
                            <button className="accept" onClick={()=>handelStatus(service.id,"COMPLETED")}>Completed</button>
                            <button className="reject" onClick={()=>handelStatus(service.id,"CANCELED")}>Cancel</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                  
                  
                
                })
               }

                <div className="service">
                  <img
                    src="/images/service1.webp"
                    className="imgService"
                    alt="service"
                  />
                  <div className="aboutservice">
                    <div className="head">
                      <h3>Alloy Wheel Repairs Derby</h3>
                      <div className="Star">
                        <img src="/images/star.svg" alt="star" />
                        <p>4.8</p>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <img src="/images/Time-Circle.svg" alt="Time-Circle" />
                        <p>9:00 AM to 10:00 PM</p>
                      </li>
                      <li>
                        <img src="/images/Location.svg" alt="Location" />
                        <p>sidi bisher, alex</p>
                      </li>
                    </ul>
                    <div className="salary_pay">
                      <div className="salary">
                        <p>2000 EGP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
