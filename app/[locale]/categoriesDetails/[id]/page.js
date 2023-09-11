"use client";
import ItemCourse from "@/components/ItemCourse";
import { getHomePage } from "@/components/useAPI/GetUser";
import { getServices } from "@/components/useAPI/shop/shop";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function page({ params }) {
  const [services, setServices] = useState();
  const [categories, setcategories] = useState();

  useEffect(() => {
    FetchDataOFIServices();
    FetchDataOFData();
  }, []);

  const FetchDataOFIServices = async () => {
    const Services = await getServices(params.id);
    if (!Services) console.log(Services?.message);
    setServices(Services);
  };
  console.log("====================================");
  console.log(services);
  console.log("====================================");

  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setcategories(HomePage.categories);
  };
  console.log(categories);
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>

            <li className="breadcrumb-item" aria-current="page">
              Categories
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Repairs
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Sub category
            </li>
          </ol>
        </nav>
      </div>

      <div className="details_head container">
        <h3>Get the support you need to run your business more smoothly</h3>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            id="dropdownMenuButton"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-target="#dropdownOne"
            aria-expanded="false"
          >
            Recommended services
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="categories container m90">
        <div className="filter">
          <div className="search">
            <h3>Search</h3>
            <form action="">
              <input type="text" placeholder="What You Search about" />
            </form>
          </div>
          <h3 className="headDrop">Categories</h3>
          <div className="accordion" id="accordionExample">
            {categories?.map((categorie) => {
              return (
                <div className="accordion-item" key={categorie.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${categorie.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${categorie.id}`}
                    >
                      {categorie.name.en}
                    </button>
                  </h2>
                  <div
                    id={`collapse${categorie.id}`}
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        {categorie.children.map((child) => {
                          return (
                            <li>
                              <Link href={`/categoriesDetails/${child.id}`}>{child.name.en}</Link>
                            </li>
                          );
                        })}
                       
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Gender
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="" className="active">
                        sub categories
                      </a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Cleaning Services
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Home Exterior
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Cleaning Services
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Home Exterior
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Cleaning Services
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Home Exterior
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                    <li>
                      <a href="">sub categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="allServices">
            {services?.data?.map((service) => {
              return (
                <ItemCourse
                  title={service.address_text.en}
                  star="4.8"
                  loc="sidi bisher, alex"
                  timeFrom={service.work_times?.time_from}
                  timeTo={service.work_times?.time_to}
                  newsalary={service.price}
                  image="1"
                  id={service.id}
                />
              );
            })}
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
          <button className="more">Show More</button>
        </div>
      </section>
    </>
  );
}

export default page;
