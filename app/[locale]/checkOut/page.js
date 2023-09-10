import React from 'react'

function page() {
 
  
  return (
   <>
   <div className="container breadcrumbDetails">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
          <li className="breadcrumb-item" aria-current="page">Check Out</li>
        </ol>
      </nav>
    </div>

    <section className="checkOut container m90">
      <div className="part1">
        <h2 className="headtitle">Check Out</h2>
        <form className="box">
          <div className="box1">
            <h3>Service Method</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="listGroupRadio"
                  value=""
                  id="firstRadio"
                  checked
                />
                <label className="form-check-label" for="firstRadio">Pick Up</label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="listGroupRadio"
                  value=""
                  id="secondRadio"
                />
                <label className="form-check-label" for="secondRadio"
                  >Delivery
                  </label>
              </li>
            </ul>
          </div>
          <div className="box1">
            <h3>Address</h3>
            <div className="add">
              <img src="/images/address.svg" alt="address" />
              <a href="Address.html" style={{fontFamily: "DM Sans3"}}
                >Add Address
                </a>
              <div className="about_add" style={{display: "none"}}>
                <p>
                  66 Youssef Ghaly Street, Miami , Alexandria. Appointment No.
                  22 Floor No.4
                </p>
                <p>+20 154 256 1235</p>
              </div>
            </div>
          </div>
          <div className="box1">
            <h3>Payment Method</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="listGroupRadio2"
                  value=""
                  id="firstRadio"
                  checked
                />
                <label className="form-check-label" for="firstRadio">Cash</label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="listGroupRadio2"
                  value=""
                  id="secondRadio"
                />
                <label className="form-check-label" for="secondRadio"
                  >Credit Card
                  </label>
              </li>
            </ul>
          </div>
          <div className="box1">
            <h3>Date</h3>
            <input
              className="date"
              name="date"
              placeholder="Select Date"
              readonly=""
              id="datepicker"
              type="text"
            />
          </div>
          <input type="submit" value="Place Order" className="btn_page" />
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