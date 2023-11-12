"use client";

import BtnLogOut from "@/components/btnLogOut";
import { getUser } from "@/components/useAPI/GetUser";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import api from "../api";

function page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [IsImage, setIsImage] = useState("");
  const [changeImage, setChangeImage] = useState(false);
  const [phone, setPhone] = useState();
  const [phone_national, setPhone_national] = useState();
  const [phone_normalized, setphone_normalized] = useState();
  const [phone_country, setPhone_country] = useState();
  const [user, setUser] = useState("");
  const t = useTranslations("Account");

  const handleHeaderInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setChangeImage(true);
  };

  useEffect(() => {
    FetchDataOFUser();
  }, []);
  const FetchDataOFUser = async () => {
    const User = await getUser();
    if (!User) console.log(User?.message);
    setUser(User);
    setName(User.name);
    setEmail(User.email ? User.email : "");
    setIsImage(User.image ? User.image.url : null);
    setPhone(User.phone);
    setPhone_national(User.phone_national);
    setphone_normalized(User.phone_normalized);
    setPhone_country(User.phone_country);
  };

  const handelProfile = () => {
    const body = new FormData();
    body.append("name", name);
    body.append("email", email);
    changeImage && body.append("image", selectedFile);
    body.append("phone", phone);
    body.append("phone_country", phone_country);
    const po = api
      .post("api/v1/users/auth/update", body, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        alert("An error occurred: " + res.message);
        console.log(res);
      });
  };

  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account" className="active">
                  {t("account")}
                </Link>
              </li>
              <li>
                <Link href="/account/myServices">{t("services")}</Link>
              </li>
              <li>
                <Link href="/account/myFavourite">{t("favourites")}</Link>
              </li>
              <li>
                <Link href="/account/prmoted">{t("promotion")}</Link>
              </li>
              <li>
                <Link href="/account/myOrders">{t("myOrders")}</Link>
              </li>
              <li>
                <Link href="/account/addressess">{t("addresses")}</Link>
              </li>
              <li>
                <BtnLogOut />
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">{t("personal")}</h2>

            <div className="img_persone">
              <img
                src={
                  !changeImage
                    ? IsImage
                    : selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : "/images/person.webp"
                }
                className="person"
                alt="person"
              />
              <div className="inputfile">
                <input type="file" onChange={handleHeaderInputChange} />
                <img src="/images/Camera.svg" alt="Camera" />
              </div>
            </div>

            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputname4 " className="form-label">
                  {t("full")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname4"
                  placeholder={t("full")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-12 tel_num">
                <label htmlFor="inputtel " className="form-label">
                  {t("phone")}
                </label>

                <PhoneInput
                  defaultCountry={phone_country || "EG"}
                  country={phone_country}
                  initialValueFormat="national"
                  placeholder={t("enterMobile")}
                  className="form-control"
                  value={phone_normalized}
                  onCountryChange={(e) => setPhone_country(e)}
                  onChange={setPhone}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputemail " className="form-label">
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder={t("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="next btn_page"
                onClick={(e) => {
                  e.preventDefault();
                  handelProfile();
                }}
              >
                {t("save")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
