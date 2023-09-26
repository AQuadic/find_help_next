
"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'

function page() {
  const t = useTranslations("Services");

  return (
    <>
     <section className="checkOut container m90">
      <div className="successfully content_center">
        <img src="/images/investmentdata.webp" alt="investmentdata" />
        <h2>{t("addServices")}</h2>
        <p>
         {t("opportunity")}
        </p>
        <Link
          href="/add_New_Services"
          className="btn_page"
          style={{width:"300px",maxWidth:"80%",margin:" 30px auto 0px",height:"50px"}}
          >{t("addServicesBtn")}
          </Link>
      </div>
    </section>
    </>
  )
}

export default page

