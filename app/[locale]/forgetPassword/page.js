import { useTranslations } from "next-intl";
import React from "react";

export const metadata = {
  title: 'analytica | Forget Password',
}

function ForgetPassword() {
  const t = useTranslations('Index');
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">{t('title')}</h2>
          <p className="p_sign">
            Please enter your registered e-mail address for sending new password
          </p>
          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
                Email Adress{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter Your Email"
              />
            </div>

            <input type="submit" value="Send Mail" className="btn_page" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
