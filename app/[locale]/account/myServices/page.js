"use client"
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";
import BtnLogOut from "@/components/btnLogOut";


function page() {
 
  return (
    <>
      <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">My Services</li>
          <li className="breadcrumb-item" aria-current="page">All Services</li>
        </ol>
      </nav>
    </div>
    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" >My Profile</Link></li>
            <li><Link href="/account/myServices"  className="active">My services</Link></li>
            <li><Link href="/account/prmoted" >Promotion</Link></li>
            <li><Link href="/account/myOrders" >My Orders</Link></li>
            <li><Link href="/account/addressess"  >Addresses</Link></li>
           <li><BtnLogOut/></li>
          </ul>
        </div>
        <div className="Profile Profile2">
          <div className="warning">
            <img src="images/warning.webp" alt="warning" />
            <div className="about_warning">
              <h3>Be careful!</h3>
              <p>
                Your ratings have become low, please work to improve your
                service.
              </p>
            </div>
          </div>
          <div className="type_Services">
            <button className="active">My Services</button>
            <button>Requests</button>
            <button>Up Coming</button>
            <button>Completed</button>
            <button>Rejected</button>
          </div>
          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <div className="del_edit">
                  <button className="delete">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                  <button className="edit">
                    <img src="/images/edit.svg" alt="edit" />
                  </button>
                </div>
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
                      <span className="sall">2000 EGP</span>
                      <p>1000 EGP</p>
                    </div>
                    <div className="recommented">
                      <h4>Recommented</h4>
                      <h5>Expired 5 May 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
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
          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                      <span className="sall">2000 EGP</span>
                      <p>1000 EGP</p>
                    </div>
                    <div className="recommented">
                      <h4>Recommented</h4>
                      <h5>Expired 5 May 2023</h5>
                    </div>
                  </div>
                  <div className="acc_rej">
                    <button className="accept">Accept</button>
                    <button className="reject">Reject</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                  <div className="acc_rej">
                    <button className="accept">Accept</button>
                    <button className="reject">Reject</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                  <div className="acc_rej">
                    <button className="accept">Accept</button>
                    <button className="reject">Reject</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                      <span className="sall">2000 EGP</span>
                      <p>1000 EGP</p>
                    </div>
                    <div className="recommented">
                      <h4>Recommented</h4>
                      <h5>Expired 5 May 2023</h5>
                    </div>
                  </div>
                  <div className="acc_rej">
                    <button className="accept">Completed</button>
                    <button className="reject">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                  <div className="acc_rej">
                    <button className="accept">Completed</button>
                    <button className="reject">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails2.html" className="client_details">
                  <p>Client Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                  <div className="acc_rej">
                    <button className="accept">Completed</button>
                    <button className="reject">Cancel</button>
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
