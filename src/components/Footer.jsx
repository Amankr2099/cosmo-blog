import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-center text-white text-lg-start bg-black bg-gradient ">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div className="d-flex d-flex justify-content-evenly">
          <a href="https://www.facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>CosmoBlog
              </h6>
              <p>
                Dive deep into stories of planets,stars,comates,galaxies and
                mind bending phenomenas of this universe and beyond. Here you
                can explore everything about that we humans and our theories
                know
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 py-1 ">
              <h6 className="text-uppercase fw-bold mb-4">Popular</h6>
              <Link
                to="/post/65e449bf648f89b0b5058744"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Black Holes
              </Link>
              <br />
              <Link
                to="/post/65e44b0ba3f2c2c764fa9e87"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Solar System
              </Link>
              <br />
              <Link
                to="/post/65e75175e996144c347f43f3"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Warmholes
              </Link>
              <br />
              <Link
                to="/post/65e73ecfe0902e8b9e6b14b5"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Saturn
              </Link>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 py-1">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <Link
                to="/posts"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Posts
              </Link>
              <br />
              <Link
                to="/about"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                About
              </Link>
              <br />
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </Link>
              <br />
              <Link
                to="/write-post"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Write
              </Link>
              <br />
              <Link
                to="/signup"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Signup
              </Link>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {date.getFullYear()} Copyright
        <Link to="/"> CosmoBlog.com</Link>
      </div>
      {/* Copyright */}
    </footer>
    /* Footer */
  );
};
