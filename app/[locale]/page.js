"use client";
import ItemCourse from "@/components/ItemCourse";
import styles from "./page.module.css";
import React, { useState } from "react";
import ItemCategories from "@/components/ItemCategories";
import { getCategories, getServices } from "@/components/useAPI/shop/shop";
import { useEffect } from "react";
import { getHomePage } from "@/components/useAPI/GetUser";

export default function Home() {
  const [categories, setCategories] = useState();
  const [services, setServices] = useState();
  const [data, setData] = useState();

useEffect(() => {
  FetchDataOFData()
    FetchDataOFIServices();
  }, []);
  const FetchDataOFICategories = async () => {
    const Categories = await getCategories();
    if (!Categories) console.log(Categories?.message);
    setCategories(Categories);
  };
  const FetchDataOFIServices = async () => {
    const Services = await getServices();
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setData(HomePage);
  };
console.log(data);

  return (
    <main className={styles.main}>
      <>
        <section class="find">
          <img src="/images/find.webp" class="imgFind" alt="find" />
          <div class="aboutFind container">
            <h1>The largest website to find and request services</h1>
            <h2>Find your services with ease</h2>
            <form action="">
              <input type="text" placeholder="What you want to search about?" />
              <input type="submit" value="Search" />
            </form>
          </div>
        </section>

        <section class="categories container m90">
          <h2 class="headtitle">Categories</h2>
          <div class="parts">
            {
              data?.categories?.map((item)=>{
return(
  <ItemCategories  id={item.id} title={item.name.en} image={item.image.url} />
)
              })
            }
          </div>
        </section>

        <section class="use m90">
          <div class="container">
            <h2>How To Use Find Help</h2>
            <div class="parts">
              <div class="part">
                <div class="numStep">1</div>
                <img src="/images/people-search.webp" alt="people-search" />
                <div class="aboutUse">
                  <h3>Find The Services</h3>
                  <p>
                    Find the service you need using the search box at the top or
                    through the categories.
                  </p>
                </div>
              </div>
              <div class="part">
                <div class="numStep">2</div>
                <img src="/images/click.webp" alt="click" />
                <div class="aboutUse">
                  <h3>Make a Book</h3>
                  <p>
                    Review service descriptions and buyer reviews, then request
                    to open contact with the seller.
                  </p>
                </div>
              </div>
              <div class="part">
                <div class="numStep">3</div>
                <img src="/images/shopping-list1.webp" alt="shopping-list" />
                <div class="aboutUse">
                  <h3>Receive your service</h3>
                  <p>
                    Contact the seller directly within the find help website
                    until receiving your complete order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="services container m90">
          <h2 class="headtitle">Repairs Services</h2>

          <div class="allServices">
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="2"
              love
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
          </div>
        </section>
        <section class="services container m90">
          <h2 class="headtitle">Cleaning Services</h2>
          <div class="allServices">
            <div class="allServices">
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                oldsalary="2000"
                newsalary="1000"
                image="1"
                love
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="2"
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="3"
              />
            </div>
          </div>
        </section>

        <section class="need m90">
          <div class="container">
            <div class="parts">
              <div class="part1">
                <h3 style={{ color: "#1866ff" }}>Search - Book - Receive</h3>
                <img
                  src="/images/hotelbooking-pana(1)1.webp"
                  alt="hotelbooking-panar"
                />
                <a
                  href="#"
                  class="btn_page btn_page2"
                  style={{ backgroundColor: "#1866ff" }}
                >
                  Find The Services
                </a>
              </div>
              <div class="part2">
                <h2>Everything you need and more in one site</h2>
              </div>
              <div class="part3">
                <h3 style={{ color: "#f3b100" }}>Add - Announce - Sale</h3>
                <img src="/images/refund-pana1.webp" alt="refund-pana" />
                <a
                  href="#"
                  class="btn_page"
                  style={{ backgroundColor: "#f3b100" }}
                >
                  Add Your Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="services container m90">
          <h2 class="headtitle">Cleaning Services</h2>
          <div class="allServices">
            <div class="allServices">
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                oldsalary="2000"
                newsalary="1000"
                image="1"
                love
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="2"
              />
              <ItemCourse
                title="Alloy Wheel Repairs Derby"
                star="4.8"
                loc="sidi bisher, alex"
                timeFrom="9:00 AM"
                timeTo="10:00 PM"
                newsalary="2000"
                image="3"
              />
            </div>
          </div>
        </section>
        <section class="try container m90">
          <img src="/images/phone.webp" class="phone" alt="phone" />
          <div class="aboutTry">
            <div class="part1">
              <h2>TRY THE FIND HELP APP</h2>
              <p>
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
            </div>
            <div class="part2">
              <h3>GET YOUR APP TODAY</h3>
              <ul>
                <li>
                  <a href="">
                    <img src="/images/app.webp" alt="app store" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/images/google.webp" alt="google play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}
