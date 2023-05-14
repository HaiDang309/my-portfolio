import React from "react";

import Image from "next/image";

import Navbar from "src/components/Navbar";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section id="about" className="w-100 min-h-screen">
      <div className="yellow">
        <div className="react-tabs" data-rttabs="true">
          <Navbar />
          <div className="tab-panel_list">
            <div
              className="home "
              role="tabpanel"
              id="panel:R2jm:0"
              aria-labelledby="tab:R2jm:0"
            />
            <div
              className="about react-tabs__tab-panel--selected"
              role="tabpanel"
              id="panel:R2jm:1"
              aria-labelledby="tab:R2jm:1"
            >
              <div
                data-aos="fade-up"
                data-aos-duration={1200}
                className="aos-init aos-animate"
              >
                <div className="title-section text-start text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">education & skills</span>
                </div>
                <section className="main-content ">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-5 col-12">
                        <div className="row">
                          <div className="col-12">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                              personal infos
                            </h3>
                          </div>
                          <div className="col-12 d-block d-sm-none">
                            <Image
                              alt="about avatar"
                              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-mobile.bffeb54a.jpg&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-mobile.bffeb54a.jpg&w=640&q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-mobile.bffeb54a.jpg&w=640&q=75"
                              width={300}
                              height={300}
                              decoding="async"
                              data-nimg={1}
                              className="img-fluid main-img-mobile"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div className="col-12">
                            <ul className="about-list list-unstyled open-sans-font">
                              <li>
                                <span className="title">first name: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  Nguyen Hai
                                </span>
                              </li>
                              <li>
                                <span className="title">last name: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  Dang
                                </span>
                              </li>
                              <li>
                                <span className="title">Birthday: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  30/09/2001
                                </span>
                              </li>
                              <li>
                                <span className="title">Nationality: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  Vietnamese
                                </span>
                              </li>
                              
                              <li>
                                <span className="title">Address: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  Ho Chi Minh city, Viet Nam
                                </span>
                              </li>
                              <li>
                                <span className="title">phone: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  +84 836 404 231
                                </span>
                              </li>
                              <li>
                                <span className="title">Email: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  hada.nguyen309@mail.com
                                </span>
                              </li>
                              {/* <li> */}
                              {/*   <span className="title">Skype: </span> */}
                              {/*   <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block "> */}
                              {/*     {" "} */}
                              {/*     steve.milner */}
                              {/*   </span> */}
                              {/* </li> */}
                              <li>
                                <span className="title">langages: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                                  Vietnamese, English
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 mt-1">
                            <a
                              className="button"
                              href="/assets/resume.pdf"
                              target="_blank"
                              style={{ cursor: "none" }}
                            >
                              <span className="button-text">my resume</span>
                              <span className="button-icon">
                                <FontAwesomeIcon
                                  icon={faDownload}
                                  style={{ color: "#ffffff" }}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                        <div className="row">
                          <div className="col-6">
                            <div className="box-stats with-margin">
                              <h3 className="poppins-font position-relative">
                                1
                              </h3>
                              <p className="open-sans-font m-0 position-relative text-uppercase">
                                years of{" "}
                                <span className="d-block">experience</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="box-stats with-margin">
                              <h3 className="poppins-font position-relative">
                                3
                              </h3>
                              <p className="open-sans-font m-0 position-relative text-uppercase">
                                completed{" "}
                                <span className="d-block">projects</span>
                              </p>
                            </div>
                          </div>
                          {/* <div className="col-6"> */}
                          {/*   <div className="box-stats with-margin"> */}
                          {/*     <h3 className="poppins-font position-relative"> */}
                          {/*       81 */}
                          {/*     </h3> */}
                          {/*     <p className="open-sans-font m-0 position-relative text-uppercase"> */}
                          {/*       Happy <span className="d-block">customers</span> */}
                          {/*     </p> */}
                          {/*   </div> */}
                          {/* </div> */}
                          {/* <div className="col-6"> */}
                          {/*   <div className="box-stats with-margin"> */}
                          {/*     <h3 className="poppins-font position-relative"> */}
                          {/*       53 */}
                          {/*     </h3> */}
                          {/*     <p className="open-sans-font m-0 position-relative text-uppercase"> */}
                          {/*       awards <span className="d-block">won</span> */}
                          {/*     </p> */}
                          {/*   </div> */}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <hr className="separator" />
                    <div className="row">
                      <div className="col-12">
                        <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
                          My Skills
                        </h3>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/html.png"
                          alt="html logo"
                          width={256}
                          height={256}
                        />
                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          HTML
                        </h6>
                      </div>

                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/css3.png"
                          alt="css3 logo"
                          width={256}
                          height={256}
                        />

                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          css
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/js.png"
                          alt="js logo"
                          width={256}
                          height={256}
                        />

                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          javascript
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/react.png"
                          alt="react logo"
                          width={256}
                          height={256}
                        />

                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          reactjs
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/nodejs.png"
                          alt="nodejs logo"
                          width={256}
                          height={256}
                        />
                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          nodejs
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/sql.png"
                          alt="sql logo"
                          width={256}
                          height={256}
                        />

                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          sql
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/ubuntu.png"
                          alt="linux logo"
                          width={256}
                          height={128}
                        />
                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          linux
                        </h6>
                      </div>
                      <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <Image
                          src="/assets/images/aws.png"
                          alt="aws logo"
                          width={256}
                          height={128}
                        />

                        <h6 className="text-uppercase ft-wt-600 text-center mt-2 mt-sm-4">
                          aws
                        </h6>
                      </div>
                    </div>
                    <hr className="separator mt-1" />
                    <div className="row">
                      <div className="col-12">
                        <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
                          Experience <span>&amp;</span> Education
                        </h3>
                      </div>
                      <div className="col-lg-12 m-15px-tb flex justify-content-center">
                        <div className="resume-box">
                          <ul>
                            <li>
                              <div className="icon">
                                <i className="fa fa-briefcase" />
                              </div>
                              <span className="time open-sans-font text-uppercase">
                                {" "}
                                July, 2021 - Present
                              </span>
                              <h5 className="poppins-font text-uppercase">
                                {" "}
                                Web Developer
                                <span className="place open-sans-font">
                                  Gemiso, Broadcasting solutions.
                                </span>
                              </h5>
                              <p className="open-sans-font"></p>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="fa fa-briefcase" />
                              </div>
                              <span className="time open-sans-font text-uppercase">
                                April - July, 2021
                              </span>
                              <h5 className="poppins-font text-uppercase">
                                internship{" "}
                                <span className="place open-sans-font">
                                  Sendo Technology J.S.C.
                                </span>
                              </h5>
                              <p className="open-sans-font"></p>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="fa fa-briefcase" />
                              </div>
                              <span className="time open-sans-font text-uppercase">
                                2019
                              </span>
                              <h5 className="poppins-font text-uppercase">
                                Engineering Degree
                                <span className="place open-sans-font">
                                  University of Information Technology - VNUHCM
                                </span>
                              </h5>
                              <p className="open-sans-font"></p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <div className="col-lg-6 m-15px-tb"> */}
                      {/*   <div className="resume-box"> */}
                      {/*     <ul> */}
                      {/*       <li> */}
                      {/*         <div className="icon"> */}
                      {/*           <i className="fa fa-briefcase" /> */}
                      {/*         </div> */}
                      {/*         <span className="time open-sans-font text-uppercase"> */}
                      {/*           2015 */}
                      {/*         </span> */}
                      {/*         <h5 className="poppins-font text-uppercase"> */}
                      {/*           ENGINEERING DEGREE */}
                      {/*           <span className="place open-sans-font"> */}
                      {/*             OXFORD UNIVERSITY */}
                      {/*           </span> */}
                      {/*         </h5> */}
                      {/*         <p className="open-sans-font"> */}
                      {/*           {" "} */}
                      {/*           Lorem ipsum dolor sit amet, consectetur tempor */}
                      {/*           incididunt ut labore adipisicing elit */}
                      {/*         </p> */}
                      {/*       </li> */}
                      {/*       <li> */}
                      {/*         <div className="icon"> */}
                      {/*           <i className="fa fa-briefcase" /> */}
                      {/*         </div> */}
                      {/*         <span className="time open-sans-font text-uppercase"> */}
                      {/*           2012 */}
                      {/*         </span> */}
                      {/*         <h5 className="poppins-font text-uppercase"> */}
                      {/*           MASTER DEGREE */}
                      {/*           <span className="place open-sans-font"> */}
                      {/*             KIEV UNIVERSITY */}
                      {/*           </span> */}
                      {/*         </h5> */}
                      {/*         <p className="open-sans-font"> */}
                      {/*           Lorem incididunt dolor sit amet, consectetur */}
                      {/*           eiusmod dunt doldunt dol elit, tempor incididunt */}
                      {/*         </p> */}
                      {/*       </li> */}
                      {/*       <li> */}
                      {/*         <div className="icon"> */}
                      {/*           <i className="fa fa-briefcase" /> */}
                      {/*         </div> */}
                      {/*         <span className="time open-sans-font text-uppercase"> */}
                      {/*           2009 */}
                      {/*         </span> */}
                      {/*         <h5 className="poppins-font text-uppercase"> */}
                      {/*           BACHELOR DEGREE{" "} */}
                      {/*           <span className="place open-sans-font"> */}
                      {/*             TUNIS HIGH SCHOOL */}
                      {/*           </span> */}
                      {/*         </h5> */}
                      {/*         <p className="open-sans-font"> */}
                      {/*           Lorem ipsum dolor sit amet, tempor incididunt ut */}
                      {/*           laboreconsectetur elit, sed do eiusmod tempor */}
                      {/*           duntt */}
                      {/*         </p> */}
                      {/*       </li> */}
                      {/*     </ul> */}
                      {/*   </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="portfolio professional"
              role="tabpanel"
              id="panel:R2jm:2"
              aria-labelledby="tab:R2jm:2"
            />
            <div
              className="contact"
              role="tabpanel"
              id="panel:R2jm:3"
              aria-labelledby="tab:R2jm:3"
            />
            <div
              className="blog"
              role="tabpanel"
              id="panel:R2jm:4"
              aria-labelledby="tab:R2jm:4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
