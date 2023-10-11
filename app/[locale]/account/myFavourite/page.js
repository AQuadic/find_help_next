"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { useLocale, useTranslations } from "next-intl";
import { getLocal } from "@/components/useAPI/Auth";
import { Skeleton } from "@mantine/core";
import ItemCourse from "@/components/ItemCourse";
import { getMyFav } from "@/components/useAPI/shop/shop";
function page() {
  const [MyFav, setMyFav] = useState([]);

  const [Loading, setLoading] = useState(true);

  const t = useTranslations("Account");
  const locale = useLocale()
  useEffect(() => {
    setLoading(true)
    FetchDataOFMyFav()
    
  }, []);
  const FetchDataOFMyFav = async () => {
    const Fav = await getMyFav();
    if (!Fav) console.log(Fav?.message);
    console.log(Fav.services);
   setMyFav(Fav.services)
   setLoading(false)
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
                <Link href="/account/myFavourite" className="active">{t("favourites")}</Link>
              </li>
              <li>
                <Link href="/account/prmoted">{t("promotion")}</Link>
              </li>
              <li>
                <Link href="/account/myOrders" >
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
            <h2>{t("favourites")}</h2>
           

            <section className="services container m90">
              <div className="allServices">
                {
                  MyFav.map((item) => {
return(
    <ItemCourse
    key={item.id}
      title={getLocal(locale, item.description)}
      star="4.8"
      loc={getLocal(locale, item.address_text)}
      timeFrom={item.work_times?.time_from}
      timeTo={item.work_times?.time_to}
      oldsalary=""
      newsalary={item.price}
      img={item.images}
      id={item.id}
      category_id={item.category_id}
      fav={item.is_favourite}
    />
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
