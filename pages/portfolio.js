import React, { Component } from "react";
import { withRouter } from "next/router";
import ReactWOW from "react-wow";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

class Portfolio extends Component {
  render() {
    const { router } = this.props;
    return (
      <div className="portfolio-page">
        <Head title={"Techravity - Portfolio"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="content container">
            <h1>See How We Helped Our Clients</h1>
            <p>Here’s the real thing - view the projects we’ve released and see the results for yourself.</p>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="container">
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>beliive</h2>
                  <p>Beliive is the world's largest collaborative network that uses time as currency to enable collaboration and equal opportunities among people.</p>
                  <a href="/portfolio/1">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/1.jpg" alt="beliive" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>Find a player</h2>
                  <p>Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.</p>
                  <a href="/portfolio/4">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/4-2.png" alt="Find a player" />
                  </ReactWOW>
                  <ReactWOW animation="fadeInLeft" duration="0.5s" delay="0.3s">
                    <img src="/static/images/projects/4-1.png" alt="Find a player" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>Finna</h2>
                  <p>A groundbreaking, patent pending platform that will revolutionise Fintech industry with focus on bonds.</p>
                  <a href="/portfolio/3">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/3.png" alt="Finna" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>SOCIETY ICON</h2>
                  <p>
                    We believe that you as a person will be at the center of marketing in the future. The power of a person's social media has never been as high as it is today.
                  </p>
                  <a href="/portfolio/6">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/6-2.png" alt="SOCIETY ICON" />
                  </ReactWOW>
                  <ReactWOW animation="fadeInLeft" duration="0.5s" delay="0.3s">
                    <img src="/static/images/projects/6-1.png" alt="SOCIETY ICON" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>MOJO</h2>
                  <p>Mojo is a mobile platform which allows you to trade stocks directly, without bank interfering. Be a part of the new generation of investors.</p>
                  <a href="/portfolio/5">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/5.png" alt="MOJO" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>Amerta</h2>
                  <p>Amerta is the ultimate trivia quiz because it contains more than 4.000 questions that are developed by our team of educators.</p>
                  <a href="/portfolio/8">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/8-2.png" alt="Find a player" />
                  </ReactWOW>
                  <ReactWOW animation="fadeInLeft" duration="0.5s" delay="0.3s">
                    <img src="/static/images/projects/8-1.png" alt="Find a player" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>GIFTLET</h2>
                  <p>GIFTLET is an E-gifting Service for Top retailers and brands that enables their users to buy gifts for others without requiring their size or color.</p>
                  <a href="/portfolio/7">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/7.png" alt="GIFTLET" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>Greenut</h2>
                  <p>Greenut allows you to shop online at wholesale rate, anytime and anywhere with just a tap of your finger. You can search for desired products.</p>
                  <a href="/portfolio/2">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/2-2.png" alt="Greenut" />
                  </ReactWOW>
                  <ReactWOW animation="fadeInLeft" duration="0.5s" delay="0.3s">
                    <img src="/static/images/projects/2-1.png" alt="Greenut" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>Toolgram</h2>
                  <p>A powerful tool to manage and have revenue from all your telegram channels in one place.</p>
                  <a href="/portfolio/9">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/9.png" alt="Toolgram" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
            <div className="items">
              <ReactWOW animation="fadeInUp" duration=".3s">
                <div className="content">
                  <h2>ReactConf</h2>
                  <p>ReactConf Iran is a Iranian web, mobile development & everything about javascript development event.</p>
                  <a href="/portfolio/10">See more</a>
                </div>
                <div className="img-holder">
                  <ReactWOW animation="fadeIn" duration="0.5s">
                    <img src="/static/images/projects/10.png" alt="ReactConf" />
                  </ReactWOW>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
        <Footer router={router} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(Portfolio);
