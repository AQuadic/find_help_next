"use client";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

function page() {
  const [value, setValue] = useState();
  const [phone_country, setPhone_country] = useState();
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav  aria-label="breadcrumb">
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
                    <div className="col-4 pluus" style={{position: "relative"}}>
                      <input
                        id="img1Input"
                        type="file"
                        onchange="readURL(this);"
                        style={{display: "none"}}
                      />
                      <img
                        id="img1"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{maxHeight:"120px",minHeight:"120px",width:"100%",height:"auto"}}
                       
                      />
                    </div>

                    <div className="col-4 pluus" style={{position: "relative"}}>
                      <input
                        id="img2Input"
                        type="file"
                        onchange="readURL(this);"
                         style={{display: "none"}}
                      />
                      <img
                        id="img2"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                      style={{maxHeight:"120px",minHeight:"120px",width:"100%",height:"auto"}}
                      />
                    </div>

                    <div className="col-4 pluus" style={{position: "relative"}}>
                      <input
                        id="img3Input"
                        type="file"
                        onchange="readURL(this);"
                         style={{display: "none"}}
                      />
                      <img
                        id="img3"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                      style={{maxHeight:"120px",minHeight:"120px",width:"100%",height:"auto"}}
                      />
                    </div>
                    <div className="col pluus pluus2" style={{position: "relative"}}>
                      <input
                        id="img4Input"
                        type="file"
                        onchange="readURL(this);"
                         style={{display: "none"}}
                      />
                      <img
                        id="img4"
                        onclick="onImageClick(this)"
                        className="img img-thumbnail m-1 imgPreview"
                        style={{maxHeight:"120px",minHeight:"40px",width:"100%",height:"40px"}}
                       
                      />
                    </div>
                  </div>
                  <button className="upload">Upload photos</button>
                </div>
                <div className="col-md-12 g-3 new_row row">
                  <label for="">What are you offering?</label>
                  <div className="col-6">
                    <label for="inputCity" className="form-label">
                      Category{" "}
                    </label>
                    <select id="inputCity" className="form-select">
                      <option selected>Select category</option>
                      <option>Category1</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label for="inputCity" className="form-label">
                      Sub Category
                    </label>
                    <select id="inputCity" className="form-select">
                      <option selected>Select Sub category</option>
                      <option>Sub category1</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div className="col-6">
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
                  </div>
                  <div className="invalid-feedback">
                    Note that is type of category are paid an amount of 25$
                  </div>
                </div>

                <div className="col-md-12">
                  <label for="inputCity" className="form-label">
                    Location{" "}
                  </label>
                  <select id="inputCity" className="form-select">
                    <option selected>Select Your location</option>
                    <option>Egypt</option>
                    <option>England</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <label for="inputMethod" className="form-label">
                    Service Method
                  </label>
                  <ul
                    className="list-group"
                    style={{border:"1px solid #e2e2e2",padding:"16px 8px 0px",borderRadius:"10px"}}
                   
                  >
                    <li className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="firstCheckbox1"
                      />
                      <label className="form-check-label" for="firstCheckbox1">
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
                      <label className="form-check-label" for="secondCheckbox2">
                        Delivery
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <label for="inputAddress" className="form-label">
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
                  <label for="inputPhone " className="form-label">
                    Mobile Number
                  </label>

                  <PhoneInput
                defaultCountry="EG"
                placeholder={"Your Mobile Number"}
                className="form-control"
                value={value}
                onCountryChange={(e)=>setPhone_country(e)}
                onChange={setValue}
              />
                </div>

                <div className="col-md-12 g-2 new_row row">
                  <label for="">Service details</label>
                  <div className="col-8">
                    <label for="">Package Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPackage"
                      placeholder="Type your package name"
                    />
                  </div>
                  <div className="col-4">
                    <label for="">Prices</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputpeice1"
                      placeholder="number"
                    />
                  </div>

                  <div className="col-8">
                    <label for="">Package Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPackage2"
                      placeholder="Type your package name"
                    />
                  </div>
                  <div className="col-4">
                    <label for="">Prices</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputpeice2"
                      placeholder="number"
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
                <label className="form-check-label" for="firstCheckbox">
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
                <label className="form-check-label" for="secondCheckbox">
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
                <label className="form-check-label" for="thirdCheckbox">
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
                <label className="form-check-label" for="fourCheckbox">
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
              style={{margin: "20px 40px 10px"}}
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
            <button type="button" className="btn btn_page">Countiune</button>
            <button type="button" className="btn btn_page2" data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default page;
