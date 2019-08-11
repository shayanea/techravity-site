import React, { Component } from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
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
  static async getInitialProps() {
    const res1 = await fetch(`http://185.179.169.129:8081/api/menu?menuType=${5}`);
    const page = await res1.json();
    const res2 = await fetch(`http://185.179.169.129:8081/api/service`);
    const services = await res2.json();
    const res3 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res3.json();
    return { page: page[0], services, setting };
  }

  render() {
    const { router, page, services, setting } = this.props;
    return (
      <div className="service-page">
        <Head title={`Techravity - ${page.title}`} setting={setting} />
        <Navbar router={router} />
        <div className="banner-container" style={{ backgroundImage: `url(	http://185.179.169.129:8081${page.coverImage})` }}>
          <div className="content container">
            <ReactWOW animation="fadeIn">
              <h1>{page.slogan}</h1>
              <p>{page.description}</p>
            </ReactWOW>
          </div>
        </div>
        <div className="introduction-2">
          {services.map((item, index) => {
            return (
              <div className="row" key={item.id}>
                <div className="half-width">
                  <ReactWOW animation="fadeIn">
                    <h2>{item.title}</h2>
                    <p>{item.summery}</p>
                    {/* <a href="#">See More</a> */}
                  </ReactWOW>
                </div>
                <Controller>
                  <Scene>
                    <div>
                      {item.icon && (
                        <ReactVivus
                          id={`icon${index + 1}`}
                          option={{
                            // file: `http://185.179.169.129:8081${item.icon}`,
                            file: `../static/images/service/icon${index + 1}.svg`,
                            type: "sync",
                            duration: 40
                          }}
                          style={{ height: "400px", width: "400px" }}
                        />
                      )}
                    </div>
                  </Scene>
                </Controller>
              </div>
            );
          })}
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
                    <li>Have your team in no time</li>
                  </ul>
                </div>
                <img src="/static/images/slider/4.svg" />
              </div>
            </OwlCarousel>
          </ReactWOW>
        </div>
        <Footer router={router} setting={setting} />
        <script src="//cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" />
        <ScriptLoader />
      </div>
    );
  }
}
export default withRouter(Contact);
