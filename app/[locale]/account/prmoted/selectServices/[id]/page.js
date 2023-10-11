"use client";
import Link from "next/link";
import React from "react";
import BtnLogOut from "@/components/btnLogOut";
import { useTranslations } from "next-intl";
function page({}) {
  const t = useTranslations("Account");

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
                <Link href="/account/myServices">{t("services")}</Link>
              </li>{" "}
              <li>
                <Link href="/account/myFavourite">{t("favourites")}</Link>
              </li>
              <li>
                <Link href="/account/prmoted" className="active">
                  {t("promotion")}
                </Link>
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
          <div className="Profile Profile3">
            <h2>{t("selectService")}</h2>
            <section className="services container m90">
              <div className="allServices">
                <button
                  className={`service  ${activeBtn === "btn1" ? "active" : ""}`}
                  onClick={() => handleButtonClick(1)}
                >
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
                </button>
                <button
                  className={`service  ${activeBtn === "btn2" ? "active" : ""}`}
                  onClick={() => handleButtonClick(2)}
                >
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
                        <p>2000 EGP</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  className={`service  ${activeBtn === "btn3" ? "active" : ""}`}
                  onClick={() => handleButtonClick(3)}
                >
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
                        <p>2000 EGP</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </section>
            <button className="btn_page">{t("pay")}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
