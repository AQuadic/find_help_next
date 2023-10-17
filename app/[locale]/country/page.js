"use client";
import { getHomePage } from "@/components/useAPI/GetUser";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

function page() {
  const [countries, setCountries] = useState([]);
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);

    setCountries(HomePage.countries);
  };
  useEffect(() => {
    FetchDataOFData();
  }, []);
  console.log(countries);
  return (
    <div className="Country container  m90">
        <h2>select Country</h2>
      <div className="allCountry">
        {countries?.map((country) => {
          return (
            <div className="boxCountry">
              <ReactCountryFlag countryCode={country.name.en} />

              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title={country.name.en}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
