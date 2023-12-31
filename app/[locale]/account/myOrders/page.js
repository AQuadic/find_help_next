"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { getMyOrders } from "@/components/useAPI/shop/shop";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { getLocal } from "@/components/useAPI/Auth";
import { Skeleton } from "@mantine/core";
import api from "../../api";
function page() {
  const [MyOrder, setMyOrder] = useState([]);
  const [status, setStatus] = useState("PENDING");
  const [Loading, setLoading] = useState(true);

  const t = useTranslations("Account");
  const locale = useLocale()
  useEffect(() => {
    setLoading(true)
    if(status==="PENDING"){
      FetchDataOFMyOrder("PENDING","ACCEPTED","IN_PROGRESS","IN_DELIVERY");
    }
    if(status==="COMPLETED"){
      FetchDataOFMyOrder("DELIVERED","COMPLETED","","");
    }
    if(status==="REJECTED"){
      FetchDataOFMyOrder("REJECTED","CANCELED","","");
    }
    
  }, [status]);
  const FetchDataOFMyOrder = async (p1,p2,p3,p4) => {
    const Orders = await getMyOrders(p1,p2,p3,p4);
    if (!Orders) console.log(Orders?.message);
    setMyOrder(Orders.data.filter(item=>item.user_service!== null));
    setLoading(false)
  };
  console.log(MyOrder);


  const handelStatus = (id) => {
    const po = api
      .post(
        "api/v1/users/orders/change-status",
        {
          "id": id,
          "status": "CANCELED",
        

        },
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
        alert('Message: ' + res.data.message);
        console.log(res);
        if(res.status==200){
          FetchDataOFMyOrder("PENDING","ACCEPTED","IN_PROGRESS","IN_DELIVERY")
        }
        
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
                <Link href="/account/myServices">{t("services")}</Link>
              </li>
              <li>
                <Link href="/account/myFavourite" >{t("favourites")}</Link>
              </li>
              <li>
                <Link href="/account/prmoted">{t("promotion")}</Link>
              </li>
              <li>
                <Link href="/account/myOrders" className="active">
                {t("myOrders")}
                </Link>
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
            <h2>{t("myOrders")}</h2>
            <div className="type_Services">
              <button onClick={()=>{setStatus("PENDING")}}   className={status==="PENDING"?"active":""}>{t("upComing")}</button>
              <button onClick={()=>{setStatus("COMPLETED")}}  className={status==="COMPLETED"?"active":""}  >{t("completed")}</button>
              <button onClick={()=>{setStatus("REJECTED")}}   className={status==="REJECTED"?"active":""}>{t("rejected")}</button>
            </div>

            <section className="services container m90">
              <div className="allServices">
                {
                  MyOrder.map((order) => {
return(
  <div className="service" key={order.id}>
  <Link
    href={`/account/myOrders/${order.id}`}
    
    className="client_details"
  >
    <p>{t("providerDetails")}</p>
    <img src="/images/Arrow.svg" alt="Arrow" />
  </Link>
  <img
    src={
      order.user_service.images?.length > 0
        ? order.user_service.images[0].url
        : `/images/Logo.svg`
    }
    className="imgService"
    alt="service"
  />
  <div className="aboutservice">
    <div className="head">
      <h3>{getLocal(locale,order.user_service.description) }</h3>
      <div className="Star">
        <img src="/images/star.svg" alt="star" />
        <p>4.8</p>
      </div>
    </div>
    <ul>
      {
        status==="COMPLETED"?
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
        :null
      }
      <li>
        <img
          src="/images/Time-Circle.svg"
          alt="Time-Circle"
        />
        <p>
          {order.user_service.work_times?.time_from} to{" "}
          {order.user_service.work_times?.time_to}
        </p>
      </li>
      <li>
        <img
          src="/images/Location.svg"
          alt="Location"
        />
        <p>{getLocal(locale,order.user_service.address_text)}</p>
      </li>
    </ul>
    <div className="salary_pay">
      <div className="salary">
        {/* <span className="sall">2000 EGP</span> */}
        <p>
          {order.user_service.price}{" "}
          {order.user_service.currency}
        </p>
      </div>
      {
        status==="PENDING"&& <button className="cancel" onClick={()=>handelStatus(order.id)}>{t("cancelOrder")}</button>
      }
     
    </div>
  </div>
</div>
)
                       
                     
                  })}
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
