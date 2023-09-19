"use client";
import { getCities, getHomePage } from "@/components/useAPI/GetUser";
import { Select, Textarea } from "@mantine/core";
import { MobileTimePicker } from "@mui/x-date-pickers";
import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function page() {
  
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
  const [time, setTime] = useState('10:00');

  useEffect(() => {
    FetchDataOFData();
  }, []);
  useEffect(() => {
    if(country){
      FetchDataOFCities();
    }
  }, [country]);
  useEffect(() => {
    if(category){
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
      const item = { value: itemservice_categories.id, label: itemservice_categories.name.en };
      setCategories((current) => [...current, item]);
    });
    
  };
  const FetchDataOFCategory = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setSubCategories([])
    HomePage.service_categories.filter((item)=>item.id===category)[0].children.map((itemservice_categories) => {
      const item = { value: itemservice_categories.id, label: itemservice_categories.name.en };
      setSubCategories((current) => [...current, item]);
    });
    
  };

const FetchDataOFCities = async () => {
    const HomePage = await getCities(country);
    if (!HomePage) console.log(HomePage?.message);
    setCities([])
    HomePage.map((itemCountries) => {
      const item = { value: itemCountries.id, label: itemCountries.name.en };
      setCities((current) => [...current, item]);
    });
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
                    <div
                      className="col-4 pluus"
                      style={{ position: "relative" }}
                    >
                      <input
                        id="img1Input"
                        type="file"
                        onchange="readURL(this);"
                        style={{ display: "none" }}
                      />
                      <img
                        id="img1"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{
                          maxHeight: "120px",
                          minHeight: "120px",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>

                    <div
                      className="col-4 pluus"
                      style={{ position: "relative" }}
                    >
                      <input
                        id="img2Input"
                        type="file"
                        onchange="readURL(this);"
                        style={{ display: "none" }}
                      />
                      <img
                        id="img2"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{
                          maxHeight: "120px",
                          minHeight: "120px",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>

                    <div
                      className="col-4 pluus"
                      style={{ position: "relative" }}
                    >
                      <input
                        id="img3Input"
                        type="file"
                        onchange="readURL(this);"
                        style={{ display: "none" }}
                      />
                      <img
                        id="img3"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{
                          maxHeight: "120px",
                          minHeight: "120px",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="col pluus pluus2"
                      style={{ position: "relative" }}
                    >
                      <input
                        id="img4Input"
                        type="file"
                        onchange="readURL(this);"
                        style={{ display: "none" }}
                      />
                      <img
                        id="img4"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{
                          maxHeight: "120px",
                          minHeight: "40px",
                          width: "100%",
                          height: "40px",
                        }}
                      />
                    </div>
                  </div>
                  <button className="upload">Upload photos</button>
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
                  <label htmlFor="inputAddress" className="form-label">
                    Address{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Type Your Address"
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
  <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
</DemoItem>
                  </div>
                  <div className="col-6">
                  <DemoItem label="Mobile variant">
  <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
</DemoItem>
                  </div>
                </div>
                <div className="col-md-12 g-2 new_row row">
                 
                  
                 
                  <div className="col-12">
                  <Textarea
      radius="md"
      label="Description"
      placeholder=""
    />

                  </div>
                  <div className="col-8">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPackage"
                      placeholder=""
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="">currency</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputpeice1"
                      placeholder=""
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
