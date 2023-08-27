'use client'
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ItemCourse from "@/components/ItemCourse";
import { getHomePage, getUser } from "@/components/useAPI/GetUser";
import { getAllCourses, getAllCoursesWithUser } from "@/components/useAPI/CorsesApi/GetCourses";
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";
import { useTranslations } from "next-intl";


export  function generateMetadata({params}) {
  return {
    title: "product title",
  }
}

export default  function Home({params: {locale}}) {
  const [allCourses, setAllCourses] = useState([])
  const [homeData, setHomeData] = useState([]);
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations('Index');
  useEffect(() => {
    FetchDataOFHomePage()
      if(IsUser){
        FetchDataOFAllCoursesWithUser()
      }
      if(!IsUser){
        FetchDataOFAllCourses()
      }
}, [])


  const FetchDataOFAllCourses= async () => {
      const AllCourses = await getAllCourses();
    if (!AllCourses) console.log(AllCourses?.message)
     setAllCourses(AllCourses.data)
  }
 
  const FetchDataOFAllCoursesWithUser= async () => {
    const AllCourses = await getAllCoursesWithUser();
  if (!AllCourses) console.log(AllCourses?.message)
   setAllCourses(AllCourses.data)
}

const FetchDataOFHomePage= async () => {
  const AllData = await getHomePage();
if (!AllData) console.log(AllData?.message)
setHomeData(AllData.home_sections)
console.log(AllData);
}
console.log(homeData);


  return (
    <main className={styles.main}>
      <>
        <section className="about m60">
          <div className="container allAbout">
            <div className="part1">
              <h1>
                <span className="mainColor">{t('title')}</span>
                <span className="imgWord">{t('title2')},</span> <br />
                {t('title3')} <span className="mainColor">{t('title4')}</span>
              </h1>
              <p>
              {t('dec')}
              </p>
              <Link href="courses" className="btn_page wow fadeInDown">
              {t('start')}
              </Link>
              <div className="trusted">
                <h2 className="headtitle head3 wow fadeInDown"> {t('trusted')}</h2>
                <div className="images_Trusted">
                  <img src="/images/about/image1.webp" alt="images_Trusted" />
                  <img src="/images/about/image2.webp" alt="images_Trusted" />
                  <img src="/images/about/image3.webp" alt="images_Trusted" />
                  <img src="/images/about/image4.webp" alt="images_Trusted" />
                  <img src="/images/about/image5.webp" alt="images_Trusted" />
                </div>
              </div>
            </div>
            <div className="part2 wow fadeInUp">
              <img
                src="/images/about/herosectionphoto.webp"
                alt="herosectionphoto"
              />
            </div>
          </div>
        </section>

        <section className="services services_content container m60">
          <h2 className="headtitle wow fadeInDown">Repairs Services</h2>
          <p className="p_page wow fadeInUp">
            Choose from 204.000 online video courses with new additions
            published every month
          </p>
          <div className="allServices">
            {
              allCourses&&allCourses.map((course)=>{
                return(
                  <ItemCourse
                  key={course.id}
                  id={course.id}
                  title={course.name.en}
                  imageCourse={course.image.url}
                  star="4.8"
                  dec={course.instructor.name}
                  newsalary={course.price?"EG "+course.price:"free"}
                />
                )
              })
           }
            <ItemCourse
              title="Learn python: The Complete Python Programming Course"
              image="1"
              star="4.8"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
            <ItemCourse
              title="Learn python: The Complete Python Programming Course"
              image="2"
              star="4.8"
              dec="Avinash jain, The Codex"
              newsalary="E£1,599.99"
              best="Bestseller"
            />
            <ItemCourse
              title="Learn python: The Complete Python Programming Course"
              image="3"
              star="4.8"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
            <ItemCourse
              title="Learn python: The Complete Python Programming Course"
              image="1"
              star="4.8"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
          </div>
        </section>

        <section className="top m60">
          <div className="container">
            <h2 className="headtitle wow fadeInDown">Top Categories</h2>
            <p className="p_page wow fadeInUp">
              Choose from 204.000 online video courses with new additions
              published every month
            </p>
            <div className="top_Categories">
              <div className="part">
                <img src="/images/top/creativity.webp" alt="creativity" />
                <h3>Design</h3>
              </div>
              <div className="part">
                <img
                  src="/images/top/developmentphoto.webp"
                  alt="developmentphoto"
                />
                <h3>Development</h3>
              </div>
              <div className="part">
                <img src="/images/top/marketing.webp" alt="marketing" />
                <h3>Marketing</h3>
              </div>
              <div className="part">
                <img src="/images/top/music.webp" alt="music" />
                <h3>Music</h3>
              </div>
            </div>
          </div>
        </section> 
        {
          homeData&&homeData.filter((item)=>item.courses.length !== 0).map((part)=>{
            return(
              <section className="services services_content container m60" key={part.id}>
              <h2 className="headtitle wow fadeInDown">{part.name.en}</h2>
              <p className="p_page wow fadeInUp">
               {part.description&&part.description?.en}
            </p>
              <div className="allServices">
              {
              part.courses.map((course)=>{
                return(
                  <ItemCourse
                  key={course.id}
                  id={course.id}
                  title={course.name.en}
                  imageCourse={course.image.url}
                  star="4.8"
                  //dec={course.instructor.name}
                  newsalary={course.price?"EG "+course.price:"free"}
                />
                )
              })
           }
                
               
               
              </div>
            </section>
            )
          })
        }
        <section className="live m60">
          <div className="container">
            <h2 className="headtitle wow fadeInDown">
              Create, manage, and market your learning environment with advanced
              features like
            </h2>
            <div className="all_Live row">
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
              <div className="part col-md-4 col-sm-6 col-12">
                <img src="/images/live.svg" alt="live" />
                <h3>Live lessons and events</h3>
              </div>
            </div>
          </div>
        </section>
        
        <section className="become container m60">
          <div className="box">
            <img
              src="/images/become.webp"
              className="img_become"
              alt="become"
            />
            <div className="info_become">
              <h2> {t('become')}</h2>
              <p>
              {t('becomeDec')}
              </p>
              <Link href="instructor" className="btn_page2">
              {t('start')}
              </Link>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}

