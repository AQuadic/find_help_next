import { useTranslations } from "next-intl";
import React from "react";



function CForgetPassword() {
  const t = useTranslations('Sign');
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">{t('Forget')}</h2>
          <p className="p_sign">
          {t('forgetTitle')}
          </p>
          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
              {t('email')}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder= {t('enterEmail')}
              />
            </div>

            <input type="submit" value={t('sendMail')} className="btn_page" />
          </form>
        </div>
      </section>
    </>
  );
}

export default CForgetPassword;
