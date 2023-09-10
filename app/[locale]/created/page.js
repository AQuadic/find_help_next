import React from 'react'

function page() {
  return (
    <>
       <section className="page_log">
      <div className="container">
        <div className="box_log">
          <h3>Almost There,</h3>
          <p className="dec" style={{marginBottom: "24px"}}>
            Complete Your Personal Information To Create The Account
          </p>
          <div className="img_persone">
            <img src="/images/person.webp" className="person" alt="person" />
            <button>
              <img src="/images/Camera.svg" alt="Camera" />
            </button>
          </div>
          <form className="row g-3 form_page">
            <div className="col-md-12">
              <label for="inputname4 " className="form-label">Full Name </label>
              <input
                type="text"
                className="form-control"
                id="inputname4"
                placeholder="Full Name"
                value="Donia El Wazery"
              />
            </div>

            <div className="col-md-12">
              <label for="inputemail " className="form-label">Email Adress </label>
              <input
                type="email"
                className="form-control"
                id="inputemail"
                placeholder="Email"
                value="doniaahmedelwazery@gmail.com"
              />
            </div>
            <input type="submit" value="Done" className="btn_page" />
          </form>
        </div>
      </div>
    </section>

    <section className="endPage_login">
      <p>© Find Help, 2019-2022 Made by</p>
      <a href="#"> AQuadic Solution Company</a>
    </section>
    </>
  )
}

export default page