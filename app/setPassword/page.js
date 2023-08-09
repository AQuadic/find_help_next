import React from "react";

function SetPassword() {
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign" style={{ margin: "0" }}>
            Set A New Password
          </h2>

          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Enter New Password"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPassword2" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Enter New Password Again"
              />
            </div>

            <input type="submit" value="Send Mail" className="btn_page" />
          </form>
        </div>
      </section>
    </>
  );
}

export default SetPassword;
