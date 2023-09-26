"use client";
import React, { useEffect, useState } from "react";
import { getSingleServices } from "../useAPI/shop/shop";
import { useTranslations } from "next-intl";

function ViewCheck({ id }) {
  const [services, setServices] = useState([]);
  const t = useTranslations("checkOut");  
  console.log(id);
  useEffect(() => {
    FetchDataOFSingleServices();
  }, []);
  const FetchDataOFSingleServices = async () => {
    const Services = await getSingleServices(id);
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  console.log(services);

  return (
    services.id > 0 && (
      <>
        <div className="part2">
          <h2 className="headtitle">{t("title2")}</h2>
          <div className="box">
            <ul>
              <li>
                <h3>{t("provider")}</h3>
                <h4>{services?.user.name}</h4>
              </li>
              <li>
                <h3>{t("serviceType")}</h3>
                <h4>{services?.sub_category.name.en}</h4>
              </li>
              <li className="amount">
                <h3>{t("amount")}</h3>
                <h4>
                  {services?.price} {services?.currency}
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  );
}

export default ViewCheck;
