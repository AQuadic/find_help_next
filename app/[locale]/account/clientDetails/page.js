import Link from 'next/link'
import React from 'react'
import BtnLogOut from "@/components/btnLogOut";
function page() {
  return (
    <>
      <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">My Services</li>
          <li className="breadcrumb-item" aria-current="page">Booking Details</li>
        </ol>
      </nav>
    </div>
    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><Link href="/account" >My Profile</Link></li>
            <li><Link href="/account/myServices"  className="active">My services</Link></li>
            <li><Link href="/account/prmoted" >Promotion</Link></li>
            <li><Link href="/account/myOrders" >My Orders</Link></li>
            <li><Link href="/account/addressess"  >Addresses</Link></li>
           <li><BtnLogOut/></li>
          </ul>
        </div>
        <div className="Profile Profile2">
          <div className="warning">
            <img src="images/warning.webp" alt="warning" />
            <div className="about_warning">
              <h3>Be careful!</h3>
              <p>
                Your ratings have become low, please work to improve your
                service.
              </p>
            </div>
          </div>
          <div className="infoclient">
            <div className="information">
              <img src="/images/person.webp" className="person" alt="person" />
              <div className="name_phone">
                <h3>Adam Khaled</h3>
                <div className="infoPhone">
                  <img src="/images/telephone.svg" alt="telephone" />
                  <p style={{direction: "ltr"}}>+20 125 154 1598</p>
                </div>
              </div>
            </div>
            <div className="part2">
              <div className="clientData">
                <h4>Booking details</h4>
                <h5>English Session</h5>
                <ul>
                  <li>
                    <img src="/images/Time-Circle2.svg" alt="Time-Circle" />
                    <p>2 hrs Start 6:00 PM</p>
                  </li>
                  <li>
                    <img src="/images/Calendar.svg" alt="Calendar" />
                    <p>26 Nov,2022</p>
                  </li>
                  <li>
                    <img src="/images/Location2.svg" alt="Location" />
                    <p>sidi bisher, alex</p>
                  </li>
                  <li>
                    <img src="/images/Location2.svg" alt="Location" />
                    <p>On Site</p>
                  </li>
                  <li>
                    <img src="/images/cash.svg" alt="cash" />
                    <p>Pay On Cash</p>
                  </li>
                </ul>
              </div>
              <div className="map_client">
                <h5>Track The Provider</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13644.980469861162!2d29.985604349999996!3d31.2416371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c52fadf4220f%3A0x7d08dceaad4557bd!2sSan%20Stefano%20Grand%20Plaza!5e0!3m2!1sen!2seg!4v1678613910844!5m2!1sen!2seg"
                  width="410"
                  height="324"
                  style={{border: "0", borderRadius: "10px"}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page