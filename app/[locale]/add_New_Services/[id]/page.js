"use client";
import { getCities, getHomePage } from "@/components/useAPI/GetUser";
import {
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import Cookies from "js-cookie";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useLocale, useTranslations } from "next-intl";
import { getSingleServices } from "@/components/useAPI/shop/shop";
import { TailSpin } from "react-loader-spinner";
import { getLocal } from "@/components/useAPI/Auth";
import api from "../../api";
import { useRouter } from "next/navigation";
const containerStyle = {
  width: "100%",
  height: "400px",
};

function page({ params }) {
  const t = useTranslations("Services");
  const locale = useLocale();
const router = useRouter()
  const [Loading, setLoading] = useState(false);

  const [lat, setLat] = useState(-3.745);
  const [lng, setLng] = useState(-38.523);
  const onMapClick = useCallback((e) => {
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
  }, []);

  console.log(lat);

  const center = {
    lat: lat,
    lng: lng,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });

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
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formData = new FormData();
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState();
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [Subcategory, setSubCategory] = useState();
  const [Subcategories, setSubCategories] = useState([]);
  const [address, setAddress] = useState("");
  const [TimeFrom, setTimeFrom] = useState("");
  const [Timeto, setTimeto] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("EGP");
  const [AllCurrency, setAllCurrency] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedFile2, setSelectedFile2] = useState([]);
  const [holidays, setholidays] = useState([]);
  const [RMImagesID, setRMImagesID] = useState([]);
  const [address_Info, setaddress_Info] = useState("");
  //Error
  const [errorPhone, setErrorPhone] = useState();
  const [errorCountry, setErrorCountry] = useState();
  const [errorCity, setErrorCity] = useState();
  const [errorCategory, setErrorCategory] = useState();
  const [errorSubcategory, setErrorSubCategory] = useState();
  const [errorAddress, setErrorAddress] = useState("");
  const [errorTimeFrom, setErrorTimeFrom] = useState("");
  const [errorTimeto, setErrorTimeto] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorCurrency, setErrorCurrency] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorHolidays, setErrorholidays] = useState();
  const [errorLocationLat, setErrorLocationLat] = useState("");
  const [erroLocationLng, setErroLocationLng] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    country && setErrorCountry("");
    phone && setErrorPhone("");
    city && setErrorCity("");
    category && setErrorCategory("");
    Subcategory && setErrorSubCategory("");
    address && setErrorAddress("");
    TimeFrom && setErrorTimeFrom("");
    Timeto && setErrorTimeto("");
    price && setErrorPrice("");
    currency && setErrorCurrency("");
    description && setErrorDescription("");
    holidays && setErrorholidays("");
  }, [
    country,
    phone,
    city,
    category,
    Subcategory,
    address,
    TimeFrom,
    Timeto,
    price,
    currency,
    description,
    holidays,
  ]);
  useEffect(() => {
    FetchDataOFData();
    FetchDataOFSingleServices();
  }, []);
  useEffect(() => {
    if (country) {
      FetchDataOFCities();
    }
  }, [country]);
  useEffect(() => {
    if (category) {
      FetchDataOFCategory();
    }
  }, [category]);

  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    HomePage.countries.map((itemCountries) => {
      const item = {
        value: itemCountries.id,
        label: getLocal(locale, itemCountries.name),
      };
      setCountries((current) => [...current, item]);
    });
    HomePage.service_categories.map((itemservice_categories) => {
      const item = {
        value: itemservice_categories.id,
        label: getLocal(locale, itemservice_categories.name),
      };
      setCategories((current) => [...current, item]);
    });
    const items = [];
    HomePage.countries.map((county) => {
      const item = {
        value: county.currency.en,
        label: getLocal(locale, county.currency),
      };
      items.push(item);
    });
    const AllItem = Array.from(new Set(items.map(JSON.stringify))).map(
      JSON.parse
    );
    setAllCurrency(AllItem);
  };
  const FetchDataOFCategory = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setSubCategories([]);
    HomePage.service_categories
      .filter((item) => item.id === category)[0]
      .children.map((itemservice_categories) => {
        const item = {
          value: itemservice_categories.id,
          label: getLocal(locale, itemservice_categories.name),
        };
        setSubCategories((current) => [...current, item]);
      });
  };
  console.log(selectedFile);
  const FetchDataOFCities = async () => {
    const HomePage = await getCities(country);
    if (!HomePage) console.log(HomePage?.message);
    setCities([]);
    HomePage.map((itemCountries) => {
      const item = {
        value: itemCountries.id,
        label: getLocal(locale, itemCountries.name),
      };
      setCities((current) => [...current, item]);
    });
  };
  const handellogin = () => {
    setLoading(true);

    const url = new URL(
      `https://findhelpapp.com/api/v1/users/services/${params.id}`
    );
    const body = new FormData();
    body.append("phone", phone);
    body.append("work_times[time_from]", TimeFrom);
    body.append("work_times[time_to]", Timeto);
    body.append("description[ar]", description);
    body.append("description[en]", description);
    body.append("address_text[ar]", address);
    body.append("address_text[en]", address);
    body.append("price", price);
    body.append("currency", currency);
    body.append("category_id", category);
    body.append("sub_category_id", Subcategory);
    body.append("country_id", country);
    body.append("city_id", city);
    body.append("phone_country", phone_country);
    body.append("location[lat]", lat);
    body.append("location[lng]", lng);

    if (RMImagesID.length > 0) {
      RMImagesID.map((item, i) => {
        body.append(`remove_images[${i}]`, item);
      });
    }
    const HolidaysArray = {
      sat: holidays.includes("Saturday"),
      sun: holidays.includes("Sunday"),
      mon: holidays.includes("Monday"),
      tue: holidays.includes("Tuesday"),
      wed: holidays.includes("Wednesday"),
      thu: holidays.includes("Thursday"),
      fri: holidays.includes("Friday"),
    };
    body.append("work_times[holidays][sat]", HolidaysArray.sat);
    body.append("work_times[holidays][sun]", HolidaysArray.sun);
    body.append("work_times[holidays][mon]", HolidaysArray.mon);
    body.append("work_times[holidays][tue]", HolidaysArray.tue);
    body.append("work_times[holidays][wed]", HolidaysArray.wed);
    body.append("work_times[holidays][thu]", HolidaysArray.thu);
    body.append("work_times[holidays][fri]", HolidaysArray.fri);
    if (selectedFile.length > 0) {
      selectedFile.map((item, i) => {
        body.append(`images[${i}]`, item);
      });
    }
    setErrorAddress("");
    setErrorCategory("");
    setErrorCity("");
    setErrorCountry("");
    setErrorDescription("");
    setErrorLocationLat("");
    setErroLocationLng("");
    setErrorPhone("");
    setErrorPrice("");
    setErrorSubCategory("");
    setErrorholidays("");
    setErrorTimeFrom("");
    setErrorTimeto("");
    setErrorCurrency("");
    setErrorMessage("");

    const po = axios
      .post(url, body, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Accept-Language": "ar",
          country_id: Cookies.get("countryID")
            ? Cookies.get("countryID")
            : null,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        router.push("/account/myServices");
      })
      .catch((res) => {
        console.log(res);
        setLoading(false);
        if (res.response.status === 500) {
          alert("An error occurred: " + res.response.data.message);
        }
        if (res.response.status == 401) {
          router.push("/signIn");
        }
        res.response.data.message
          ? setErrorMessage(res.response.data.message)
          : setErrorMessage("");
        res.response.data.errors["address_text.en"]
          ? setErrorAddress(res.response.data.errors["address_text.en"][0])
          : setErrorAddress("");
        res.response.data.errors.category_id
          ? setErrorCategory(res.response.data.errors.category_id[0])
          : setErrorCategory("");
        res.response.data.errors.city_id
          ? setErrorCity(res.response.data.errors.city_id[0])
          : setErrorCity("");
        res.response.data.errors.country_id
          ? setErrorCountry(res.response.data.errors.country_id[0])
          : setErrorCountry("");
        res.response.data.errors["description.en"]
          ? setErrorDescription(res.response.data.errors["description.en"][0])
          : setErrorDescription("");
        res.response.data.errors["location.lat"]
          ? setErrorLocationLat(res.response.data.errors["location.lat"][0])
          : setErrorLocationLat("");
        res.response.data.errors["location.lng"]
          ? setErroLocationLng(res.response.data.errors["location.lng"][0])
          : setErroLocationLng("");
        res.response.data.errors.phone
          ? setErrorPhone(res.response.data.errors.phone[0])
          : setErrorPhone("");
        res.response.data.errors.price
          ? setErrorPrice(res.response.data.errors.price[0])
          : setErrorPrice("");
        res.response.data.errors.sub_category_id
          ? setErrorSubCategory(res.response.data.errors.sub_category_id[0])
          : setErrorSubCategory("");
        res.response.data.errors["work_times.holidays"]
          ? setErrorholidays(res.response.data.errors["work_times.holidays"][0])
          : setErrorholidays("");
        res.response.data.errors["work_times.time_from"]
          ? setErrorTimeFrom(
              res.response.data.errors["work_times.time_from"][0]
            )
          : setErrorTimeFrom("");
        res.response.data.errors["work_times.time_to"]
          ? setErrorTimeto(res.response.data.errors["work_times.time_to"][0])
          : setErrorTimeto("");
        res.response.data.errors.currency
          ? setErrorCurrency(res.response.data.errors.currency[0])
          : setErrorCurrency("");

        console.log(res);
      });
  };

  const handleHeaderInputChange = (e) => {
    const files = e.target.files; // Get the selected files

    for (let i = 0; i < files.length; i++) {
      const selectedFile = files[i];
      setSelectedFile((oldArray) => [...oldArray, selectedFile]);
    }
  };

  const FetchDataOFSingleServices = async () => {
    const Services = await getSingleServices(params.id);
    if (!Services) console.log(Services?.message);

    setCategory(Services.category_id);
    setSubCategory(Services.sub_category_id);
    setCountry(Services.country_id);
    setCity(Services.city_id);
    setAddress(getLocal(locale, Services.address_text));
    setPhone(Services.phone_normalized);
    setPhone_country(Services.phone_country);
    setTimeFrom(Services.work_times.time_from);
    setTimeto(Services.work_times.time_to);
    setPrice(Services.price);
    setCurrency(Services.currency);
    setDescription(getLocal(locale, Services.description));
    setSelectedFile2(Services.images);
    setLat(Services.location_google_maps.lat);
    setLng(Services.location_google_maps.lng);

    setholidays([
      JSON.parse(Services.work_times.holidays).sat ? "Saturday" : null,
      JSON.parse(Services.work_times.holidays).sun ? "Sunday" : null,
      JSON.parse(Services.work_times.holidays).mon ? "Monday" : null,
      JSON.parse(Services.work_times.holidays).tue ? "Tuesday" : null,
      JSON.parse(Services.work_times.holidays).wed ? "Wednesday" : null,
      JSON.parse(Services.work_times.holidays).thu ? "Thursday" : null,
      JSON.parse(Services.work_times.holidays).fri ? "Friday" : null,
    ]);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="load" style={{ display: Loading ? "flex" : "none" }}>
          <TailSpin
            height={120}
            width={120}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={Loading}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={1}
            strokeWidthSecondary={1}
          />
        </div>

        <section className="services addServices container m90">
          <div className="part1">
            <h2 className="headtitle">{t("addServicesBtn")}</h2>
            <div className="box">
              <form className="row g-3 form_page">
                <div className="upload_images">
                  <div className="all_img">
                    <div className="row">
                      {selectedFile &&
                        selectedFile.map((file, i) => {
                          return (
                            <div
                              key={i}
                              className="col-4 pluus"
                              style={{ position: "relative" }}
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                className="img img-thumbnail m-1 imgPreview"
                                style={{
                                  maxHeight: "120px",
                                  minHeight: "120px",
                                  width: "100%",
                                  height: "auto",
                                }}
                                alt="person"
                              />
                              <div
                                className="RemoveImge"
                                onClick={() => {
                                  setSelectedFile(
                                    selectedFile.filter((item) => item !== file)
                                  );
                                }}
                              >
                                <p>X</p>
                              </div>
                            </div>
                          );
                        })}
                      {selectedFile2 &&
                        selectedFile2.map((img, i) => {
                          return (
                            <div
                              key={i}
                              className="col-4 pluus"
                              style={{ position: "relative" }}
                            >
                              <img
                                src={img.url}
                                className="img img-thumbnail m-1 imgPreview"
                                style={{
                                  maxHeight: "120px",
                                  minHeight: "120px",
                                  width: "100%",
                                  height: "auto",
                                }}
                                alt="person"
                              />
                              <div
                                className="RemoveImge"
                                onClick={() => {
                                  setRMImagesID((oldArray) => [
                                    ...oldArray,
                                    +img.id,
                                  ]);
                                  setSelectedFile2(
                                    selectedFile2.filter(
                                      (item) => item.id !== img.id
                                    )
                                  );
                                }}
                              >
                                <p>X</p>
                              </div>
                            </div>
                          );
                        })}

                      <div className="col-4 pluus">
                        <input type="file" onChange={handleHeaderInputChange} />
                        <img
                          id="img1"
                          className="img img-thumbnail m-1 imgPreview"
                        />
                      </div>
                    </div>
                    <div className="upload">
                      <input type="file" onChange={handleHeaderInputChange} />
                      <p>upload Image</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 g-3 new_row row">
                  <label htmlFor="">{t("offering")}</label>
                  <div className="col-6">
                    <Select
                      label={t("category")}
                      placeholder={t("selectCategory")}
                      searchable
                      clearable
                      nothingFound="No options"
                      transitionProps={{
                        transition: "pop-top-left",
                        duration: 80,
                        timingFunction: "ease",
                      }}
                      error={errorCategory}
                      onChange={setCategory}
                      value={category}
                      data={categories}
                    />
                  </div>
                  <div className="col-6">
                    <Select
                      label={t("subCategory")}
                      placeholder={t("selectSub")}
                      searchable
                      clearable
                      nothingFound="No options"
                      transitionProps={{
                        transition: "pop-top-left",
                        duration: 80,
                        timingFunction: "ease",
                      }}
                      error={errorSubcategory}
                      onChange={setSubCategory}
                      value={Subcategory}
                      data={Subcategories}
                    />
                  </div>

                  <div className="invalid-feedback">
                    Note that is type of category are paid an amount of 25$
                  </div>
                </div>

                <div className="col-md-12">
                  <Select
                    label={t("location")}
                    placeholder={t("selectLocation")}
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
                    error={errorCountry}
                    data={countries}
                  />
                </div>
                <div className="col-md-12">
                  <Select
                    label={t("city")}
                    placeholder={t("selectCity")}
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
                  {isLoaded ? (
                    <>
                      {address_Info && (
                        <p
                          style={{
                            fontSize: "12px",
                            margin: "4px",
                          }}
                        >
                          {address_Info}
                        </p>
                      )}

                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
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
                      {errorLocationLat && (
                        <p
                          style={{
                            color: "red",

                            fontSize: "12px",
                            marginTop: "4px",
                          }}
                        >
                          {errorLocationLat}
                        </p>
                      )}
                      {erroLocationLng && (
                        <p
                          style={{
                            color: "red",

                            fontSize: "12px",
                            marginTop: "4px",
                          }}
                        >
                          {erroLocationLng}
                        </p>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="col-md-12">
                  <TextInput
                    label={t("address")}
                    placeholder={t("enterAddress")}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    error={errorAddress}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPhone " className="form-label">
                    {t("number")}
                  </label>

                  <PhoneInput
                    defaultCountry={phone_country}
                    country={phone_country}
                    initialValueFormat="national"
                    placeholder={t("enterNumber")}
                    className="form-control"
                    value={phone}
                    onCountryChange={(e) => setPhone_country(e)}
                    onChange={setPhone}
                  />
                  {errorPhone && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {errorPhone}
                    </p>
                  )}
                </div>
                <div className="col-md-12 g-2 new_row row">
                  <label>{t("serviceDetails")}</label>
                  <label>{t("workTime")}</label>
                  <div className="col-6">
                    <DemoItem label={t("from")}>
                      <MobileTimePicker
                        defaultValue={dayjs("2022-04-17T15:30")}
                        value={dayjs(TimeFrom, "h:mm A")}
                        onChange={(e) =>
                          setTimeFrom(e.$d.toLocaleTimeString("en-US", options))
                        }
                      />
                    </DemoItem>
                    {errorTimeFrom && (
                      <p
                        style={{
                          color: "red",

                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {errorTimeFrom}
                      </p>
                    )}
                  </div>
                  <div className="col-6">
                    <DemoItem label={t("to")}>
                      <MobileTimePicker
                        defaultValue={dayjs("2022-04-17T12:30")}
                        value={dayjs(Timeto, "h:mm A")}
                        onChange={(e) =>
                          setTimeto(e.$d.toLocaleTimeString("en-US", options))
                        }
                      />
                    </DemoItem>
                    {errorTimeto && (
                      <p
                        style={{
                          color: "red",

                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {errorTimeto}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <MultiSelect
                    label={t("selectWeekend")}
                    placeholder={t("selectDays")}
                    data={[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ]}
                    onChange={setholidays}
                    value={holidays}
                    error={errorHolidays}
                  />
                </div>
                <div className="col-md-12 g-2 new_row row">
                  <div className="col-12">
                    <Textarea
                      radius="md"
                      label={t("description")}
                      value={description}
                      placeholder=""
                      onChange={(e) => setDescription(e.target.value)}
                      error={errorDescription}
                    />
                  </div>
                  <div className="col-8">
                    <NumberInput
                      label={t("price")}
                      hideControls
                      onChange={setPrice}
                      value={price}
                      error={errorPrice}
                    />
                  </div>
                  <div className="col-4">
                    <Select
                      label={t("currency")}
                      placeholder="Select currency"
                      searchable
                      clearable
                      nothingFound="No options"
                      transitionProps={{
                        transition: "pop-top-left",
                        duration: 80,
                        timingFunction: "ease",
                      }}
                      onChange={setCurrency}
                      value={currency}
                      error={errorCurrency}
                      data={AllCurrency}
                    />
                  </div>

                  <div className="col-12">
                    <button className="add_more">+ {t("addMore")}</button>
                  </div>
                </div>
              </form>
              <input
                type="submit"
                value={t("addServicesBtn")}
                className="btn_page btn_Address"
                onClick={(e) => {
                  e.preventDefault();
                  handellogin();
                }}
              />
              {errorMessage && (
                <p
                  style={{
                    color: "red",
                    textAlign: "end",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
          <div className="part2">
            <h2 className="headtitle">More Section</h2>
            <div className="box">
              <ul className="list-group">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label className="form-check-label" htmlFor="firstCheckbox">
                    Work Time
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                  <label className="form-check-label" htmlFor="secondCheckbox">
                    Prices
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" htmlFor="thirdCheckbox">
                    Packages
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="fourCheckbox"
                  />
                  <label className="form-check-label" htmlFor="fourCheckbox">
                    Description
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*  Modal*/}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  style={{ margin: "20px 40px 10px" }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src="/images/modalImg.webp"
                  className="img_modal"
                  alt="modalImg"
                />
                <h4>To add more photos you must pay 15 EGP.</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn_page">
                  Countiune
                </button>
                <button
                  type="button"
                  className="btn btn_page2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
}

export default page;
