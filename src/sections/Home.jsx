"use client";

import React from "react";

import Image from "next/image";

import Navbar from "src/components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handleScrollToNext = () => {
    const el = document.querySelector("#portfolio");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="home" className="w-100 min-h-screen">
      <div className="yellow">
        <div className="react-tabs" data-rttabs="true">
          <Navbar />
          <div className="tab-panel_list">
            <div
              className="home  react-tabs__tab-panel--selected"
              role="tabpanel"
              id="panel:R2jm:0"
              aria-labelledby="tab:R2jm:0"
            >
              <div
                className="container-fluid main-container container-home p-0 g-0 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <div className="row home-details-container align-items-center">
                  <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block"
                    style={{
                      backgroundImage: "url(/assets/images/avatar.jpg)",
                    }}
                  ></div>
                  <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
                    <div>
                      <Image
                        alt="hero man"
                        src="/assets/images/avatar.jpg"
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="img-fluid main-img-mobile d-sm-block d-lg-none"
                        loading="lazy"
                        style={{ color: "transparent", objectFit: "cover" }}
                      />
                      <h1 className="text-uppercase">
                        I&apos;m Hai Dang.<span>web developer</span>
                      </h1>
                      <p
                        className="text-2xl"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        I&apos;m a web developer focused on crafting clean &amp;
                        user‑friendly experiences. I am passionate about
                        building excellent software that improves the lives of
                        those around me.
                      </p>
                      <button
                        className="button"
                        style={{
                          cursor: "none",
                        }}
                        onClick={handleScrollToNext}
                      >
                        <span className="button-text">more about me</span>
                        <span className="button-icon">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ color: "#ffffff" }}
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="about"
              role="tabpanel"
              id="panel:R2jm:1"
              aria-labelledby="tab:R2jm:1"
            ></div>
            <div
              className="portfolio professional"
              role="tabpanel"
              id="panel:R2jm:2"
              aria-labelledby="tab:R2jm:2"
            ></div>
            <div
              className="contact"
              role="tabpanel"
              id="panel:R2jm:3"
              aria-labelledby="tab:R2jm:3"
            ></div>
            <div
              className="blog"
              role="tabpanel"
              id="panel:R2jm:4"
              aria-labelledby="tab:R2jm:4"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
