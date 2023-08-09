import Link from "next/link";
import React from "react";

function CourseDetails() {
  return (
    <>
      <div class="coursesDetails coursesDetails1 ">
        <div class="part1">
          <div class="content container">
            <div class="contantAbout">
              <h2>Design Thinking for Beginners: Develop Innovative Ideas</h2>
              <h3>
                Apply the five-step design thinking process to identify and
                creatively solve problems using a human-centered approach.
              </h3>
              <p>
                Instructor: <Link href="/instractorInfo">Ahmed Muhammed</Link>
              </p>
            </div>
            <div class="contantCart">
              <h3>Get started today</h3>
              <h4>Start your application or request more information.</h4>
              <Link href="/checkOut" class="btn_page">
                Apply Now
              </Link>
              <ul>
                <li>
                  <img src="/images/details/video.svg" alt="video" />
                  <p>1 hour on-demand video</p>
                </li>
                <li>
                  <img src="/images/details/test.svg" alt="test" />
                  <p>1 practice test</p>
                </li>
                <li>
                  <img src="/images/details/assignment.svg" alt="assignment" />
                  <p>Assignments</p>
                </li>
                <li>
                  <img
                    src="/images/details/copywriting.svg"
                    alt="copywriting"
                  />
                  <p>1 article</p>
                </li>
                <li>
                  <img
                    src="/images/details/smart-devices.svg"
                    alt="smart-devices"
                  />
                  <p>Access on mobile and TV</p>
                </li>
                <li>
                  <img src="/images/details/award.svg" alt="award" />
                  <p>Certificate of completion</p>
                </li>
                <li>
                  <img src="/images/details/infinity.svg" alt="infinity" />
                  <p>Full lifetime access</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="part2 ">
            <div class="part">
              <h2 class="headDetails">What you'll learn</h2>
              <div class="learn">
                <ul class="row">
                  <li class="col-md-5">
                    <img src="/images/details/true.svg" alt="true" />
                    <p>
                      Develop knowledge of cybersecurity analyst tools including
                      data protection; endpoint protection; SIEM; and systems
                      and network fundamentals.
                    </p>
                  </li>
                  <li class="col-md-5">
                    <img src="/images/details/true.svg" alt="true" />
                    <p>
                      Learn about key compliance and threat intelligence topics
                      important in today’s cybersecurity landscape.
                    </p>
                  </li>
                  <li class="col-md-5">
                    <img src="/images/details/true.svg" alt="true" />
                    <p>
                      Gain skills for incident responses and forensics with
                      real-world cybersecurity case studies.
                    </p>
                  </li>
                  <li class="col-md-5">
                    <img src="/images/details/true.svg" alt="true" />
                    <p>
                      Get hands-on experience to develop skills via industry
                      specific and open source Security tools.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="part">
              <h2 class="headDetails">What you'll learn</h2>
              <div class="skills">
                <ul>
                  <li>UX Design</li>
                  <li>User Interface Design</li>
                  <li>UX Design</li>
                  <li>User Interface Design</li>
                </ul>
              </div>
            </div>
            <div class="part">
              <div class="course_Content">
                <h2 class="headDetails">Course Content</h2>
                <h3>6 sections • 32 lectures • 1h 15m total length</h3>
                <div class="all_Course_Content">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample2"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Introduction
                        </button>
                        <p>2 lectures • 15m</p>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample2"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <img
                                src="/images/details/video.svg"
                                alt="video"
                              />
                              <p>1 hour on-demand video</p>
                            </li>
                            <li>
                              <img src="/images/details/test.svg" alt="test" />
                              <p>1 practice test</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/assignment.svg"
                                alt="assignment"
                              />
                              <p>Assignments</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/copywriting.svg"
                                alt="copywriting"
                              />
                              <p>1 article</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/smart-devices.svg"
                                alt="smart-devices"
                              />
                              <p>Access on mobile and TV</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/award.svg"
                                alt="award"
                              />
                              <p>Certificate of completion</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/infinity.svg"
                                alt="infinity"
                              />
                              <p>Full lifetime access</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsetwo"
                          aria-expanded="false"
                          aria-controls="flush-collapsetwo"
                        >
                          Chapter 1 - Basics of UX
                        </button>
                        <p>2 lectures • 15m</p>
                      </h2>
                      <div
                        id="flush-collapsetwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample2"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <img
                                src="/images/details/video.svg"
                                alt="video"
                              />
                              <p>1 hour on-demand video</p>
                            </li>
                            <li>
                              <img src="/images/details/test.svg" alt="test" />
                              <p>1 practice test</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/assignment.svg"
                                alt="assignment"
                              />
                              <p>Assignments</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/copywriting.svg"
                                alt="copywriting"
                              />
                              <p>1 article</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/smart-devices.svg"
                                alt="smart-devices"
                              />
                              <p>Access on mobile and TV</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/award.svg"
                                alt="award"
                              />
                              <p>Certificate of completion</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/infinity.svg"
                                alt="infinity"
                              />
                              <p>Full lifetime access</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsethree"
                          aria-expanded="false"
                          aria-controls="flush-collapsethree"
                        >
                          Chapter 2 - Basics of UX
                        </button>
                        <p>2 lectures • 15m</p>
                      </h2>
                      <div
                        id="flush-collapsethree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample2"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <img
                                src="/images/details/video.svg"
                                alt="video"
                              />
                              <p>1 hour on-demand video</p>
                            </li>
                            <li>
                              <img src="/images/details/test.svg" alt="test" />
                              <p>1 practice test</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/assignment.svg"
                                alt="assignment"
                              />
                              <p>Assignments</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/copywriting.svg"
                                alt="copywriting"
                              />
                              <p>1 article</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/smart-devices.svg"
                                alt="smart-devices"
                              />
                              <p>Access on mobile and TV</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/award.svg"
                                alt="award"
                              />
                              <p>Certificate of completion</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/infinity.svg"
                                alt="infinity"
                              />
                              <p>Full lifetime access</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsefour"
                          aria-expanded="false"
                          aria-controls="flush-collapsefour"
                        >
                          Chapter 3 - Basics of UX
                        </button>
                        <p>2 lectures • 15m</p>
                      </h2>
                      <div
                        id="flush-collapsefour"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample2"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <img
                                src="/images/details/video.svg"
                                alt="video"
                              />
                              <p>1 hour on-demand video</p>
                            </li>
                            <li>
                              <img src="/images/details/test.svg" alt="test" />
                              <p>1 practice test</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/assignment.svg"
                                alt="assignment"
                              />
                              <p>Assignments</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/copywriting.svg"
                                alt="copywriting"
                              />
                              <p>1 article</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/smart-devices.svg"
                                alt="smart-devices"
                              />
                              <p>Access on mobile and TV</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/award.svg"
                                alt="award"
                              />
                              <p>Certificate of completion</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/infinity.svg"
                                alt="infinity"
                              />
                              <p>Full lifetime access</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsefive"
                          aria-expanded="false"
                          aria-controls="flush-collapsethree"
                        >
                          Chapter 4 - Basics of UX
                        </button>
                        <p>2 lectures • 15m</p>
                      </h2>
                      <div
                        id="flush-collapsefive"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample2"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <img
                                src="/images/details/video.svg"
                                alt="video"
                              />
                              <p>1 hour on-demand video</p>
                            </li>
                            <li>
                              <img src="/images/details/test.svg" alt="test" />
                              <p>1 practice test</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/assignment.svg"
                                alt="assignment"
                              />
                              <p>Assignments</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/copywriting.svg"
                                alt="copywriting"
                              />
                              <p>1 article</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/smart-devices.svg"
                                alt="smart-devices"
                              />
                              <p>Access on mobile and TV</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/award.svg"
                                alt="award"
                              />
                              <p>Certificate of completion</p>
                            </li>
                            <li>
                              <img
                                src="/images/details/infinity.svg"
                                alt="infinity"
                              />
                              <p>Full lifetime access</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="part">
              <div class="description">
                <h2 class="headDetails">Requirements</h2>
                <p>
                  No pre-requisites, although experience with working in product
                  or services companies in engineering/project
                  management/program management roles is recommended.
                </p>
              </div>
            </div>
            <div class="part">
              <div class="description">
                <h2 class="headDetails">Description</h2>
                <p>
                  A recent news article calls the Product Manager the 4th most
                  important role in a company today, making product management
                  one of the hottest jobs in the market. However, most people
                  are unaware of what exactly a Product Manager does. Does the
                  role require technical skills or business skills? And what is
                  it about the role that demands extreme empathy with the
                  customer? This e-learning course by the Institute of Product
                  Leadership is a foundational course that demystifies the role.
                  Starting from the very basics of “What is a product?”, the
                  course curriculum introduces students to the productizing
                  process and the skills and frameworks such as Market Analysis,
                  Strategic Planning, Product Planning, Go to Market and Sales
                  Enablement required to design, launch and nurture a product.
                  Students will also be introduced to the role and career path
                  of a Product Manager and the business, technology and customer
                  contexts a person needs to master to become a good Product
                  Manager. Although no prior knowledge is required, an
                  appreciation or hands-on experience of how product and
                  services companies operate is helpful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="part3 container">
          <div class="box">
            <img
              src="/images/details/certificate.webp"
              class="img_box"
              alt="certificate"
            />
            <h2>Earn a career certificate</h2>
            <p>
              Add this credential to your LinkedIn profile, resume, or CV Share
              it on social media and in your performance review
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
