import React from "react";
import Link from "next/link";
export const metadata = {
  title: 'analytica | INSTRUCTOR',
}
function Instructor() {
  return (
    <>
      <section className="become container m60 become2">
        <div className="box">
          <div className="info_become">
            <h2>Come teach with us</h2>
            <p>Become an instructor and change lives — including your own</p>

            <Link href="/contactForm" className="btn_page">
              Start Now
            </Link>
          </div>
          <img
            src="/images/icons/become2.webp"
            className="img_become"
            alt="become"
          />
        </div>
      </section>

      <section className="begin container m60">
        <h2>How To Begin</h2>
        <div className="stepsBegin">
          <div className="part1">
            <span id="mySpan"></span>
          </div>
          <div className="part2" id="myDiv">
            <ul>
              <li>
                <h3>Apply The Form</h3>
                <div className="aboutBegin">
                  <img src="/images/icons/log-in.webp" alt="log-in" />
                  <p>
                    You start with your passion and knowledge. Then choose a
                    promising topic with the help of our Marketplace Insights
                    tool. The way that you teach — what you bring to it — is up
                    to you.
                  </p>
                </div>
              </li>
              <li>
                <h3>Apply The Form</h3>
                <div className="aboutBegin rev">
                  <img src="/images/icons/game-plan.webp" alt="game-plan" />
                  <p>
                    Use basic tools like a smartphone or a DSLR camera. Add a
                    good microphone and you’re ready to start. If you don’t like
                    being on camera, just capture your screen. Either way, we
                    recommend two hours or more of video for a paid course.
                  </p>
                </div>
              </li>
              <li>
                <h3>Apply The Form</h3>
                <div className="aboutBegin">
                  <img src="/images/icons/female.webp" alt="female" />
                  <p>
                    Use basic tools like a smartphone or a DSLR camera. Add a
                    good microphone and you’re ready to start. If you don’t like
                    being on camera, just capture your screen. Either way, we
                    recommend two hours or more of video for a paid course.
                  </p>
                </div>
              </li>
              <li>
                <h3>Apply The Form</h3>
                <div className="aboutBegin rev">
                  <img src="/images/icons/rocket.webp" alt="rocket" />
                  <p>
                    Gather your first ratings and reviews by promoting your
                    course through social media and your professional networks.
                    Your course will be discoverable in our marketplace where
                    you earn revenue from each paid enrollment.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="become container m60">
        <div className="box">
          <img src="/images/become.webp" className="img_become" alt="become" />
          <div className="info_become">
            <h2>Become an instructor</h2>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <Link href="/contactForm" className="btn_page2">
              Start Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instructor;
