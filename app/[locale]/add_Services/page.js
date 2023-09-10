import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
     <section className="checkOut container m90">
      <div className="successfully content_center">
        <img src="/images/investmentdata.webp" alt="investmentdata" />
        <h2>Add your services and get your first Client</h2>
        <p>
          You won’t miss a single opportunity to grow your business and make
          money
        </p>
        <Link
          href="/add_New_Services"
          className="btn_page"
          style={{width:"300px",maxWidth:"80%",margin:" 30px auto 0px",height:"50px"}}
          >Add Services
          </Link>
      </div>
    </section>
    </>
  )
}

export default page

