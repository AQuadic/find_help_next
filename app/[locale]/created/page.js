"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

function page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Loading, setLoading] = useState(false);

  const t = useTranslations("Sign");
  console.log(name);
  console.log(email);
  console.log(selectedFile);

  const handleHeaderInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handelProfile = () => {
    setLoading(true)
    const body = new FormData();
    body.append("name", name);
    body.append("email", email);
    body.append("image", selectedFile);

    const po = axios
      .post("https://findhelpapp.com/api/v1/users/auth/update", body, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        setLoading(false)
        console.log(res);
        router.push("/");
      })
      .catch((res) => {
        setLoading(false)
        console.log(res);
      });
  };

  return (
    <>
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
      <section className="page_log">
        <div className="container">
          <div className="box_log">
            <h3>{t("almost")}</h3>
            <p className="dec" style={{ marginBottom: "24px" }}>
            {t("complete")}
            </p>
            <div className="img_persone">
              <img
                src={
                  selectedFile
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
                  placeholder= {t("full")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                value={t("done")}
                onClick={(e) => {
                  e.preventDefault();
                  handelProfile();
                }}
                className="btn_page"
              />
            </form>
          </div>
        </div>
      </section>

      <section className="endPage_login">
        <p>© Find Help, 2019-2022 Made by</p>
        <a href="#"> AQuadic Solution Company</a>
      </section>
    </>
  );
}

export default page;
