"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { getMyOrders } from "@/components/useAPI/shop/shop";
function page() {
  const [MyOrder, setMyOrder] = useState([]);
  useEffect(() => {
    FetchDataOFMyOrder();
  }, []);
  const FetchDataOFMyOrder = async () => {
    const Orders = await getMyOrders();
    if (!Orders) console.log(Orders?.message);
    setMyOrder(Orders.data.filter(item=>item.user_service!== null));
  };
  console.log(MyOrder);
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Account
            </li>
            <li className="breadcrumb-item" aria-current="page">
              My Orders
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Up coming
            </li>
          </ol>
        </nav>
      </div>

      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account">My Profile</Link>
              </li>
              <li>
                <Link href="/account/myServices">My services</Link>
              </li>
              <li>
                <Link href="/account/prmoted">Promotion</Link>
              </li>
              <li>
                <Link href="/account/myOrders" className="active">
                  My Orders
                </Link>
              </li>
              <li>
                <Link href="/account/addressess">Addresses</Link>
              </li>
              <li>
                <BtnLogOut />
              </li>
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
                {
                  MyOrder.map((order) => {
return(
  <div className="service" key={order.id}>
  <Link
    href={`/account/myOrders/${order.id}`}
    
    className="client_details"
  >
    <p>Provider Details</p>
    <img src="/images/Arrow.svg" alt="Arrow" />
  </Link>
  <img
    src={
      order.user_service.images?.length > 0
        ? order.user_service.images[0].url
        : `/images/logo.svg`
    }
    className="imgService"
    alt="service"
  />
  <div className="aboutservice">
    <div className="head">
      <h3>{order.user_service.description.en}</h3>
      <div className="Star">
        <img src="/images/star.svg" alt="star" />
        <p>4.8</p>
      </div>
    </div>
    <ul>
      <li>
        <img
          src="/images/Time-Circle.svg"
          alt="Time-Circle"
        />
        <p>
          {order.user_service.work_times?.time_from} to{" "}
          {order.user_service.work_times?.time_to}
        </p>
      </li>
      <li>
        <img
          src="/images/Location.svg"
          alt="Location"
        />
        <p>{order.user_service.address_text.en}</p>
      </li>
    </ul>
    <div className="salary_pay">
      <div className="salary">
        {/* <span className="sall">2000 EGP</span> */}
        <p>
          {order.user_service.price}{" "}
          {order.user_service.currency}
        </p>
      </div>
      <button className="cancel">Cancel Order</button>
    </div>
  </div>
</div>
)
                       
                     
                  })}
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
                          fontFamily: "DM Sans2",
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
                          fontFamily: "DM Sans2",
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
                          fontFamily: "DM Sans2",
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
  );
}

export default page;
