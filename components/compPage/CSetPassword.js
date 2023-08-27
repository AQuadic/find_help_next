import { useTranslations } from "next-intl";
import React from "react";

function CSetPassword() {
  const t = useTranslations('Sign');
  return (
    <>
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign" style={{ margin: "0" }}>
           {t('set')}
          </h2>

          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputPassword" className="form-label">
              {t('newPassword')}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder= {t('enterNew')}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPassword2" className="form-label">
              {t('confirmNew')}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder= {t('enterAgain')}
              />
            </div>

            <input type="submit" value={t('confirm')} className="btn_page" />
          </form>
        </div>
      </section>
    </>
  );
}

export default CSetPassword;
