"use client";
import Link from "next/link";
import React from "react";
import BtnLogOut from "@/components/btnLogOut";
import { useTranslations } from "next-intl";
function page() {
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
          <div className="Profile Prmoted">
            <div className="content">
              <div className="info_content">
                <h2>{t("goPromoted")}</h2>
                <p>{t("noCommitment")}</p>
                <h3>{t("takeBusiness")}</h3>
                <ul>
                  <li>
                    <img src="/images/recommend.webp" alt="recommend" />
                    <h4>{t("recommendation")}</h4>
                  </li>
                  <li>
                    <img src="/images/top_search.webp" alt="top_search" />
                    <h4>{t("top")}</h4>
                  </li>
                </ul>
                <Link
                  href="/account/prmoted/selectServices"
                  className="btn_page"
                >
                  {t("getPromoted")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
