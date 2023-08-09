import React from 'react'
import Link from 'next/link'

function SignIn() {
  return (
    <>
      <section className="sign container">
      <div className="box_sign">
        <h2 className="title_sign">Log in and start learning</h2>
        <div className="signWith">
          <ul>
            <li>
              <a href="" className="google">
                <img src="/images/media/google2.svg" alt="google" />
                <p>Sign Up By Gmail</p>
              </a>
            </li>
            <li>
              <a href="" className="facebook">
                <img src="/images/media/face2.svg" alt="facebook" />
                <p>Sign Up By Facebook</p>
              </a>
            </li>
          </ul>
        </div>
        <form className="row g-4 form_page">
        
          <div className="col-md-12">
            <label htmlFor="inputEmail" className="form-label">Email Adress </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputpassword" className="form-label">Password </label>
            <input
              type="password"
              className="form-control"
              id="inputpassword"
              placeholder="Enter The Password "
            />
            <Link href="/forgetPassword" className="forget" >Forget password?</Link>
          </div>

          <input type="submit" value="Sign Up" className="btn_page" />
        </form>
        <div className="haveAccount">
           
          <p>Don’t have an account?<Link href="/signUp">   Sign Up</Link></p>
        </div>
      </div>
    </section>
    </>
  )
}

export default SignIn