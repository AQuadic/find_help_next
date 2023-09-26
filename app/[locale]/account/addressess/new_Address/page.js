"use client";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import BtnLogOut from "@/components/btnLogOut";
import { Select, TextInput } from "@mantine/core";
import { getAreas, getCities, getHomePage } from "@/components/useAPI/GetUser";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Cookies from "js-cookie";
import axios from "axios";
import { useTranslations } from "next-intl";
const containerStyle = {
  width: "100%",
  height: "400px",
};
function page() {
  const [lat, setLat] = useState(-3.745);
  const [lng, setLng] = useState(-38.523);
  const t = useTranslations("Account");

  const [nameAddresse, setNameAddresse] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [areas, setAreas] = useState([]);
  const [areaID, setAreaID] = useState();
  const [addresse, setAddresse] = useState("");
  const [buildingNo, setBuildingNo] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState("EG");
  const [errorArea, setErrorArea] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorCountry, setErrorCountry] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onMapClick = useCallback((e) => {
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
  }, []);
  const center = {
    lat: lat,
    lng: lng,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [lat, lng]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  useEffect(() => {
    FetchDataOFData();
  }, []);
  useEffect(() => {
    if (country) {
      FetchDataOFCities();
    }
  }, [country]);
  useEffect(() => {
    if (city) {
      FetchDataOFAreas();
    }
  }, [city]);
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    HomePage.countries.map((itemCountries) => {
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setCountries((current) => [...current, item]);
    });
  };
  const FetchDataOFCities = async () => {
    const HomePage = await getCities(country);
    if (!HomePage) console.log(HomePage?.message);
    setCities([]);
    HomePage.map((itemCountries) => {
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setCities((current) => [...current, item]);
    });
  };

  const FetchDataOFAreas = async () => {
    const HomePage = await getAreas(city);
    if (!HomePage) console.log(HomePage?.message);
    setAreas([]);
    HomePage.map((itemCountries) => {
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setAreas((current) => [...current, item]);
    });
  };
  const handelNewAddresse = () => {
    setErrorArea("");
    setErrorCity("");
    setErrorCountry("");
    setErrorName("");
    setErrorPhone("");
    setErrorMessage("");
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/addresses",
        {
          name: nameAddresse,
          phone: phone,
          phone_country: phone_country,
          country_id: country,
          city_id: city,
          area_id: areaID,
          details: addresse,
          lat: lat,
          lng: lng,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "en",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        res.response.data.errors.area_id
          ? setErrorArea(res.response.data.errors.area_id)
          : setErrorArea("");
        res.response.data.errors.city_id
          ? setErrorCity(res.response.data.errors.city_id)
          : setErrorCity("");
        res.response.data.errors.country_id
          ? setErrorCountry(res.response.data.errors.country_id)
          : setErrorCountry("");
        res.response.data.errors.name
          ? setErrorName(res.response.data.errors.name)
          : setErrorName("");
        res.response.data.errors.phone
          ? setErrorPhone(res.response.data.errors.phone)
          : setErrorPhone("");
        res.response.data.message
          ? setErrorMessage(res.response.data.message)
          : setErrorMessage("");
        console.log(res);
      });
  };
  console.log(nameAddresse);
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Account
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Addressess
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Add New Address
            </li>
          </ol>
        </nav>
      </div>

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
                <Link href="/account/prmoted">{t("promotion")}</Link>
              </li>
              <li>
                <Link href="/account/myOrders">{t("myOrders")}</Link>
              </li>
              <li>
                <Link href="/account/addressess" className="active">
                {t("addresses")}
                </Link>
              </li>
              <li>
                <BtnLogOut />
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">{t("addAddress")}</h2>

            <form className="row g-3 form_page" style={{ maxWidth: "490px" }}>
              {/* <!-- map  --> */}

              <div className="map col-md-12">
                <label className="form-label">{t("selectLocation")}</label>
                {isLoaded ? (
                  <>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={8}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                      onClick={onMapClick}
                    >
                      {/* Child components, such as markers, info windows, etc. */}
                      <>
                        <Marker
                          position={{ lat: lat, lng: lng }}
                          icon={{
                            url: `/images/mapicon.png`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                          }}
                        />
                      </>
                    </GoogleMap>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-md-12">
                <TextInput
                  radius="md"
                  label={t("nameAddresse")}
                  placeholder={t("enterName")}
                  onChange={(e) => {
                    setNameAddresse(e.target.value);
                  }}
                  error={errorName}
                />
              </div>

              <div className="col-md-12">
                <Select
                  label={t("country")}
                  placeholder={t("enterCountry")}
                  searchable
                  clearable
                  nothingFound="No options"
                  transitionProps={{
                    transition: "pop-top-left",
                    duration: 80,
                    timingFunction: "ease",
                  }}
                  onChange={setCountry}
                  value={country}
                  data={countries}
                  error={errorCountry}
                />
              </div>
              <div className="col-md-12">
                <Select
                  label={t("city")}
                  placeholder={t("enterCity")}
                  searchable
                  clearable
                  nothingFound="No options"
                  transitionProps={{
                    transition: "pop-top-left",
                    duration: 80,
                    timingFunction: "ease",
                  }}
                  onChange={setCity}
                  value={city}
                  error={errorCity}
                  data={cities}
                />
              </div>
              <div className="col-md-12">
                <Select
                  label={t("area")}
                  placeholder={t("enterArea")}
                  searchable
                  clearable
                  nothingFound="No options"
                  transitionProps={{
                    transition: "pop-top-left",
                    duration: 80,
                    timingFunction: "ease",
                  }}
                  onChange={setAreaID}
                  value={areaID}
                  error={errorArea}
                  data={areas}
                />
              </div>
              <div className="col-md-12">
                <TextInput
                  radius="md"
                  label={t("address")}
                  placeholder={t("enterAddress")}
                  onChange={(e) => {
                    setAddresse(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-6">
                <TextInput
                  radius="md"
                  label={t("building")}
                  placeholder={t("enterBuilding")}
                  onChange={(e) => {
                    setBuildingNo(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <TextInput
                  radius="md"
                  label={t("building2")}
                  placeholder={t("enterBuilding")}
                  onChange={(e) => {
                    setBuildingName(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                {t("mobile")}
                </label>

                <PhoneInput
                  defaultCountry="EG"
                  placeholder={t("enterMobile")}
                  className="form-control"
                  value={phone}
                  onCountryChange={(e) => setPhone_country(e)}
                  onChange={setPhone}
                />
                {errorPhone && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "4px",
                    }}
                  >
                    {errorPhone}
                  </p>
                )}
              </div>
            </form>

            <input
              type="submit"
              value={t("btnAddAddress")}
              className="btn_page btn_Address"
              onClick={(e) => {
                e.preventDefault();
                handelNewAddresse();
              }}
            />
            {errorMessage && (
              <p
                style={{
                  color: "red",
                  textAlign: "end",
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
