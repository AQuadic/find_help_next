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
          <li className="breadcrumb-item" aria-current="page">My Orders</li>
          <li className="breadcrumb-item" aria-current="page">Up coming</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" >My Profile</Link></li>
            <li><Link href="/account/myServices" >My services</Link></li>
            <li><Link href="/account/prmoted" >Promotion</Link></li>
            <li><Link href="/account/myOrders"  className="active">My Orders</Link></li>
            <li><Link href="/account/addressess"  >Addresses</Link></li>
            <li><a href="">Log out</a></li>
          </ul>
        </div>
        <div className="Profile Profile3">
          <h2>My Orders</h2>
          <div className="type_Services">
            <button className="active">Up Coming</button>
            <button>Completed</button>
            <button>Rejected</button>
          </div>

          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <button className="cancel">Cancel Order</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <button className="cancel">Cancel Order</button>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <button className="cancel">Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="services container m90">
            <div className="allServices">
              <div className="service">
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <li
                      className="complete"
                      style={{
                        color: "#2d7700",
                       fontSize: "12px",
                       fontFamily: "DM Sans2"
                      }}
                    >
                      Completed
                    </li>
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
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <li
                      className="complete"
                       style={{
                        color: "#2d7700",
                       fontSize: "12px",
                       fontFamily: "DM Sans2"
                      }}
                    >
                      Completed
                    </li>
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
                <a href="ClientDetails.html" className="client_details">
                  <p>Provider Details</p>
                  <img src="/images/Arrow.svg" alt="Arrow" />
                </a>
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
                    <li
                      className="complete"
                      style={{
                        color: "#2d7700",
                       fontSize: "12px",
                       fontFamily: "DM Sans2"
                      }}
                    >
                      Completed
                    </li>
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
        </div>
      </div>
    </section>
   </>
  )
}

export default page