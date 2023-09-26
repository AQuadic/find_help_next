"use client";
import { Group, Radio } from '@mantine/core'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
  const [date, setDate] =useState()
  const t = useTranslations("checkOut");

  console.log(date);
  return (
   <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   <div className="container breadcrumbDetails">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
          <li className="breadcrumb-item" aria-current="page">Check Out</li>
        </ol>
      </nav>
    </div>

    <section className="checkOut container m90">
      <div className="part1">
        <h2 className="headtitle">{t("title")}</h2>
        <form className="box">
          <div className="box1">
      
            <h3>{t("serviceMethod")}</h3>
            <Radio.Group
      name="favoriteFramework"
    >
      <Group mt="xs" >
        <Radio value="pick" label={t("pickUp")} />
        <Radio value="Delivery" label={t("delivery")} />
      
      </Group>
    </Radio.Group>
          </div>
          <div className="box1">
            <h3>{t("address")}</h3>
            <div className="add">
              <img src="/images/address.svg" alt="address" />
              <Link href="/address" style={{fontFamily: "DM Sans3"}}
                >{t("addAddress")}
                </Link>
              <div className="about_add" style={{display: "none"}}>
                <p>
                  66 Youssef Ghaly Street, Miami , Alexandria. Appointment No.
                  22 Floor No.4
                </p>
                <p>+20 154 256 1235</p>
              </div>
            </div>
          </div>
          <div className="box1">
            <h3>{t("paymentMethod")}</h3>
            <Radio.Group
      name="favoriteFramework"
    >
      <Group mt="xs" >
        <Radio value="Cash" label={t("cash")}/>
        <Radio value="Credit" label={t("credit")} />
      
      </Group>
    </Radio.Group>
           
          </div>
          <div className="box1">
            <h3>{t("date")}</h3>
            <DatePicker label="Basic date picker" placeholder={t("selectDate")}
             defaultValue={dayjs("2022-04-17")}
      value={date}
      onChange={(e)=>setDate( e.$d.toLocaleDateString("en-US"))} />
      

          
          </div>
          <input type="submit" value={t("placeOrder")} className="btn_page" />
        </form>
      </div>
      <div className="part2">
        <h2 className="headtitle">{t("title2")}</h2>
        <div className="box">
          <ul>
            <li>
              <h3>{t("provider")}</h3>
              <h4>Muhammed Ahmed</h4>
            </li>
            <li>
              <h3>{t("serviceType")}</h3>
              <h4>Repair car’s Wheels</h4>
            </li>
            <li className="amount">
              <h3>{t("amount")}</h3>
              <h4>2500 EGP</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </LocalizationProvider>
   </>
  )
}

export default page