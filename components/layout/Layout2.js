"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NaVBar";
import Footer from "./Footer";
import { getCountryUser, getHomePage } from "../useAPI/GetUser";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserCountry } from "@/atoms";
import { useRecoilState } from "recoil";
import IPinfoWrapper from "node-ipinfo";


function Layout2({ children, lang }) {
  const [CountryID, setCountryID] = useState("");
  const [UserCountry2, setUserCountry2] = useRecoilState(UserCountry);
  const router = useRouter();
  useEffect(() => {
    getCountry();
  }, []);
  console.log(Cookies.get("country") ? true : false);
  const getCountry = async () => {
    const CountryUser2 = await getCountryUser();
    console.log(CountryUser2);
    const HomePage = await getHomePage(54);
    setCountryID(CountryUser2.country);
    Cookies.set("country", CountryUser2.country);
    HomePage.countries.map((item) =>
      item.code == CountryUser2.country
        ? Cookies.set("countryID", item.id)
        : null
    );
    router.refresh();
  };
    
  return (
    <>
      {Cookies.get("countryID") ? (
        <>
          <NavBar lang={lang} />
          <main>{children}</main>

          <Footer lang={lang} />
        </>
      ) : null}
    </>
  );
}

export default Layout2;
