import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="fotter_content">
        <div className="head">
          <h1>
            <Link href="/"><img src="/images/logo.svg" alt="logo" /></Link>
          </h1>
          <p>
            We change lives, businesses, and nations through digital
            upskilling, developing the edge you need to conquer what’s next.
          </p>
        </div>
        <div className="part">
          <h2>Main Pages</h2>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/myCourses">My Courses</Link>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <Link href="/instructorScreen">instructorScreen 1</Link>
            <Link href="/instructorScreen/oneCourse">instructorScreen 2</Link>
          </div>
        </div>
        <div className="part">
          <h2>Categories</h2>
          <div className="links">
            <a href="">Design</a>
            <a href="">Music</a>
            <a href="">Development</a>
            <a href="">Marketing</a>
          </div>
        </div>
        <div className="part" style={{alignItems:"center"}}>
          <h2 style={{padding:"0px 20px"}} >Follow Us</h2>
          <div className="links_social">
            <a href="">
              <img src="/images/media/facebook.webp" alt="facebook" />
            </a>

            <a href="">
              <img src="/images/media/linkedin.webp" alt="instagram" />
            </a>
            <a href="">
              <img src="/images/media/insta.webp" alt="linkedin" />
            </a>
            <a href="">
              <img src="/images/media/twiiter.webp" alt="twitter" />
            </a>
          </div>
          <div className="store">
            <a href=""><img src="/images/media/app.webp" alt="app store" /></a>
            <a href=""
              ><img src="/images/media/google.webp" alt="google play"
            /></a>
          </div>
        </div>
        <div className="part">
          <button className="langFooter">
            <img src="/images/media/lang.svg" alt="lang" />
            <p>English</p>
          </button>
        </div>
      </div>
      <div className="copy">
        <p>
          ©
          <a href="https://analytica-tech.com/"
            >https://analytica-tech.com/
            </a>
          , 2019-2022
        </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer