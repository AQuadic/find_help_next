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
          <li className="breadcrumb-item" aria-current="page">Select Services</li>
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
            <li><button >Log out</button></li>
          </ul>
        </div>
        <div className="Profile Profile3">
          <h2>Select a Service</h2>
          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <div className="del_edit">
                  <button className="delete">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                  <button className="edit">
                    <img src="/images/edit.svg" alt="edit" />
                  </button>
                </div>
                <img
                  src="/images/service1.webp"
                  className="imgService"
                  alt="service"
                />
                <div className="aboutservice">
                  <div className="head">
                    <h3>Alloy Wheel Repairs Derby</h3>
                    <div className="Star">
                      <img src="/images/star.svg" alt="star" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <img src="/images/Time-Circle.svg" alt="Time-Circle" />
                      <p>9:00 AM to 10:00 PM</p>
                    </li>
                    <li>
                      <img src="/images/Location.svg" alt="Location" />
                      <p>sidi bisher, alex</p>
                    </li>
                  </ul>
                  <div className="salary_pay">
                    <div className="salary">
                      <span className="sall">2000 EGP</span>
                      <p>1000 EGP</p>
                    </div>
                    <div className="recommented">
                      <h4>Recommented</h4>
                      <h5>Expired 5 May 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service active">
                <div className="del_edit">
                  <button className="delete">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                  <button className="edit">
                    <img src="/images/edit.svg" alt="edit" />
                  </button>
                </div>
                <img
                  src="/images/service1.webp"
                  className="imgService"
                  alt="service"
                />
                <div className="aboutservice">
                  <div className="head">
                    <h3>Alloy Wheel Repairs Derby</h3>
                    <div className="Star">
                      <img src="/images/star.svg" alt="star" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <img src="/images/Time-Circle.svg" alt="Time-Circle" />
                      <p>9:00 AM to 10:00 PM</p>
                    </li>
                    <li>
                      <img src="/images/Location.svg" alt="Location" />
                      <p>sidi bisher, alex</p>
                    </li>
                  </ul>
                  <div className="salary_pay">
                    <div className="salary">
                      <p>2000 EGP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service">
                <div className="del_edit">
                  <button className="delete">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                  <button className="edit">
                    <img src="/images/edit.svg" alt="edit" />
                  </button>
                </div>
                <img
                  src="/images/service1.webp"
                  className="imgService"
                  alt="service"
                />
                <div className="aboutservice">
                  <div className="head">
                    <h3>Alloy Wheel Repairs Derby</h3>
                    <div className="Star">
                      <img src="/images/star.svg" alt="star" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <img src="/images/Time-Circle.svg" alt="Time-Circle" />
                      <p>9:00 AM to 10:00 PM</p>
                    </li>
                    <li>
                      <img src="/images/Location.svg" alt="Location" />
                      <p>sidi bisher, alex</p>
                    </li>
                  </ul>
                  <div className="salary_pay">
                    <div className="salary">
                      <p>2000 EGP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="btn_page">Pay</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default page