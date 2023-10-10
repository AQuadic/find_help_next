"use client";
import ViewCheck from "@/components/compPage/ViewCheck";
import { getLocal } from "@/components/useAPI/Auth";
import { getHomePage, getUserLocation } from "@/components/useAPI/GetUser";
import { getSingleServices } from "@/components/useAPI/shop/shop";
import { Group, Radio, TextInput, Textarea } from "@mantine/core";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const locale = useLocale()
  const [date, setDate] = useState();
  const [paymentValue, setPayment] = useState("1");
  const [serviceMethod, setServiceMethod] = useState("1");
  const [nots, setNots] = useState("");
  const [adresse, setAdresse] = useState([]);

  const [payment_methods, setPayment_methods] = useState([]);
  const [services, setServices] = useState([]);
  const t = useTranslations("checkOut");
  const SearchParams = useSearchParams();
  const ServiceID = SearchParams.get("id");

  console.log(ServiceID);
  console.log(date);
  console.log(paymentValue);
  console.log(serviceMethod);
  console.log(nots);
  console.log(adresse);
  useEffect(() => {
    FetchDataOFData();
    FetchDataOFSingleServices();
    FetchDataOFLocation();
  }, []);

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
  const FetchDataOFLocation = async () => {
    const Locations = await getUserLocation();
    if (!Locations) console.log(Locations?.message);
    setAdresse(Locations.filter((item) => item.id === +Cookies.get("AdID")));
  };
  const handelCheckOut = () => {
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/orders",
        {
          "type": "quotation",
          "user_service_id": ServiceID,
          "delivery": serviceMethod,
          "address_id":adresse[0].id,
          "payment_method_id": paymentValue,
          "notes": nots,
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
       
       
        console.log(res);
      });
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       
        {services.id && (
          <section className="checkOut container m90">
            <div className="part1">
              <h2 className="headtitle">{t("title")}</h2>
              <form className="box">
                <div className="box1">
                  <h3>{t("serviceMethod")}</h3>
                  <Radio.Group
                    name="favoriteFramework"
                    onChange={setServiceMethod}
                    value={serviceMethod}
                  >
                    <Group mt="xs">
                      <Radio value="1" label={t("pickUp")} />
                      <Radio value="2" label={t("delivery")} />
                    </Group>
                  </Radio.Group>
                </div>
                <div className="box1">
                  <h3>{t("address")}</h3>
                  <div className="add" >
                    
                    {adresse.length ? (
                      <>
                     
                      <div className="about_add" style={{display:"flex",gap:"6px"}}>
                      <img src="/images/address.svg" alt="address" />
                        <p>
                         {adresse[0].details}
                        </p>
                      </div>
                      <Link
                        href={{
                          pathname: "checkOut/address",
                          query: { id: services.id },
                        }}
                        style={{ fontFamily: "DM Sans2",marginTop:"6px",display:"block" }}
                      >
                       Change Adresse
                      </Link>
                      </>
                    ) : (
                      <>
                      
                      <img src="/images/address.svg" alt="address" />
                      <Link
                        href={{
                          pathname: "checkOut/address",
                          query: { id: services.id },
                        }}
                        style={{ fontFamily: "DM Sans3" }}
                      >
                        {t("addAddress")}
                      </Link>
                      </>
                     
                    )}
                  </div>
                </div>
                <div className="box1">
                  <h3>{t("paymentMethod")}</h3>
                  <Radio.Group
                    name="favoriteFramework2"
                    onChange={setPayment}
                    value={paymentValue}
                  >
                    <Group mt="xs">
                      {payment_methods.map((payment) => {
                        return (
                          <Radio
                            key={payment.id}
                            value={payment.id.toString()}
                            label={getLocal(locale,payment.name)}
                          />
                        );
                      })}
                    </Group>
                  </Radio.Group>
                </div>
                <div className="box1">
                  <h3>{t("date")}</h3>
                  <DatePicker
                    label="Basic date picker"
                    placeholder={t("selectDate")}
                    defaultValue={dayjs("2022-04-17")}
                    value={date}
                    onChange={(e) => setDate(e.$d.toLocaleDateString("en-US"))}
                  />
                </div>
                <div className="box1">
                  <h3>{t("nots")}</h3>
                  <Textarea
                    placeholder={t("nots")}
                    onChange={(e) => {
                      setNots(e.target.value);
                    }}
                    value={nots}
                  />
                </div>
                <input
                  type="submit"
                  value={t("placeOrder")}
                  className="btn_page"
                  onClick={(e)=>{e.preventDefault();handelCheckOut()}}
                />
              </form>
            </div>
            <ViewCheck id={ServiceID} />
          </section>
        )}
      </LocalizationProvider>
    </>
  );
}

export default page;
