'use client'
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ItemCourse from "@/components/ItemCourse";
import { getUser } from "@/components/useAPI/GetUser";
import { getAllCourses } from "@/components/useAPI/CorsesApi/GetCourses";
import Cookies from "js-cookie";





export default  function Home() {
  const [allCourses, setAllCourses] = useState([])
  const [userData, setUserData] = useState();
  const [isLogin, setisLogin] = useState(Cookies.get('token')?true:false)

  
  useEffect(() => {
    if(isLogin){
      FetchDataOFAllCourses()
      FetchDataOFUserData();
    }
   
  }, [])

  const FetchDataOFUserData = async () => {
    const UserData = await getUser();
    if (!UserData) console.log(UserData?.message)
    setUserData(UserData)

  }
  const FetchDataOFAllCourses= async () => {
    const AllCourses = await getAllCourses();
    if (!AllCourses) console.log(AllCourses?.message)
    await setAllCourses(AllCourses.data)

  }

  return (
    <main className={styles.main}>
      <>
        <section className="about m60">
          <div className="container allAbout">
            <div className="part1">
              <h1>
                <span className="mainColor">Empowering</span>
                <span className="imgWord">Minds,</span> <br />
                Enriching <span className="mainColor">Futures</span>
              </h1>
              <p>
                Unlimited access to 7,000+ world-className courses, hands-on
                projects, and job-ready certificate programs - all included in
                your subscription
              </p>
              <Link href="courses" className="btn_page wow fadeInDown">
                Start Now
              </Link>
              <div className="trusted">
                <h2 className="headtitle head3 wow fadeInDown">Trusted By</h2>
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
        <section className="services services_content container m60">
          <h2 className="headtitle wow fadeInDown">Repairs Services</h2>
          <p className="p_page wow fadeInUp">
            Choose from 204.000 online video courses with new additions
            published every month
          </p>
          <div className="allServices">
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
        <section className="services services_content container m60">
          <h2 className="headtitle wow fadeInDown">Repairs Services</h2>
          <p className="p_page wow fadeInUp">
            Choose from 204.000 online video courses with new additions
            published every month
          </p>
          <div className="allServices">
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
        <section className="become container m60">
          <div className="box">
            <img
              src="/images/become.webp"
              className="img_become"
              alt="become"
            />
            <div className="info_become">
              <h2>Become an instructor</h2>
              <p>
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>
              <Link href="instructor" className="btn_page2">
                Start Now
              </Link>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}


