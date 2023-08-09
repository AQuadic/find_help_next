import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>Account</h2>
            <ul>
              <li>
                <Link href="/account">My Profile</Link>
              </li>
              <li>
                <Link href="/account/password">Password</Link>
              </li>
              <li>
                <Link href="/account/activeSessions" className="active">
                  Linked Accounts
                </Link>
              </li>
              <li>
                <a href="">Log out</a>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">
              Active Sessions <span>( Max 2 Sessions )</span>
            </h2>
            <div className="sessions">
              <ul>
                <li>
                  <img
                    src="/images/icons/labtop.svg"
                    className="imgSession"
                    alt="labtop"
                  />
                  <div className="infoSession">
                    <div className="dec">
                      <h3>50.25.256.125</h3>
                      <h4>Last accessed on 30 Arp 07:15 pm</h4>
                      <p>
                        Chrome <span>on Laptop</span>
                      </p>
                      <p>
                        Signed in <span>on 28 Arp 05:45 pm</span>
                      </p>
                    </div>
                    <button className="btn_page2">Revoke</button>
                  </div>
                </li>
                <li>
                  <img
                    src="/images/icons/mobile.svg"
                    className="imgSession"
                    alt="mobile"
                  />
                  <div className="infoSession">
                    <div className="dec">
                      <h3>50.25.256.125</h3>
                      <h4>Last accessed on 30 Arp 07:15 pm</h4>
                      <p>
                        Chrome <span>on Laptop</span>
                      </p>
                      <p>
                        Signed in <span>on 28 Arp 05:45 pm</span>
                      </p>
                    </div>
                    <button className="btn_page2">Revoke</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
