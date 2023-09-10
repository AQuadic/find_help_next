"use client";
import React from 'react'


function Footer() {
 
  return (
    <footer>
      <div className="container">
        <div className="fotter_content">
          <div className="head">
            <h1>
              <a href="index.html"><img src="/images/logo.svg" alt="" /></a>
            </h1>
            <p>Find All The Services You Need In Find Help</p>
          </div>
          <div className="part">
            <h2>About</h2>
            <div className="links">
              <a href="">Contact Us</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Use</a>
            </div>
          </div>
          <div className="part">
            <h2>Countries</h2>
            <div className="links links2">
              <p>Kuwait</p>
              <p>Egypt</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
              <p>Bahrain</p>
            </div>
          </div>
          <div className="part">
            <h2 style={{padding: "0px 20px"}}>Follow Us</h2>
            <div className="links_social">
              <a href="">
                <img src="/images/facebook.webp" alt="facebook" />
              </a>

              <a href="">
                <img src="/images/linkedin.webp" alt="instagram" />
              </a>
              <a href="">
                <img src="/images/insta.webp" alt="linkedin" />
              </a>
              <a href="">
                <img src="/images/twiiter.webp" alt="twitter" />
              </a>
            </div>
            <div className="store">
              <a href=""><img src="/images/app.webp" alt="app store" /></a>
              <a href=""
                ><img src="/images/google.webp" alt="google play"
              /></a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>
            © Find Help, 2019-2022 Made by
            <a href="#">AQuadic Solution Company</a>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer