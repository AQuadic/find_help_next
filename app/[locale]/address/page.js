import Link from 'next/link'
import React from 'react'

function page() {
  return (
  <>
  <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
          <li className="breadcrumb-item" aria-current="page">Check Out</li>
          <li className="breadcrumb-item" aria-current="page">Addresses</li>
        </ol>
      </nav>
    </div>

    <section className="checkOut container m90">
      <div className="part1">
        <h2 className="headtitle">Addresses</h2>
        <form className="box">
          <div className="box1 address_page">
            <div className="myAddress">
              <img src="/images/address.svg" alt="address" />
              <div className="about_address">
                <p>
                  66 Youssef Ghaly Street, Miami , Alexandria. Appointment No.
                  22 Floor No.4
                </p>
                <p>+20 154 256 1235</p>
              </div>
            </div>
            <Link href="/newAddress" className="addAddress">
              <h5>+</h5>
              <h6>Add New Address</h6>
            </Link>
          </div>

          <input type="submit" value="Next " className="btn_page" />
        </form>
      </div>
      <div className="part2">
        <h2 className="headtitle">Booking Summary</h2>
        <div className="box">
          <ul>
            <li>
              <h3>Provider</h3>
              <h4>Muhammed Ahmed</h4>
            </li>
            <li>
              <h3>Service Type</h3>
              <h4>Repair car’s Wheels</h4>
            </li>
            <li className="amount">
              <h3>Amount</h3>
              <h4>2500 EGP</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </>
  )
}

export default page