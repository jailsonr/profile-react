import React from "react";
import "./nav.css";
import AltProf from "../assets/slice1.png";
import AboutPhoto from "../assets/altamiro_jhenny.jpg";
import cpqi from "../assets/cpqi.png";
import fortes from "../assets/Fortes-Tecnologia.png";
import hsbc from "../assets/HSBC-Logo.png";

const Nav = () => {
  return (
    <div>
      <header className="main-head">
        <nav>
          <h1 id="logo">Rurus</h1>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Case Study</a>
            </li>
            <button className="button">Contact Me</button>
          </ul>
        </nav>
      </header>
      <div class="line-divide">
        <hr />
      </div>
      <section className="intro">
        <div class="intro-img">
          <img src={AltProf} />
        </div>
        <div className="intro-text">
          <h2>Hello! I'm José Altamiro Junior</h2>
          <h3>Bank Account Technical Specialist</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>{" "}
          <br />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className="button">Download CV</button>
        </div>
      </section>
      <div class="line-divide">
        <hr />
      </div>
      <section className="about">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <br />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className="button">Contact Me</button>
        </div>
        <div class="about-img">
          <img src={AboutPhoto} />
        </div>
      </section>
      <div class="line-divide">
        <hr />
      </div>
      <section className="experience">
        <div className="my-experience">
          <div className="intro-text">
            <h2>My Experience</h2>
            <div class="cards">
              <div class="card">
                <div class="card-icon">
                  <img src={fortes} alt="" />
                </div>
                <h4>Fortes Informatica</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="card">
                <div class="card-icon">
                  <img src={cpqi} alt="" />
                </div>
                <h4>CPQi Group</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="card">
                <div class="card-icon">
                  <img src={hsbc} alt="" />
                </div>
                <h4>HSBC</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="line-divide">
        <hr />
      </div>
      <section class="footer">
        <div class="info">
          <h2>Lets Talk</h2>
          <p>
            Pasaje Nueva San Martin, 1490 <br />
            Dpto 2011 <br />
            Phone +569 98747321 <br />
            Email: altamirojrs@gmail.com
          </p>
        </div>
        <div class="info">
          <h2>Info</h2>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="info">
          <h2>Why Me?</h2>
          <p>
            Excepteur sint occaecat <br />
            cupidatat non proident, <br />
            sunt in culpa qui <br />
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nav;
