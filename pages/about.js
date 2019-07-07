import React, { Component } from "react";
import { withRouter } from "next/router";
import OwlCarousel from "react-owl-carousel2";
import { Controller, Scene } from "react-scrollmagic";
import ReactVivus from "react-vivus";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

const options1 = {
  margin: 10,
  nav: false,
  navText: ["", ""],
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: false
    }
  }
};

const events = {
  onChanged: function(e) {
    $(".about-page .introduction-2 .steps-container li").removeClass("active");
    $(".about-page .introduction-2 .steps-container li:nth-child(" + (e.item.index + 1) + ")").addClass("active");
  }
};

class About extends Component {
  componentDidMount() {
    let slider = this.refs.slider;
    $(document).on("click", ".about-page .introduction-2 .steps-container li", function() {
      $(".about-page .introduction-2 .steps-container li").removeClass("active");
      $(this).addClass("active");
      slider.goTo($(this).attr("data-index") - 1);
    });
  }

  render() {
    const { router } = this.props;
    return (
      <div className="about-page">
        <Head title={"Techravity - About"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="content container">
            <h1>Welcome to Techravity</h1>
            <p>Everything That Now Exists Was Once Imagined</p>
          </div>
        </div>
        <div className="introduction-1 container">
          <div className="img-container">
            <Controller>
              <Scene>
                <div>
                  <ReactVivus
                    id="icon1"
                    option={{
                      file: "../static/images/about/animated/icon1.svg",
                      animTimingFunction: "EASE",
                      type: "sync",
                      duration: 40
                    }}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </Scene>
            </Controller>
          </div>
          <div className="content">
            <h2>About Us</h2>
            <h4>Complexity motivates us</h4>
            <p>
              We love to solve complex problems. Our clients never worry because of our careful engineering who turn your dreams on design and high functionality into digital
              reality.
            </p>
          </div>
        </div>
        <div className="introduction-2">
          <div className="container">
            <h2>Our Process</h2>
            <ul className="steps-container">
              <li className="active" data-index="1">
                Request Quote
              </li>
              <li data-index="2">Design</li>
              <li data-index="3">Development Process</li>
              <li data-index="4">Support</li>
            </ul>
            <OwlCarousel ref="slider" className="owl-carousel" options={options1} events={events}>
              <div className="content">
                <div className="items">
                  <div className="item-container">
                    <div className="item">
                      <img src="/static/images/about/icon/1-01.svg" />
                      <h4>Your Idea</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/1-02.svg" />
                      <h4>Gathering Data</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/1-03.svg" />
                      <h4>Build a structure base on your needs</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/1-04.svg" />
                      <h4>project estimation cost with our suggestion</h4>
                    </div>
                  </div>
                </div>
                <p>
                  It's always the most important step.
                  <br />
                  We make your vision tangible. We ensure that every bit of your vision would be digitized and born in Digital dimension. Clarity is the key, our technicians grasp
                  your vision through the clarity of the details you have in mind and do the planning for it throughout the technical point of view. We want to understand, feel and
                  be a part of your business realm.
                </p>
              </div>
              <div className="content">
                <div className="items">
                  <div className="item-container">
                    <div className="item">
                      <img src="/static/images/about/icon/2-01.svg" />
                      <h4>UX specifications</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/2-02.svg" />
                      <h4>Prepare mockups</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/2-03.svg" />
                      <h4>Mockups test</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/2-04.svg" />
                      <h4>Design preparation</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/2-05.svg" />
                      <h4>Design confirmed</h4>
                    </div>
                  </div>
                </div>
                <p>
                  We believe Eye Catching design result in stunning product. It does not matter how many iterations your Design needed, The out come is what have value for us. At
                  the end of this step our designs and documents would be ready for your approval, after that the real development work will begin.
                </p>
              </div>
              <div className="content">
                <div className="items">
                  <div className="item-container">
                    <div className="item">
                      <img src="/static/images/about/icon/3-01.svg" />
                      <h4>Sprint planning</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/3-02.svg" />
                      <h4>Development</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/3-03.svg" />
                      <h4>Code review</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/3-04.svg" />
                      <h4>Q.A</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/3-05.svg" />
                      <h4>Client Acceptance</h4>
                    </div>
                  </div>
                </div>
                <p>
                  Here’s where the dream comes true!
                  <br /> Expert developers work on your project with the most advanced tools. A dedicated product manager focuses on your production process, while the rest of the
                  team ensure your code is the best possible quality. You are a part of the process at every step. Clear communication every day and weekly meetings according to
                  the project timeline already established. We will make sure everything goes according to plan and just how you want it. We deliver your product as you desirable,
                  smooth, safe and fast.
                </p>
              </div>
              <div className="content">
                <div className="items">
                  <div className="item-container">
                    <div className="item">
                      <img src="/static/images/about/icon/4-01.svg" />
                      <h4>No chat bots</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/4-02.svg" />
                      <h4>No tickets</h4>
                    </div>
                    <div className="item">
                      <img src="/static/images/about/icon/4-03.svg" />
                      <h4>Contact with a real tech support person via email, phone calls and etc.</h4>
                    </div>
                  </div>
                </div>
                <p>
                  All the prior steps were just the beginning. A fast, safe and smooth product with stunning design is nothing without technical support 24/7. Regardless of time
                  and day, we oversee the product with our dedicated support team. If you need additional features or fixing functionalities, just contact us at{" "}
                  <a href="/">Techravity.</a>
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="introduction-3">
          <div className="container">
            <h2>Who we Are</h2>
            <div className="content">
              <p>
                We're a Stockholm, Sweden-based team of passionate developers with offices globally. We develop customized software for web and mobile. We also build workflows and
                systems aiming to digitalize the traditional workflow processes. We offer a suite of white-label digital solutions and aim to get our clients to the market faster.
              </p>
            </div>
            <h2 style={{ marginTop: "50px" }}>Our mentality</h2>
            <div className="content">
              <p>
                First work then reward ! Customer satisfaction is at the center of all our activities. We are confident of our performance to a level that we are willing to provide
                you with a trial round of sample work to prove our punctuality and quality of work before we expect any compensation.
              </p>
            </div>
          </div>
        </div>
        <div className="introduction-6">
          <div className="header">
            <div className="container">
              <h2>OUR TEAM</h2>
            </div>
          </div>
          <div className="items-container container">
            <div className="items sm">
              <div className="content">
                <h2>
                  Saeid
                  <br />
                  Esmailzadeh
                </h2>
                <p>Founder & Director</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/drsaeid" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/saeid-esmaeilzadeh/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:saeid@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/1.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>
                  Pooya
                  <br />
                  Jahan
                </h2>
                <p>Co-Founder & CEO</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/pooyajahan" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:pooya@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/4.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>
                  David
                  <br />
                  Ramazani
                </h2>
                <p>Project Manager</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/davidram/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:david@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/15.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Pourya</h2>
                <p>CTO</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/alaki_" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/sharifi-" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:pourya@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/3.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Annika</h2>
                <p>Branding</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/annika-ottosson-398a24161/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:annika@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/2.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Anna</h2>
                <p>Marketing Manager</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/annaalikhani" target="_blank" />
                  </li>
                  <li>
                    <a className="skype" href="skype:anna_a64a?call" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/anna-alikhani-07abb85a" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:anna@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/6.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Oscar</h2>
                <p>Marketing</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/oscarwiberg/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:oscar@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/13.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Behrouz</h2>
                <p>Business Developer</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/behrouz-omran-3aaa2086" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:behrouz@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/5.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Alexander</h2>
                <p>Digital production</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/alexander-nordfors-b33067b9/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:alexander@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/14.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Shayan</h2>
                <p>Front-End Developer</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/shayanaraghi" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/abbas-edris-araghi/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:shayan@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/8.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Nima</h2>
                <p>Back-End Developer</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/nima-nosrati-71220189/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:nima@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/9.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Hassan</h2>
                <p>Full-Stack Developer</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/hasangilak" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/mohammad-hassan-gilak-9248268a" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:hassan@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/10.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Hiva</h2>
                <p>UI/UX Designer</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/hiva-sharifi-4aa66374" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:hiva@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/11.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Samane</h2>
                <p>Graphic Designer</p>
                <ul className="socials">
                  <li>
                    <a className="twitter" href="https://twitter.com/samanerabiee" target="_blank" />
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/samane-rabiee-297167152" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:samane@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/12.jpg" alt="Profile" />
            </div>
            <div className="items sm">
              <div className="content">
                <h2>Kankash</h2>
                <p>Back-End Developer</p>
                <ul className="socials">
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/mohammad-kankash-8345795b/" target="_blank" />
                  </li>
                  <li>
                    <a className="mail" href="mailto:mohammad@techravity.com" target="_blank" />
                  </li>
                </ul>
              </div>
              <img src="/static/images/about/team/7.jpg" alt="Profile" />
            </div>
            <div className="items hide" />
          </div>
        </div>
        <div className="introduction-4">
          <div className="container">
            <h2>Technologies we use</h2>
            <div className="content">
              <div className="icon-container">
                <img src="/static/images/about/technology/python.svg" alt="python" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/node.svg" alt="nodejs" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/php.svg" alt="js" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/java.svg" alt="java" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/webpack.svg" alt="webpack" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/javascript.svg" alt="javascript" />
              </div>
            </div>
            <div className="content">
              <div className="icon-container">
                <img src="/static/images/about/technology/react.svg" alt="react" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/vue.svg" alt="vue" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/angular.svg" alt="angular" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/css3.svg" alt="css3" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/html5.svg" alt="html5" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/mysql.svg" alt="mysql" />
              </div>
            </div>
            <div className="content">
              <div className="icon-container">
                <img src="/static/images/about/technology/mongodb.svg" alt="mongodb" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/postgresql.svg" alt="postgresql" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/vscode.svg" alt="vscode" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/atom.svg" alt="atom" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/visualstudio.svg" alt="visualstudio" />
              </div>
              <div className="icon-container">
                <img src="/static/images/about/technology/android.svg" alt="android" />
              </div>
            </div>
          </div>
        </div>
        <div className="introduction-5">
          <div className="container">
            <h2>Work with us</h2>
            <p>
              Looking for a highly motivated work area? Work with full potential?
              <br />
              Have a sit among us. We always looking forward to hire a highly experienced and motivated
              <br />
              developer in order to expand our business around the globe. Make sure to contact us.
            </p>
            <a href="contactus.html" className="btn">
              Contact us
            </a>
          </div>
        </div>
        <Footer router={router} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(About);
