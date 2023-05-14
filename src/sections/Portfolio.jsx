import React, { useState } from "react";
import Image from "next/image";

import Navbar from "src/components/Navbar";

import Modal from "src/components/Modal";

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    video: "",
  });

  function openModal(project) {
    setOpen(true);
    setSelectedProject(project);
  }

  return (
    <section id="portfolio" className="w-100 min-h-screen">
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
              className="portfolio professional react-tabs__tab-panel--selected"
              role="tabpanel"
              id="panel:R2jm:2"
              aria-labelledby="tab:R2jm:2"
            >
              <div
                className="title-section text-start text-sm-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
              </div>
              <div className="portfolio-main">
                <div className="react-tabs" data-rttabs="true">
                  <div className="container">
                    <div
                      className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                      role="tabpanel"
                      id="panel:r0:0"
                      aria-labelledby="tab:r0:0"
                    >
                      <div className="tab-container">
                        <div
                          data-aos="fade-right"
                          data-aos-delay={0}
                          className="aos-init aos-animate"
                          onClick={() =>
                            openModal({
                              title: "GSAM",
                              video: "/assets/videos/gsam.gif",
                            })
                          }
                        >
                          <div className="tab-content">
                            <Image
                              alt="portfolio project demo"
                              src="/assets/images/gsam.png"
                              width={895}
                              height={552}
                              decoding="async"
                              data-nimg={1}
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <h3>
                              <span className="conent-title">gsam</span>
                            </h3>
                          </div>
                        </div>
                        <div
                          data-aos="fade-right"
                          data-aos-delay={100}
                          className="aos-init aos-animate"
                          onClick={() =>
                            openModal({
                              title: "MYMY",
                              video: "",
                            })
                          }
                        >
                          <div className="tab-content">
                            <Image
                              alt="portfolio project demo"
                              src="/assets/images/mymy.png"
                              width={895}
                              height={552}
                              decoding="async"
                              data-nimg={1}
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <h3>
                              <span className="conent-title">mymy</span>
                            </h3>
                          </div>
                        </div>
                        <div
                          data-aos="fade-right"
                          data-aos-delay={200}
                          className="aos-init aos-animate"
                          onClick={() =>
                            openModal({
                              title: "LARCHIVEUM",
                              video: "",
                            })
                          }
                        >
                          <div className="tab-content">
                            <Image
                              alt="larchiveum logo"
                              src="/assets/images/larchiveum.png"
                              width={895}
                              height={552}
                              decoding="async"
                              data-nimg={1}
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <h3>
                              <span className="conent-title">larchiveum</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="react-tabs__tab-panel"
                      role="tabpanel"
                      id="panel:r0:1"
                      aria-labelledby="tab:r0:1"
                    />
                    <div
                      className="react-tabs__tab-panel"
                      role="tabpanel"
                      id="panel:r0:2"
                      aria-labelledby="tab:r0:2"
                    />
                    <div
                      className="react-tabs__tab-panel"
                      role="tabpanel"
                      id="panel:r0:3"
                      aria-labelledby="tab:r0:3"
                    />
                    <div
                      className="react-tabs__tab-panel"
                      role="tabpanel"
                      id="panel:r0:4"
                      aria-labelledby="tab:r0:4"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
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

      <Modal open={open} setOpen={setOpen} project={selectedProject} />
    </section>
  );
};

export default Portfolio;
