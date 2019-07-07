import React, { Component } from "react";
import { withRouter } from "next/router";
import OwlCarousel from "react-owl-carousel2";
import { Controller, Scene } from "react-scrollmagic";
import ReactVivus from "react-vivus";
import ReactWOW from "react-wow";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

const options = {
  loop: true,
  margin: 45,
  nav: false,
  navText: ["", ""],
  autoplay: true,
  autoplayTimeout: 7000,
  center: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2,
      nav: false,
      margin: 35
    },
    600: {
      items: 1.2,
      nav: false
    },
    1000: {
      items: 1.8,
      nav: false
    }
  }
};

class Contact extends Component {
  render() {
    const { router } = this.props;
    return (
      <div className="service-page">
        <Head title={"Techravity - Services"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="content container">
            <ReactWOW animation="fadeIn">
              <h1>development is our obsession</h1>
              <p>
                We create solutions that solve your business pain, respond market needs, <br />
                transform internal operations and follow the latest digital trends.
              </p>
            </ReactWOW>
          </div>
        </div>
        <div className="introduction-2">
          <div className="row">
            <div className="half-width">
              <ReactWOW animation="fadeIn">
                <h2>DEDICATED DEVELOPER</h2>
                <p>
                  Are you looking for a TECH SPECIALIST at an affordable price? Let us help you with extending your team. We specialize in offering TAILORED analysis and
                  programming services to your existing IT-team at different sizes and capabilities. Whether you are an early-stage start-up or established IT-department, we're
                  devoted to help you. Our colleagues are trained in working agile and are ready to onboard at any stage, methodology, language and infrastructure of your request.
                  We are well-versed in various front and back end technologies, we love to work with HTML5, CSS3, Javascript, .NET, Java, Node.js, React native and also through
                  the frameworks that our customers have implemented in their companies. Accessing and programming on Oracle or SQL Server databases in most cases.
                </p>
                <a href="#">See More</a>
              </ReactWOW>
            </div>
            <Controller>
              <Scene>
                <div>
                  <ReactVivus
                    id="icon1"
                    option={{
                      file: "../static/images/service/icon1.svg",
                      type: "sync",
                      duration: 40
                    }}
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
              </Scene>
            </Controller>
          </div>
          <div className="row">
            <div className="half-width">
              <ReactWOW animation="fadeIn">
                <h2>Mobile Development</h2>
                <p>
                  Creating MOBILE APPLICATIONS is essential in our digital world. The constant evolution of technologies forces companies to use current tools for enhancing
                  customer experiences. It is no longer a question of entering lines of code but of imagining the most stable, scalable and efficient applications that meet the
                  needs of the client. That's why our agency adapts to trends by imagining and designing innovative projects. Our team identifies all stakeholders required to
                  produce from an application, from functional design to native or hybrid development.
                </p>
                <a href="#">See More</a>
              </ReactWOW>
            </div>
            <Controller>
              <Scene>
                <div>
                  <ReactVivus
                    id="icon2"
                    option={{
                      file: "../static/images/service/icon2.svg",
                      type: "sync",
                      duration: 40
                    }}
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
              </Scene>
            </Controller>
          </div>
          <div className="row">
            <div className="half-width">
              <ReactWOW animation="fadeIn">
                <h2>Web Development</h2>
                <p>
                  By paying ATTENTION TO DETAILS, we carefully commit all our WEB DEVELOPMENT designs to include end-to-end experts from a standard web project to an integrated
                  omni/multi channel e-commerce experience. We are devoted to help at any stage, from the business thinking to the delivery of a product, by fully meeting the
                  requirements of the end user. Our specialists offer tailor-made sites to the B2B/B2C e-commerce store building, by offering solutions tailored to meet your
                  needs.Dedicated Developer
                </p>
                <a href="#">See More</a>
              </ReactWOW>
            </div>
            <Controller>
              <Scene>
                <div>
                  <ReactVivus
                    id="icon3"
                    option={{
                      file: "../static/images/service/icon3.svg",
                      type: "sync",
                      duration: 40
                    }}
                    style={{ height: "400px", width: "500px" }}
                  />
                </div>
              </Scene>
            </Controller>
          </div>
          <div className="row">
            <div className="half-width">
              <ReactWOW animation="fadeIn">
                <h2>Product Design</h2>
                <p>
                  We understand PRODUCT DESIGN. Whether for a company, a product or a service, our artistic directors will be delighted to offer you an original visual identity, a
                  logo, a web or print mockup, a graphic charter. We will turn your project idea into a unique concept, while our UI/UX behavior specialists will take care of the
                  end-users' experience.
                </p>
                <a href="#">See More</a>
              </ReactWOW>
            </div>
            <Controller>
              <Scene>
                <div>
                  <ReactVivus
                    id="icon4"
                    option={{
                      file: "../static/images/service/icon4.svg",
                      type: "sync",
                      duration: 40
                    }}
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
              </Scene>
            </Controller>
          </div>
        </div>
        <div className="slider-container">
          <ReactWOW animation="fadeIn">
            <div className="container">
              <h2 className="header-title">type of customers</h2>
            </div>
            <OwlCarousel className="owl-carousel" options={options}>
              <div className="item">
                <div className="content">
                  <h2 className="title">MVP for startups</h2>
                  <p className="description">We turn your idea into a more TANGLIBLE MVP Benefits offered:</p>
                  <ul>
                    <li>Agile planning stage</li>
                    <li>Most suitable Technology for your idea</li>
                    <li>Early stage product with key features and functionalities</li>
                    <li>Marketing strategy based on early feedbacks</li>
                  </ul>
                </div>
                <img src="/static/images/slider/1.svg" />
              </div>
              <div className="item">
                <div className="content">
                  <h2 className="title">Business Projects</h2>
                  <p className="description">Your Vision will be delivered right on time Benefits offered:</p>
                  <ul>
                    <li>Agile DEDICATED DEVELOPER teams to your project</li>
                    <li>Be in your targeting market and have realtime feedbacks</li>
                    <li>Prototype and MVP</li>
                    <li>Market fit product and scaling</li>
                  </ul>
                </div>
                <img src="/static/images/slider/2.svg" />
              </div>
              <div className="item">
                <div className="content">
                  <h2 className="title">Team extension</h2>
                  <p className="description">Based on your Project you can have many developers Benefits offered:</p>
                  <ul>
                    <li>Fast HR recruitment</li>
                    <li>Talk with your developers Directly</li>
                    <li>Don’t worry about the budget, prices can be flexible</li>
                    <li>Better staff management</li>
                    <li>Project Manager with a fixed payment</li>
                  </ul>
                </div>
                <img src="/static/images/slider/3.svg" />
              </div>
              <div className="item">
                <div className="content">
                  <h2 className="title">Software Companies</h2>
                  <p className="description">Need a development team for your project? We have a solution for you Benefits offered:</p>
                  <ul>
                    <li>Don’t need for equipment budget</li>
                    <li>Don’t need a space to place the team</li>
                    <li>Have your team in no TIME</li>
                  </ul>
                </div>
                <img src="/static/images/slider/4.svg" />
              </div>
            </OwlCarousel>
          </ReactWOW>
        </div>
        <Footer router={router} />
        <script src="//cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" />
        <ScriptLoader />
      </div>
    );
  }
}
export default withRouter(Contact);
