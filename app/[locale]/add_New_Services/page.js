"use client";
import { getCities, getHomePage } from "@/components/useAPI/GetUser";
import {
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { MobileTimePicker, itIT } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import Cookies from "js-cookie";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { RequestType, geocode, setDefaults } from "react-geocode";
const containerStyle = {
  width: "400px",
  height: "400px",
};

function page() {
  setDefaults({
    key: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });

  const [lat, setLat] = useState(-3.745);
  const [lng, setLng] = useState(-38.523);
  console.log(lat);
  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });
  geocode(RequestType.LATLNG, `${lat},${lng}`, {
    location_type: "ROOFTOP", // Override location type filter for this request.
    enable_address_descriptor: true, // Include address descriptor in response.
  })
    .then(({ results }) => {
      const address = results[0].formatted_address;
      const { city, state, country } = results[0].address_components.reduce(
        (acc, component) => {
          if (component.types.includes("locality"))
            acc.city = component.long_name;
          else if (component.types.includes("administrative_area_level_1"))
            acc.state = component.long_name;
          else if (component.types.includes("country"))
            acc.country = component.long_name;
          return acc;
        },
        {}
      );
      console.log(city, state, country);
      console.log(address);
    })
    .catch(console.error);
  useEffect(() => {}, [lat, lng]);
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
    hour12: true,
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
  const [time, setTime] = useState("10:00");
  const [address, setAddress] = useState("");
  const [TimeFrom, setTimeFrom] = useState("");
  const [Timeto, setTimeto] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("EGP");
  const [AllCurrency, setAllCurrency] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [holidays, setholidays] = useState([]);

  useEffect(() => {
    FetchDataOFData();
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
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setCountries((current) => [...current, item]);
    });
    HomePage.service_categories.map((itemservice_categories) => {
      const item = {
        value: itemservice_categories.id,
        label: itemservice_categories.name.en,
      };
      setCategories((current) => [...current, item]);
    });
    HomePage.countries.map((county) => {
      const item = {
        value: county.currency.en,
        label: county.currency.en,
      };
      setAllCurrency((current) => [...current, item]);
    });
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
          label: itemservice_categories.name.en,
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
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setCities((current) => [...current, item]);
    });
  };
  const handellogin = () => {
    const url = new URL("https://findhelpapp.com/api/v1/users/services");
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
    body.append("work_times.holidays", holidays);

    if (selectedFile.length > 0) {
      selectedFile.map((item,i)=>{
        body.append(`images[${i}]`, item);
      })
      
    }

    const po = axios
      .post(url, body, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        /*  setLoading(false);
        res.response.data.email
          ? setErroremail(res.response.data.email[0])
          : setErroremail("");
        res.response.data.password
          ? setErrorpassword(res.response.data.password[0])
          : setErrorpassword("");
        res.response.data.error
          ? setError(res.response.data.error)
          : setError("");*/
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

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="container breadcrumbDetails">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page">
                Home
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Add Services
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Add
              </li>
            </ol>
          </nav>
        </div>

        <section className="services container m90">
          <div className="part1">
            <h2 className="headtitle">Add Services</h2>
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
                      <div className="col-4 pluus">
                        <input type="file" onChange={handleHeaderInputChange} />
                        <img
                          id="img1"
                          onclick="onImageClick(this)"
                          className="img img-thumbnail m-1 imgPreview"
                        />
                      </div>
                    </div>
                    <div className="upload">
                      <input type="file" onChange={handleHeaderInputChange} />
                      <p>upload Image</p>
                    </div>
                  </div>

                  <div className="col-md-12 g-3 new_row row">
                    <label htmlFor="">What are you offering?</label>
                    <div className="col-6">
                      <Select
                        label="Category"
                        placeholder="Select category"
                        searchable
                        clearable
                        nothingFound="No options"
                        transitionProps={{
                          transition: "pop-top-left",
                          duration: 80,
                          timingFunction: "ease",
                        }}
                        onChange={setCategory}
                        value={category}
                        //error={ErrorCategory}
                        data={categories}
                      />
                    </div>
                    <div className="col-6">
                      <Select
                        label="Sub Category"
                        placeholder="Select Sub category"
                        searchable
                        clearable
                        nothingFound="No options"
                        transitionProps={{
                          transition: "pop-top-left",
                          duration: 80,
                          timingFunction: "ease",
                        }}
                        onChange={setSubCategory}
                        value={Subcategory}
                        //error={ErrorCategory}
                        data={Subcategories}
                      />
                    </div>
                    {/* { <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCategory"
                      placeholder="Enter the Category name "
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCategory2"
                      placeholder="Enter the Sub Category name "
                    />
                  </div>} */}
                    <div className="invalid-feedback">
                      Note that is type of category are paid an amount of 25$
                    </div>
                  </div>

                  <div className="col-md-12">
                    <Select
                      label="Location"
                      placeholder="Select Your location"
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
                      //error={ErrorCategory}
                      data={countries}
                    />
                  </div>
                  <div className="col-md-12">
                    <Select
                      label="city"
                      placeholder="Select Your City"
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
                      //error={ErrorCategory}
                      data={cities}
                    />
                  </div>
                  <div className="col-md-12">
                    {isLoaded ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={2}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                      </GoogleMap>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputMethod" className="form-label">
                      Service Method
                    </label>
                    <ul
                      className="list-group"
                      style={{
                        border: "1px solid #e2e2e2",
                        padding: "16px 8px 0px",
                        borderRadius: "10px",
                      }}
                    >
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          id="firstCheckbox1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="firstCheckbox1"
                        >
                          Pick Up
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          id="secondCheckbox2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="secondCheckbox2"
                        >
                          Delivery
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <TextInput
                      label="Address"
                      placeholder="Enter Your Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputPhone " className="form-label">
                      Mobile Number
                    </label>

                    <PhoneInput
                      defaultCountry="EG"
                      placeholder={"Your Mobile Number"}
                      className="form-control"
                      value={phone}
                      onCountryChange={(e) => setPhone_country(e)}
                      onChange={setPhone}
                    />
                  </div>
                  <div className="col-md-12 g-2 new_row row">
                    <label htmlFor="">Service details</label>
                    <div className="col-6">
                      <DemoItem label="Mobile variant">
                        <MobileTimePicker
                          defaultValue={dayjs("2022-04-17T15:30")}
                          onChange={(e) =>
                            setTimeFrom(
                              e.$d.toLocaleTimeString("en-US", options)
                            )
                          }
                        />
                      </DemoItem>
                    </div>
                    <div className="col-6">
                      <DemoItem label="Mobile variant">
                        <MobileTimePicker
                          defaultValue={dayjs("2022-04-17T15:30")}
                          onChange={(e) =>
                            setTimeto(e.$d.toLocaleTimeString("en-US", options))
                          }
                        />
                      </DemoItem>
                    </div>
                  </div>
                  <div className="col-12">
                    <MultiSelect
                      label="Your favorite libraries"
                      placeholder="Pick value"
                      data={[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Wednesday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]}
                      onChange={setholidays}
                      value={holidays}
                    />
                  </div>
                  <div className="col-md-12 g-2 new_row row">
                    <div className="col-12">
                      <Textarea
                        radius="md"
                        label="Description"
                        placeholder=""
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="col-8">
                      <NumberInput
                        label="Price"
                        hideControls
                        onChange={setPrice}
                      />
                    </div>
                    <div className="col-4">
                      <Select
                        label="Currency"
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
                        //error={ErrorCategory}
                        data={AllCurrency}
                      />
                    </div>

                    <div className="col-12">
                      <button className="add_more">+ Add More</button>
                    </div>
                  </div>
                </div>
              </form>
              <input
                type="submit"
                value="Add Services"
                className="btn_page btn_Address"
                onClick={(e) => {
                  e.preventDefault();
                  handellogin();
                }}
              />
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
          tabindex="-1"
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
