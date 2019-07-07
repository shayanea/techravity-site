import React, { Component } from "react";
import { withRouter } from "next/router";
import OwlCarousel from "react-owl-carousel2";
import cogoToast from "cogo-toast";
import ReactWOW from "react-wow";

import Head from "../components/head";
import HeaderText from "../components/home/text";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

const options1 = {
  loop: true,
  margin: 10,
  nav: false,
  navText: ["", ""],
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
      margin: 20,
      autoplayTimeout: 5000
    },
    600: {
      items: 3,
      nav: false,
      autoplayTimeout: 5000
    },
    1000: {
      items: 4,
      nav: true
    }
  }
};

const options2 = {
  loop: true,
  margin: 10,
  nav: true,
  navText: ["", ""],
  dots: false,
  stagePadding: 20,
  margin: 40,
  responsive: {
    0: {
      items: 1,
      nav: false,
      stagePadding: 10,
      dots: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 3
    }
  }
};

const options3 = {
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

class Home extends Component {
  state = {
    hasContentLoaded: false,
    hasSubmited: false,
    name: "",
    email: "",
    message: ""
  };

  componentDidMount() {
    this.setState({ hasContentLoaded: true });
  }

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  submit = e => {
    let self = this;
    e.preventDefault();
    this.setState({ hasSubmited: true });
    if (this.state.name.trim() !== "" && this.validateEmail(this.state.email) && this.state.message.trim() !== "") {
      fetch("https://techravity.herokuapp.com/api/Site/SendContactUs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/problem+json; charset=utf-8"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
      })
        .then(function(res) {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(function(data) {
          cogoToast.success("Thank you! Your message has been sent successfully.");
          self.setState({ hasSubmited: false, name: "", email: "", message: "" });
        })
        .catch(err => {
          cogoToast.error("Something went wrong");
        });
    }
  };

  render() {
    const { router } = this.props;
    const { hasContentLoaded, hasSubmited, name, email, message } = this.state;
    return (
      <div>
        <Head title={"Techravity - Home"} />
        <Navbar router={router} />
        <div className="banner-container">
          <video muted loop preload="none" className="header-video" autoPlay>
            <source src="/static/images/header-video.mp4" type="video/mp4" />
          </video>
          <div className="content container">
            <h2>Looking for</h2>
            <h1 className="cd-headline slide">
              Top
              <HeaderText />
            </h1>
            <h2 style={{ fontWeight: "100", fontSize: "2.5em" }}>IS WHY YOU ARE HERE</h2>
            <p>
              Techravity is a dedicated group of professionals from around the globe who strive to deliver your tailor-made software solutions based on the best technological
              practices.
            </p>
          </div>
        </div>
        <div className="parnters-container">
          <div className="container">
            <h2>In collaboration with:</h2>
            <OwlCarousel className="content owl-carousel" options={options1}>
              <div className="items">
                <img src="/static/images/partners/6.png" />
              </div>
              <div className="items">
                <img src="/static/images/partners/9.png" />
              </div>
              <div className="items">
                <img src="/static/images/partners/8.png" />
              </div>
              <div className="items">
                <img src="/static/images/partners/7.png" />
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="services-container">
          <div className="container">
            <div className="items">
              <div>
                <div className="header">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" style={{ enableBackground: "new 0 0 40 40" }}>
                    <style jsx>
                      {`
                        .st0-3 {
                          fill: none;
                          stroke: #222829;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        }
                      `}
                    </style>
                    <g>
                      <g>
                        <g>
                          <path className="st0-3" d="M26.8,21.7l4.3,1.8c3.7,1.2,5.5,2.4,5.5,6.1v9.7" />
                          <path className="st0-3" d="M13.4,21.7l-4.3,1.8c-3.7,1.2-5.5,2.4-5.5,6.1v9.7" />
                          <line className="st0-3" x1="9.7" y1="34.5" x2="9.7" y2="39.3" />
                          <line className="st0-3" x1="30.4" y1="34.5" x2="30.4" y2="39.3" />
                          <polyline className="st0-3" points="18.3,39.3 18.3,22.9 16.4,21.1 16.4,17.4 			" />
                          <polyline className="st0-3" points="21.9,39.3 21.9,22.9 23.7,21.1 23.7,17.4 			" />
                          <polyline className="st0-3" points="15.8,39.3 15.8,33.2 12.2,24.7 15.8,24.1 12.2,20.5 14,19.3 16.4,18.6 			" />
                          <polyline className="st0-3" points="24.3,39.3 24.3,33.2 28,24.7 24.3,24.1 28,20.5 26.2,19.3 23.7,18.6 			" />
                          <path className="st0-3" d="M14,9.5l-0.6-1.8v-3c0-1,0.8-1.8,1.8-1.8h0.6c0-1,0.8-1.8,1.8-1.8h6.7c1.3,0,2.4,1.1,2.4,2.4v4.3l-0.6,1.8" />
                          <path className="st0-3" d="M24.9,7.7V6.5c0-0.7-0.5-1.2-1.2-1.2V4l-2.4,1.2h-4.9c-0.7,0-1.2,0.5-1.2,1.2v1.2" />
                          <path className="st0-3" d="M14.6,12c0,3,1.2,7.3,5.5,7.3s5.5-4.3,5.5-7.3" />
                          <g>
                            <path
                              className="st0-3"
                              d="M24.9,12.6c-1.2,0-0.6,0-1.8,0c-1.2,0-1.8-1.8-1.8-1.8v-0.6c0-0.3,0.3-0.6,0.6-0.6h4.3
											 c0.3,0,0.6,0.3,0.6,0.6v0.6C26.8,10.7,26.2,12.6,24.9,12.6z"
                            />
                            <path
                              className="st0-3"
                              d="M17,12.6c-1.2,0-0.6,0-1.8,0s-1.8-1.8-1.8-1.8v-0.6c0-0.3,0.3-0.6,0.6-0.6h4.3c0.3,0,0.6,0.3,0.6,0.6v0.6
											 C18.9,10.7,18.3,12.6,17,12.6z"
                            />
                            <line className="st0-3" x1="18.9" y1="10.7" x2="21.3" y2="10.7" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <h2>DEDICATED DEVELOPER</h2>
                </div>
                <p>
                  Do you wish to have a developer or designers onboard like your own employees? We provide you with a dedicated team during the project either on site or remote
                  from our offices.
                </p>
              </div>
              <a href="/services">Read More...</a>
            </div>
            <div className="items">
              <div>
                <div className="header">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" style={{ enableBackground: "new 0 0 40 40" }}>
                    <style jsx>
                      {`
                        .st0-2 {
                          fill: none;
                          stroke: #222829;
                          stroke-miterlimit: 10;
                        }
                      `}
                    </style>
                    <path className="st0-2" d="M10.9,4.5V2.4c0-0.8,0.6-1.4,1.4-1.4H29c0.8,0,1.4,0.6,1.4,1.4v27.2" />
                    <path className="st0-2" d="M13,31.6h17.4v5.6c0,0.8-0.6,1.4-1.4,1.4H12.3c-0.8,0-1.4-0.6-1.4-1.4V6.6h17.4" />
                    <line className="st0-2" x1="20" y1="3.8" x2="21.4" y2="3.8" />
                    <line className="st0-2" x1="17.2" y1="3.8" x2="18.6" y2="3.8" />
                    <line className="st0-2" x1="22.7" y1="3.8" x2="24.1" y2="3.8" />
                    <line className="st0-2" x1="17.2" y1="35.1" x2="24.1" y2="35.1" />
                  </svg>
                  <h2>Mobile Development</h2>
                </div>
                <p>
                  Whether it is custom mobile app development or using cross-platforms, Techravity mobile developers use well-proven agile practices, design thinking and
                  client-focused approach to provide you with the most suitable solution.
                </p>
              </div>
              <a href="/services">Read More...</a>
            </div>
            <div className="items">
              <div>
                <div className="header">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" style={{ enableBackground: "new 0 0 40 40" }}>
                    <style jsx>
                      {`
                        .st0-2 {
                          fill: none;
                          stroke: #222829;
                          stroke-miterlimit: 10;
                        }
                        .st1-2 {
                          fill: none;
                          stroke: #222829;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        }
                      `}
                    </style>
                    <g>
                      <g>
                        <g>
                          <g>
                            <polygon className="st0-2" points="24.9,31 20.6,20.6 31,24.9 26.1,26.2 				" />
                          </g>
                        </g>
                        <g>
                          <path className="st1-2" d="M13.9,17.6C11.3,19.2,8.2,20,4.7,20" />
                          <path className="st1-2" d="M20,4.7c0,3.7-0.8,6.8-2.4,9.2" />
                          <line className="st1-2" x1="18.2" y1="16.4" x2="35.3" y2="20" />
                          <line className="st1-2" x1="16.3" y1="18.2" x2="20" y2="35.3" />
                          <g>
                            <rect x="1" y="18.2" className="st0-2" width="3.7" height="3.7" />
                          </g>
                          <g>
                            <rect x="35.3" y="18.2" className="st0-2" width="3.7" height="3.7" />
                          </g>
                          <g>
                            <rect x="18.2" y="35.3" className="st0-2" width="3.7" height="3.7" />
                          </g>
                          <g>
                            <rect x="18.2" y="1.1" className="st0-2" width="3.7" height="3.7" />
                          </g>
                          <circle className="st1-2" cx="15.7" cy="15.7" r="2.4" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h2>Web Development</h2>
                </div>
                <p>
                  We provide you with the best of both worlds, back-end and front-end development. Our seasoned teams use the latest technologies to build web applications that run
                  on a solid code, with spectacular interfaces based on responsive web design.
                </p>
              </div>
              <a href="/services">Read More...</a>
            </div>
            <div className="items">
              <div>
                <div className="header">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" style={{ enableBackground: "new 0 0 40 40" }}>
                    <style jsx>
                      {`
                        .st0-1 {
                          fill: none;
                          stroke: #222829;
                          stroke-miterlimit: 10;
                        }
                      `}
                    </style>
                    <g>
                      <line className="st0-1" x1="13.2" y1="34.4" x2="16.1" y2="28.7" />
                      <line className="st0-1" x1="24.1" y1="28.7" x2="27" y2="34.4" />
                      <line className="st0-1" x1="30.4" y1="36.7" x2="38.4" y2="36.7" />
                      <line className="st0-1" x1="14.4" y1="36.7" x2="1.8" y2="36.7" />
                      <polyline className="st0-1" points="11.5,36.7 11.5,34.4 28.7,34.4 28.7,36.7 15.5,36.7 	" />
                      <line className="st0-1" x1="30.4" y1="34.4" x2="31.6" y2="34.4" />
                      <line className="st0-1" x1="32.7" y1="34.4" x2="33.8" y2="34.4" />
                      <polyline className="st0-1" points="1.2,22.4 1.2,3.5 39,3.5 39,24.1 1.2,24.1 1.2,28.7 39,28.7 39,25.8 	" />
                      <line className="st0-1" x1="20.7" y1="6.9" x2="19.5" y2="6.9" />
                      <line className="st0-1" x1="18.4" y1="6.9" x2="17.2" y2="6.9" />
                      <line className="st0-1" x1="23" y1="6.9" x2="21.8" y2="6.9" />
                    </g>
                  </svg>
                  <h2>Product Design</h2>
                </div>
                <p>
                  Smooth, slick and user friendly, this is what your product deserves when it comes to UX and UI, where the bridge between the flawless code and an outstanding user
                  experience is made.
                </p>
              </div>
              <a href="/services">Read More...</a>
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="container">
            <a href="/portfolio/1" className="items">
              <div className="inner-content">
                <div className="item-bg" style={{ backgroundImage: "url('/static/images/projects/Mockup-01.jpg')" }} />
                <div className="content">
                  <h2>beliive</h2>
                  <p>Beliive is the world’s largest collaborative network that uses time as currency to enable collaboration and equal opportunities among people.</p>
                </div>
              </div>
            </a>
            <a href="/portfolio/2" className="items">
              <div className="inner-content">
                <div className="item-bg" style={{ backgroundImage: "url('/static/images/projects/Mockup-04.jpg')" }} />
                <div className="content">
                  <h2>Find a player</h2>
                  <p>Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.</p>
                </div>
              </div>
            </a>
            <a href="/portfolio/3" className="items">
              <div className="inner-content">
                <div className="item-bg" style={{ backgroundImage: "url('/static/images/projects/Mockup-02.jpg')" }} />
                <div className="content">
                  <h2>Finna</h2>
                  <p>A groundbreaking, patent pending platform that will revolutionise Fintech industry with focus on bonds.</p>
                </div>
              </div>
            </a>
            <div className="items">
              <div className="inner-content">
                <a href="/portfolio" className="content">
                  <h2 style={{ fontWeight: "100" }}>
                    View All <br />
                    <span style={{ fontWeight: "600" }}>Case Studies</span>
                  </h2>
                  <span className="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clients-container">
          <div className="container">
            <h2 className="title">Our Clients Say</h2>
            <OwlCarousel className="items-container owl-carousel" options={options2}>
              <div className="items">
                <div className="header">
                  <div className="client-image" style={{ backgroundImage: "url('/static/images/client1.jpg')" }} />
                  <div>
                    <span>Shawn</span>
                    <span className="position">CTO of Greenut</span>
                  </div>
                </div>
                <p>
                  “The team at techravity listened to our wishes and requirement and set to work on building an amazing new application. I would not hesitate to recommend their
                  services.”
                </p>
              </div>
              <div className="items">
                <div className="header">
                  <div className="client-image" style={{ backgroundImage: "url('/static/images/client2.jpg')" }} />
                  <div>
                    <span>Lorrana</span>
                    <span className="position">CEO of Beliive</span>
                  </div>
                </div>
                <p>
                  “Techravity are fast, efficient and their products are great value for money. The team is very helpful and knowledgeable and I would highly recommend them. They
                  really know what they are doing.”
                </p>
              </div>
              <div className="items">
                <div className="header">
                  <div className="client-image" style={{ backgroundImage: "url('/static/images/client3.png')" }} />
                  <div>
                    <span>Jim</span>
                    <span className="position">CEO of find a player</span>
                  </div>
                </div>
                <p>
                  “Techravity works remarkably as they have accomplished my numerous problematic projects on time by giving fast & suitable outcomes! I feel it’s an excellent
                  organization to get involved with.”
                </p>
              </div>
              <div className="items">
                <div className="header">
                  <div className="client-image" style={{ backgroundImage: "url('/static/images/client4.png')" }} />
                  <div>
                    <span>Mose</span>
                    <span className="position">Founder & CEO of the SocietyIcon</span>
                  </div>
                </div>
                <p>
                  “One of the finest outsourcing company located in Sweden with a superb grasp on designing and development abilities. I would surely love to endorse Techravity
                  Technologies as the best outsourcing company.”
                </p>
              </div>
              <div className="items">
                <div className="header">
                  <div className="client-image" style={{ backgroundImage: "url('/static/images/client5.png')" }} />
                  <div>
                    <span>Jeremy</span>
                    <span className="position">Spokesman of React Conf</span>
                  </div>
                </div>
                <p>
                  “Techravity are simply the best when it comes to graphic design and Internet applications. I love their work, their attitude, and their wonderful communication
                  skills. Highly recommended!”
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="slider-container">
          <ReactWOW animation="fadeIn">
            <div className="container">
              <h2 className="header-title">type of customers</h2>
            </div>
            <OwlCarousel className="owl-carousel" options={options3}>
              <div className="item">
                <div className="content">
                  <h2 className="title">MVP for startups</h2>
                  <p className="description">We turn your idea into a more tangible MVP :</p>
                  <ul>
                    <li>Agile planning stage</li>
                    <li>Most suitable technology for your idea</li>
                    <li>Early stage product with key features and functionalities</li>
                    <li>Marketing strategy based on early feedbacks</li>
                  </ul>
                </div>
                <img src="/static/images/slider/1.svg" />
              </div>
              <div className="item">
                <div className="content">
                  <h2 className="title">Business Projects</h2>
                  <p className="description">Your Vision will be delivered right on time :</p>
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
                  <p className="description">Based on your project you can have many developers :</p>
                  <ul>
                    <li>Fast HR recruitment</li>
                    <li>Talk with your developers directly</li>
                    <li>Budget can be flexible</li>
                    <li>Better staff management</li>
                    <li>Project manager with a fixed payment</li>
                  </ul>
                </div>
                <img src="/static/images/slider/3.svg" />
              </div>
              <div className="item">
                <div className="content">
                  <h2 className="title">Software Companies</h2>
                  <p className="description">Need a development team for your project? We have a solution for you :</p>
                  <ul>
                    <li>No need for an equipment budget</li>
                    <li>No need for extra office space</li>
                    <li>Have your team in No TIME</li>
                  </ul>
                </div>
                <img src="/static/images/slider/4.svg" />
              </div>
            </OwlCarousel>
          </ReactWOW>
        </div>
        <div className="contact-page">
          <div className="introduction-1 container">
            <h2>contact us</h2>
            <h4>Talk to a Human</h4>
            <p>
              You're not going to hit a long phone menu when you call us, your email isn't going to the inbox abyss. At Techravity, we provide exceptional service we'd want to
              experience ourselves!
            </p>
            <div className="row">
              <div className="content">
                <p>Techravity is a dedicated group of professionals who strive to deliver your tailor-made software solutions based on the best technological practices.</p>
                <p>
                  <span>Tel:</span>
                  <a href="tel:+46735859836">+46 735 859 836</a>
                </p>
                <p>
                  <span>Email:</span>
                  <a href="mailto:Info@techravity.com">Info@techravity.com</a>
                </p>
                <p>
                  <span>Address 1: </span>Stureplan 15, 111 45 Stockholm, Sweden
                </p>
                <p>
                  <span>Address 2: </span>Bilkent Cyberpark, Cyberplaza A Blok, No: 706, 06800, &Ccedil;ankaya/Ankara, TURKEY
                </p>
                <div className="items">
                  <ul className="socials">
                    <li>
                      <a href="https://twitter.com/techravity" target="_blank" />
                    </li>
                    <li>
                      <a href="https://www.facebook.com/techravity" target="_blank" />
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/techravity" target="_blank" />
                    </li>
                    <li>
                      <a href="https://www.instagram.com/techravity/" target="_blank" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <form className="contactus" noValidate onSubmit={this.submit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      onChange={e => this.setState({ name: e.target.value })}
                      style={{
                        border: hasSubmited && name.trim() === "" ? "1px solid red" : "1px solid #eee"
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      onChange={e => this.setState({ email: e.target.value })}
                      style={{
                        border: hasSubmited && !this.validateEmail(email) ? "1px solid red" : "1px solid #eee"
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message*"
                      onChange={e => this.setState({ message: e.target.value })}
                      style={{
                        border: hasSubmited && message.trim() === "" ? "1px solid red" : "1px solid #eee"
                      }}
                    />
                  </div>
                  <button className="btn">Send</button>
                  <ul>
                    <li>By sending you accept the confidentiality and personal information policies</li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer router={router} />
        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `$(document).ready(function() {
							$(".parnters-container .container .owl-carousel").owlCarousel({
								loop: true,
								margin: 10,
								responsiveClass: true,
								nav: false,
								navText: ["", ""],
								autoplay: true,
								autoplayTimeout: 3000,
								autoplayHoverPause: true,
								responsive: {
									0: {
										items: 2,
										nav: true,
										margin: 20,
										autoplayTimeout: 5000
									},
									600: {
										items: 3,
										nav: false,
										autoplayTimeout: 5000
									},
									1000: {
										items: 4,
										nav: true
									}
								}
							});
							$(".clients-container .owl-carousel").owlCarousel({
								loop: true,
								margin: 10,
								responsiveClass: true,
								nav: true,
								navText: ["", ""],
								dots: false,
								stagePadding: 20,
								margin: 40,
								responsive: {
									0: {
										items: 1,
										nav: false,
										stagePadding: 10,
										dots: true
									},
									600: {
										items: 1,
										nav: false
									},
									1000: {
										items: 3
									}
								}
							});
							$(".slider-container .owl-carousel").owlCarousel({
								loop: true,
								margin: 45,
								responsiveClass: true,
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
							});
						});`
          }}
        /> */}
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(Home);
