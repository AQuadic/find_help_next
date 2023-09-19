"use client";
import ItemCourse from "@/components/ItemCourse";
import styles from "./page.module.css";
import React, { useState } from "react";
import ItemCategories from "@/components/ItemCategories";
import { getCategories, getServices } from "@/components/useAPI/shop/shop";
import { useEffect } from "react";
import { getHomePage } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";

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
  console.log('====================================');
  console.log(services);
  console.log('====================================');
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setData(HomePage);
  };
console.log(data);

  return (
    <main className={styles.main}>
      <>
        <section className= "find">
          <img src="/images/find.webp" className= "imgFind" alt="find" />
          <div className= "aboutFind container">
            <h1>The largest website to find and request services</h1>
            <h2>Find your services with ease</h2>
            <form action="">
              <input type="text" placeholder="What you want to search about?" />
              <input type="submit" value="Search" />
            </form>
          </div>
        </section>

        <section className= "categories container m90">
          <h2 className= "headtitle">Categories</h2>
          <div className= "parts">
            {
              data?.service_categories?.map((item)=>{
return(
  <ItemCategories  key={item.id}  id={item.id} title={item.name.en} image={item.image.url} />
)
              })
            }
          </div>
        </section>

        <section className= "use m90">
          <div className= "container">
            <h2>How To Use Find Help</h2>
            <div className= "parts">
              <div className= "part">
                <div className= "numStep">1</div>
                <img src="/images/people-search.webp" alt="people-search" />
                <div className= "aboutUse">
                  <h3>Find The Services</h3>
                  <p>
                    Find the service you need using the search box at the top or
                    through the categories.
                  </p>
                </div>
              </div>
              <div className= "part">
                <div className= "numStep">2</div>
                <img src="/images/click.webp" alt="click" />
                <div className= "aboutUse">
                  <h3>Make a Book</h3>
                  <p>
                    Review service descriptions and buyer reviews, then request
                    to open contact with the seller.
                  </p>
                </div>
              </div>
              <div className= "part">
                <div className= "numStep">3</div>
                <img src="/images/shopping-list1.webp" alt="shopping-list" />
                <div className= "aboutUse">
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

        <section className= "services container m90">
          <h2 className= "headtitle">Repairs Services</h2>

          <div className= "allServices">
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
        <section className= "services container m90">
          <h2 className= "headtitle">Cleaning Services</h2>
          <div className= "allServices">
            <div className= "allServices">
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

        <section className= "need m90">
          <div className= "container">
            <div className= "parts">
              <div className= "part1">
                <h3 style={{ color: "#1866ff" }}>Search - Book - Receive</h3>
                <img
                  src="/images/hotelbooking-pana(1)1.webp"
                  alt="hotelbooking-panar"
                />
                <a
                  href="#"
                  className= "btn_page btn_page2"
                  style={{ backgroundColor: "#1866ff" }}
                >
                  Find The Services
                </a>
              </div>
              <div className= "part2">
                <h2>Everything you need and more in one site</h2>
              </div>
              <div className= "part3">
                <h3 style={{ color: "#f3b100" }}>Add - Announce - Sale</h3>
                <img src="/images/refund-pana1.webp" alt="refund-pana" />
                <a
                  href="#"
                  className= "btn_page"
                  style={{ backgroundColor: "#f3b100" }}
                >
                  Add Your Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className= "services container m90">
          <h2 className= "headtitle">Cleaning Services</h2>
          <div className= "allServices">
            <div className= "allServices">
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
        <section className= "try container m90">
          <img src="/images/phone.webp" className= "phone" alt="phone" />
          <div className= "aboutTry">
            <div className= "part1">
              <h2>TRY THE FIND HELP APP</h2>
              <p>
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
            </div>
            <div className= "part2">
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
