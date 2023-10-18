"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NaVBar";
import Footer from "./Footer";
import Script from "next/script";
import { RecoilRoot} from "recoil";
import { getCountryUser, getHomePage } from "../useAPI/GetUser";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


function Layout({ children, lang }) {
  const [CountryID, setCountryID] = useState("");
const router = useRouter()
  useEffect(() => {
    !Cookies.get("country") && getCountry();
  }, []);
  console.log(Cookies.get("country") ? true : false);
  const getCountry = async () => {
    const CountryUser2 = await getCountryUser();
    console.log(CountryUser2);
    const HomePage = await getHomePage(54);
    setCountryID(CountryUser2.country);
    Cookies.set("country", CountryUser2.country);
    HomePage.countries.map((item) =>
      item.name.en == CountryUser2.country
        ? Cookies.set("countryID", item.id)
        : null
    );
    router.refresh()
  };
console.log(CountryID);
useEffect(()=>{},[CountryID])

  return (
    <>
      <RecoilRoot>
        {CountryID&& (
          <>
            <NavBar lang={lang} />
            {children}
            <Footer lang={lang} />
          </>
        )}

        <Script async src="/js/jquery-3.6.1.min.js" />
      </RecoilRoot>
    </>
  );
}

export default Layout;
