"use client";
import ViewCheck from '@/components/compPage/ViewCheck';
import { getHomePage } from '@/components/useAPI/GetUser';
import { getSingleServices } from '@/components/useAPI/shop/shop';
import { Group, Radio } from '@mantine/core'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const [date, setDate] =useState()
  const [paymentValue, setPayment] = useState("1");
  const [payment_methods, setPayment_methods] =useState([])
  const [services, setServices] =useState([])
  const t = useTranslations("checkOut");  
  const SearchParams = useSearchParams()
  const router = useRouter()
const ServiceID = SearchParams.get("id");
console.log(ServiceID);
  console.log(date);
  console.log(payment_methods);
  useEffect(()=>{
    FetchDataOFData()
    FetchDataOFSingleServices()
  },[])
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setPayment_methods(HomePage.payment_methods);
  };

  

  const FetchDataOFSingleServices = async () => {
    const Services = await getSingleServices(ServiceID);
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  console.log(services);
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
{
  services.id&&<section className="checkOut container m90">
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
         <Link  href={{
            pathname: "checkOut/address",
            query: { id: services.id},
          }} style={{fontFamily: "DM Sans3"}}
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
  name="favoriteFramework2"
  onChange={setPayment}
  value={paymentValue}
>
  <Group mt="xs" >
  {
      payment_methods.map((payment)=>{
       
        return(
          <Radio key={payment.id} value={(payment.id).toString()} label={payment.name.en} />
        )
      })
    }
  
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
  <ViewCheck id={ServiceID}/>
  
</section>
}
    
    </LocalizationProvider>
   </>
  )
}

export default page