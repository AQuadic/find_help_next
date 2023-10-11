"use client";
import { StateSearch } from "@/atoms";
import ItemCourse from "@/components/ItemCourse";
import { getLocal } from "@/components/useAPI/Auth";
import { getHomePage } from "@/components/useAPI/GetUser";
import { getServices } from "@/components/useAPI/shop/shop";
import { Skeleton } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

function page({ params }) {
  const locale = useLocale()
  const [services, setServices] = useState();
  const [categories, setcategories] = useState();
  const [selectCurrentCategories, setSelectCurrentCategories] = useState();
  const [stateSearch, setStateSearch] = useRecoilState(StateSearch);
const router = useRouter()
  const t = useTranslations("Categories");
  useEffect(() => {
    FetchDataOFIServices();
    FetchDataOFData();
  }, []);
const searchparams = useSearchParams()
console.log(searchparams.get('search'));
  const FetchDataOFIServices = async () => {
    const Services = await getServices(params.id?params.id:0,stateSearch||searchparams.get('search'));
    if (!Services) console.log(Services?.message);
    setServices(Services);
    setSelectCurrentCategories(Services.data[0].category_id)

  };
  console.log("====================================");
  console.log(services);
  console.log(selectCurrentCategories);
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
            <li className="breadcrumb-item" >
              <Link href='/'>
              Home
              </Link>
             
            </li>
          
            <li className="breadcrumb-item active" >
             
             {stateSearch}
              
            
            </li>
          </ol>
        </nav>
      </div>

      <div className="details_head container">
        <h3>{t("smoothly")}</h3>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            id="dropdownMenuButton"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-target="#dropdownOne"
            aria-expanded="false"
          >
           {t("eecommended")}
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
            <h3>{t("search")}</h3>
            <form onSubmit={(e)=>{e.preventDefault(); FetchDataOFIServices();router.push(`/categoriesDetails?search=${stateSearch}`)}}>
              <input type="text" value={stateSearch} onChange={(e)=>{setStateSearch(e.target.value)}} onClick={(e)=>{e.preventDefault(); FetchDataOFIServices();}} placeholder={t("whatSearch")} />
             
            </form>
          </div>
          <h3 className="headDrop">{t("categories")}</h3>
          <div className="accordion" id="accordionExample">
         
            {categories?.map((categorie) => {
              return (
                <div className="accordion-item" key={categorie.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${categorie.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${categorie.id}`}
                    >
                      {getLocal(locale,categorie.name)}
                    </button>
                  </h2>
                  <div
                    id={`collapse${categorie.id}`}
                    className={`accordion-collapse collapse `}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        {categorie.children.map((child) => {
                          return (
                            <li key={child.id}>
                             <Link href={searchparams.get('search')?`/categoriesDetails/${child.id}?search=${searchparams.get('search')}`:`/categoriesDetails/${child.id}`} className={`${child.id=== +params.id?"active":""}`}>{getLocal(locale,child.name)}</Link>
                            </li>
                          );
                        })}
                       
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
           
           
          </div>
        </div>
        <div className="services">
        {!services?.data?.length > 0 && (
              <div className="loadItems loadItems3">
                <div className="item">
                  <Skeleton height={110}  mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
              </div>
            )}
          <div className="allServices">
         
            {services?.data?.map((service) => {
              return (
                <ItemCourse
                  title={getLocal(locale,service.description)}
                  star="4.8"
                  loc={getLocal(locale,service.address_text)}
                  timeFrom={service.work_times?.time_from}
                  timeTo={service.work_times?.time_to}
                  newsalary={service.price}
                  img={service.images}
                  id={service.id}
                  category_id={service.category_id}
                  fav={service.is_favourite}
                />
              );
            })}
         
           
           
          </div>
          <button className="more">{t("ShowMore")}</button>
        </div>
      </section>
    </>
  );
}

export default page;
