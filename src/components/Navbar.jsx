import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTowerObservation,
  faLaptop,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleScrollIntoView = () => {
    
  }
  return (
    <div className="header">
      <ul
        className=" icon-menu revealator-slideup revealator-once revealator-delay1"
        role="tablist"
      >
        <li
          className="icon-box"
          role="tab"
          id="tab:R2jm:0"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="panel:R2jm:0"
          data-rttab="true"
        >
          <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
          <h2>Home</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="tab:R2jm:1"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="panel:R2jm:1"
          data-rttab="true"
        >
          <FontAwesomeIcon
            icon={faTowerObservation}
            style={{ color: "#ffffff" }}
          />
          <h2>About</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="tab:R2jm:2"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="panel:R2jm:2"
          data-rttab="true"
        >
          <FontAwesomeIcon icon={faLaptop} style={{ color: "#ffffff" }} />
          <h2>Portfolio</h2>
        </li>
        <li
          className="icon-box react-tabs__tab--selected"
          role="tab"
          id="tab:R2jm:3"
          aria-selected="true"
          aria-disabled="false"
          aria-controls="panel:R2jm:3"
          data-rttab="true"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
          <h2>Contact</h2>
        </li>
        {/* <li
          className="icon-box"
          role="tab"
          id="tab:R2jm:4"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="panel:R2jm:4"
          data-rttab="true"
        >
          <i className="fa fa-comments" />
          <h2>Blog</h2>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
