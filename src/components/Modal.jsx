import React from "react";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import Image from "next/image";

const Modal = ({ open, setOpen, project }) => {
  function closeModal() {
    setOpen(false);
  }
  return (
    <div
      className={clsx(
        "modal_portfolio",
        open ? "opacity-1 visible" : "opacity-0 invisible"
      )}
    >
      <div className="modal__outside" />
      <div className="modal__content">
        <div data-aos="fade" className="aos-init aos-animate">
          <h2 className="heading mb-2">{project.title}</h2>
          <div className="modal__details">
            <div className="row open-sans-font">
              {/* <div className="col-12 col-sm-6 mb-2"> */}
              {/*   <i className="fa fa-file-text-o pr-2" /> */}
              {/*   Project: <span className="ft-wt-600 uppercase">video</span> */}
              {/* </div> */}
              {/* <div className="col-12 col-sm-6 mb-2"> */}
              {/*   <i className="fa fa-user-o pr-2" /> */}
              {/*   Client : <span className="ft-wt-600 uppercase">Videohive</span> */}
              {/* </div> */}
              {/* <div className="col-12 col-sm-6 mb-2"> */}
              {/*   <i className="fa fa-code pr-2" /> */}
              {/*   Language :{" "} */}
              {/*   <span className="ft-wt-600 uppercase"> */}
              {/*     {" "} */}
              {/*     Adobe After Effects */}
              {/*   </span> */}
              {/* </div> */}
              {/* <div className="col-12 col-sm-6 mb-2"> */}
              {/*   <i className="fa fa-external-link pr-2" /> */}
              {/*   Preview :{" "} */}
              {/*   <a */}
              {/*     className="preview-link" */}
              {/*     target="_blank" */}
              {/*     rel="noopener noreferrer nofollow" */}
              {/*     href="#!" */}
              {/*     style={{ cursor: "none" }} */}
              {/*   > */}
              {/*     www.videohive.net */}
              {/*   </a> */}
              {/* </div> */}
            </div>
          </div>
          <figure className="modal__img videocontainer">
            <Image src={project.video} alt="" width={256} height={256} />
            {/* <iframe */}
            {/*   src="https://www.youtube.com/embed/7e90gBu4pas" */}
            {/*   title="YouTube video player" */}
            {/*   className="youtube-video" */}
            {/*   allowFullScreen */}
            {/* /> */}
          </figure>
          <button
            className="close-modal"
            style={{ cursor: "none" }}
            onClick={closeModal}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2xl"
              style={{ color: "#ffffff" }}
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
