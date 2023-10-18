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
  const [categories, setcategories] = useState([]);
  const [selectCurrentCategories, setSelectCurrentCategories] = useState();
  const [selectCurrentCategoriesName, setSelectCurrentCategoriesName] = useState("");
  const [selectCurrentSubCategories, setSelectCurrentSubCategories] = useState();
  const [selectCurrentSubCategoriesName, setSelectCurrentSubCategoriesName] = useState("");
  const [stateSearch, setStateSearch] = useRecoilState(StateSearch);
  const [Search, setSearch] = useState(stateSearch);
  const [Load, setLoad] = useState(false);

const router = useRouter()
  const t = useTranslations("Categories");
  useEffect(() => {
    FetchDataOFIServices();
    FetchDataOFData();
  }, []);
const searchparams = useSearchParams()

  const FetchDataOFIServices = async () => {
    setLoad(true)

    const Services = await getServices(params.id,stateSearch||searchparams.get('search')||"");
    if (!Services) console.log(Services?.message);
    console.log('====================================');
    console.log(Services);
    console.log('====================================');
    setServices(Services);
    setLoad(false)
    setSelectCurrentCategories(Services.data[0].category_id)
    setSelectCurrentCategoriesName(getLocal(locale,Services.data[0].category.name))
    console.log(Services.data[0].sub_category.id);
    setSelectCurrentSubCategories(Services.data[0].sub_category.id)
setSelectCurrentSubCategoriesName(getLocal(locale,Services.data[0].sub_category.name))

  };
  
  const FetchDataOFData = async () => {
    const HomePage = await getHomePage();
    if (!HomePage) console.log(HomePage?.message);
    setcategories(HomePage.categories);
  };
  console.log(categories);
  console.log(categories);
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
            <Link href='/'>
              Home
              </Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <Link href={`/categoriesDetails/${selectCurrentCategories}`}>
             {selectCurrentCategoriesName}
              </Link>
            
            </li>
            <li className="breadcrumb-item" aria-current="page">
             
             {selectCurrentSubCategoriesName}
              
            
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
            <form onSubmit={(e)=>{e.preventDefault(); FetchDataOFIServices();router.push(`/categoriesDetails/${params.id}?search=${Search}`)}}>
              <input type="text" value={stateSearch} onChange={(e)=>{setStateSearch(e.target.value);setSearch(e.target.value)}} onClick={(e)=>{e.preventDefault(); FetchDataOFIServices();}} placeholder={t("whatSearch")} />
            </form>
          </div>
          <h3 className="headDrop">{t("categories")}</h3>
          {!categories?.length > 0 && (
              <div className="loadItems loadItems3">
                <div className="item">
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  <Skeleton height={20} width={250}  mb="xl" />
                  
                </div>
               
              </div>
            )}
          <div className="accordion" id="accordionExample">
            {categories?.map((categorie) => {
              return (
                <div className="accordion-item" key={categorie.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button   ${categorie.id ===selectCurrentCategories?"":"collapsed"}`}
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
                    className={`accordion-collapse collapse  ${categorie.id ===selectCurrentCategories?"show":""} `}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        {categorie.children.map((child) => {
                          return (
                            <li key={child.id}>
                              <Link href={Search?`/categoriesDetails/${child.id}?search=${Search}`:`/categoriesDetails/${child.id}`} className={`${child.id=== +params.id?"active":""}`}>{getLocal(locale,child.name)}</Link>
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
        {!services?.data?.length > 0&&Load&& (
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
            {!services?.data?.length > 0&&!Load&&
              <div className="boxEmpty">
              <h2>{t('exist')}</h2>
              <h3>{t('frist')}</h3>
              <Link className="btn_page" href='/add_Services'>{t('addService')}</Link>
              
              </div>
            }
          <div className="allServices">
            {services?.data?.map((service) => {
              return (
                <ItemCourse
                key={service.id}
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
          {services?.data?.length > 0&&<button className="more">{t("ShowMore")}</button>} 
        </div>
      </section>
    </>
  );
}

export default page;
