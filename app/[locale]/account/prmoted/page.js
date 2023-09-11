import Link from 'next/link'
import React from 'react'

function page() {
  return (
       <>
        <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>
          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">Promotion</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" >My Profile</Link></li>
            <li><Link href="/account/myServices" >My services</Link></li>
            <li><Link href="/account/prmoted"  className="active">Promotion</Link></li>
            <li><Link href="/account/myOrders" >My Orders</Link></li>
            <li><Link href="/account/addressess"  >Addresses</Link></li>
            <li><a href="">Log out</a></li>
          </ul>
        </div>
        <div className="Profile Prmoted">
          <div className="content">
            <div className="info_content">
              <h2>Go Promoted</h2>
              <p>No Commitment. Cancel anytime</p>
              <h3>Take your business the new heights</h3>
              <ul>
                <li>
                  <img src="/images/recommend.webp" alt="recommend" />
                  <h4>Be in Recommendation</h4>
                </li>
                <li>
                  <img src="/images/top_search.webp" alt="top_search" />
                  <h4>Top on Search</h4>
                </li>
              </ul>
              <a href="selectServices.html  " className="btn_page">Get Promoted</a>
            </div>
          </div>
        </div>
      </div>
    </section>
       </>
  )
}

export default page