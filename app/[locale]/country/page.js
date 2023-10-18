"use client";
import { UserCountry } from "@/atoms";
import { getLocal } from "@/components/useAPI/Auth";
import { getCountryUser, getHomePage } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useRecoilState } from "recoil";
function page() {
  const [countries, setCountries] = useState([]);
  const [UserCountry2, setUserCountry2] = useRecoilState(UserCountry);
const router = useRouter()
  const [Country, setCountry] = useState(Cookies.get("country") || "");
const locale = useLocale()
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setCountries(HomePage.countries);
  };
  useEffect(() => {
    FetchDataOFData();
  }, [Country]);
  return (
    <div className="Country container  m90">
      <h2>select Country</h2>
      <div className="allCountry">
        {countries?.map((country, i) => {
          return (
            <button
              onClick={() => {
                Cookies.set("countryID",country.id)
                setUserCountry2(getLocal(locale,country.name))
                Cookies.set("country",country.name.en);
                setCountry(country.name.en);
                router.back()
              }}
              key={i}
              className={`boxCountry  ${
                Cookies.get("country")
                  ? Cookies.get("country") == country.name.en
                    ? "active"
                    : null
                  : null
              } `}
            >
              <span>
                <ReactReadMoreReadLess
                  charLimit={8}
                  readMoreText={false}
                  readLessText={false}
                >
                  {getLocal(locale,country.name) }
                </ReactReadMoreReadLess>
              </span>

              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title={country.name.en}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default page;
