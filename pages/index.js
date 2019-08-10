import React, { Component } from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
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

  static async getInitialProps() {
    const res1 = await fetch(`http://185.179.169.129:8081/api/menu?menuType=${1}`);
    const page = await res1.json();
    const res2 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res2.json();
    const res3 = await fetch(`http://185.179.169.129:8081/api/service`);
    const services = await res3.json();
    const res4 = await fetch(`http://185.179.169.129:8081/api/project`);
    const projects = await res4.json();
    const res5 = await fetch(`http://185.179.169.129:8081/api/menu?menuType=${7}`);
    const contact = await res5.json();
    return { page: page[0], setting, services, projects: projects.slice(0, 3), contact: contact[0] };
  }

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  submit = e => {
    e.preventDefault();
    this.setState({ hasSubmited: true });
    if (this.state.name.trim() !== "" && this.validateEmail(this.state.email) && this.state.message.trim() !== "") {
      fetch("http://185.179.169.129:8081/api/contactUs", {
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
      }).then(function(res) {
        if (res.ok) {
          this.form.reset();
          return cogoToast.success("Thank you! Your message has been sent successfully.");
        } else {
          cogoToast.error("Something went wrong");
          throw new Error("Something went wrong");
        }
      });
    }
  };

  render() {
    const { router, setting, page, services, projects, contact } = this.props;
    const { hasSubmited, name, email, message } = this.state;
    return (
      <div>
        <Head title={`Techravity`} setting={setting} />
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
            <p>{setting.description}</p>
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
            {services.map(item => {
              return (
                <div key={item.id} className="items">
                  <div>
                    <div className="header">
                      {item.thumbnail && <img src={`http://185.179.169.129:8081${item.thumbnail}`} alt={item.title} />}
                      <h2>{item.title}</h2>
                    </div>
                    <p>{item.slug}</p>
                  </div>
                  <a href="/services">Read More...</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="projects-container">
          <div className="container">
            {projects.map(item => {
              let cover = JSON.parse(item.slideShow);
              return (
                <a key={item.id} href={`/portfolio/${item.id}`} className="items">
                  <div className="inner-content">
                    <div className="item-bg" style={{ backgroundImage: `url(http://185.179.169.129:8081${cover[0].file})` }} />
                    <div className="content">
                      <h2>{item.title}</h2>
                      <p>{item.slug}</p>
                    </div>
                  </div>
                </a>
              );
            })}
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
                    <li>Have your team in no time</li>
                  </ul>
                </div>
                <img src="/static/images/slider/4.svg" />
              </div>
            </OwlCarousel>
          </ReactWOW>
        </div>
        <div className="contact-page">
          <div className="introduction-1 container">
            <div dangerouslySetInnerHTML={{ __html: `${contact.body}` }} />
            <div className="row">
              <div className="content">
                <p>{setting.description}</p>
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
                <form ref={ref => (this.form = ref)} className="contactus" noValidate onSubmit={this.submit}>
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
        <Footer router={router} setting={setting} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(Home);
