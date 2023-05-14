import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "src/components/Navbar";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="w-100 min-h-screen">
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
              className="about"
              role="tabpanel"
              id="panel:R2jm:1"
              aria-labelledby="tab:R2jm:1"
            />
            <div
              className="portfolio professional"
              role="tabpanel"
              id="panel:R2jm:2"
              aria-labelledby="tab:R2jm:2"
            />
            <div
              className="contact react-tabs__tab-panel--selected"
              role="tabpanel"
              id="panel:R2jm:3"
              aria-labelledby="tab:R2jm:3"
            >
              <div
                className="title-section text-start text-sm-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      Don&apos;t be shy !
                    </h3>
                    <p className="open-sans-font mb-4">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                    <p className="open-sans-font custom-span-contact position-relative">
                      <i className="fa fa-map position-absolute" />
                      <span className="d-block">Address Point</span>
                      Ho Chi Minh city, Viet Nam
                    </p>
                    <p className="open-sans-font custom-span-contact position-relative">
                      <i className="fa fa-envelope-open position-absolute" />
                      <span className="d-block">mail me</span>{" "}
                      <a
                        href="mailto:steve@mail.com"
                        style={{ cursor: "none" }}
                      >
                        hada.nguyen309@mail.com
                      </a>
                    </p>
                    <p className="open-sans-font custom-span-contact position-relative">
                      <i className="fa fa-phone-square position-absolute" />
                      <span className="d-block">call me</span>{" "}
                      <a href="Tel: +84 836 404 231" style={{ cursor: "none" }}>
                        +84 836 404 231
                      </a>
                    </p>
                    <ul className="social list-unstyled pt-1 mb-5 flex items-center">
                      <li>
                        <a
                          href="https://www.facebook.com/dang309/"
                          target="_blank"
                          rel="noreferrer"
                          style={{ cursor: "none" }}
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            size="xl"
                            style={{ color: "#3b5998" }}
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/HaiDang309"
                          target="_blank"
                          rel="noreferrer"
                          style={{ cursor: "none" }}
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            size="xl"
                            style={{ color: "#171515" }}
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-8">
                    <form id="myForm" className="contactform">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="YOUR NAME"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              name="user_email"
                              placeholder="YOUR EMAIL"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              placeholder="YOUR SUBJECT"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="YOUR MESSAGE"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="button"
                            style={{ cursor: "none" }}
                          >
                            <span className="button-text">Send Message</span>
                            <span className="button-icon">
                              <FontAwesomeIcon
                                icon={faPaperPlane}
                                style={{ color: "#ffffff" }}
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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

export default Contact;
