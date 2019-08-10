import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel2";

import Head from "../../components/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScriptLoader from "../../components/scripts";

const options = {
  loop: true,
  nav: false,
  navText: ["", ""],
  autoplay: false,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true
    }
  }
};

const events = {
  onInitialized: function(event) {
    let stageW = $(".project-thumbnails .owl-carousel").width(),
      containerH = $(".project-thumbnails").height(),
      $el = $(".project-thumbnails .owl-item");
    $el.each(function() {
      $(this).css("width", stageW);
    });
    setTimeout(function() {
      let stageH = $(".project-thumbnails .owl-carousel").height();
      $(".project-thumbnails .gallery-container").css("height", stageH);
      if (stageH > containerH) {
        $(".project-thumbnails").css("height", stageH + 40);
      }
    }, 500);
  },
  onResize: function(event) {
    let stageW = $(".project-thumbnails .owl-carousel").width(),
      containerH = $(".project-thumbnails").height(),
      $el = $(".project-thumbnails .owl-item");
    $el.each(function() {
      $(this).css("width", stageW);
    });
    setTimeout(function() {
      let stageH = $(".project-thumbnails .owl-carousel").height();
      $(".project-thumbnails .gallery-container").css("height", stageH);
      if (stageH > containerH) {
        $(".project-thumbnails").css("height", stageH + 40);
      }
    }, 500);
  }
};

class InnerProject extends Component {
  state = {
    projects: [],
    numbers: []
  };

  componentDidMount() {
    this.randomItem();
  }

  static async getInitialProps() {
    const res1 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res1.json();
    return { setting };
  }

  uniqueNumber = maxVal => {
    var number = Math.floor(Math.random() * maxVal + 1);
    if (!this.state.numbers.includes(number)) {
      let result = this.state.numbers;
      result.push(number);
      this.setState({ numbers: result });
      return true;
    } else if (this.state.numbers.length - 1 !== maxVal) {
      this.uniqueNumber(maxVal);
    }
  };

  randomItem = () => {
    for (var i = 0; i < 3; i++) {
      this.uniqueNumber(6);
    }
  };

  render() {
    const { router, setting } = this.props;
    const { numbers, projects } = this.state;
    console.log(this.props.url.query);
    return (
      <div className="inner-portfolio-page">
        <Head title={`Techravity -`} setting={setting} />
        <Navbar router={router} />
        {/* <div className="banner-container">
          <div className="project-bg" style={{ backgroundColor: "#069a92" }} />
          <div className="container">
            <div className="column">
              <img className="wow fadeIn logo" src="../../static/images/projects/logo/1.svg" alt="beliive" />
              <h1>beliive</h1>
              <p>At beliive, you can use your time to share your talents, get some help, learn new skills and connect with people.</p>
              <a href="https://beliive.com/" target="_blank">
                website
              </a>
            </div>
            <div className="column">
              <img className="wow fadeIn mockup" src="../../static/images/projects/1.jpg" alt="beliive" />
            </div>
          </div>
        </div>
        <div className="technology-container">
          <div className="column" />
          <div className="column">
            <div className="items">
              <img src="../../static/images/technology/microsoft.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/html-5.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/css3.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/javascript.svg" />
            </div>
          </div>
        </div>
        <div className="porject-overview-container">
          <div className="container">
            <h2>Overview</h2>
            <p>
              Beliive is the worldÃ¢â‚¬â„¢s largest collaborative network that uses time as currency to enable collaboration and equal opportunities among people. We believe in
              promoting equality through the use of time as currency. Time is equal, no matter who or where you are, one hour has the same value for everyone!
            </p>
            <div className="overview-tabs">
              <div className="row">
                <div className="tabs">
                  <span className="header">Project name:</span>
                  <span className="content">beliive</span>
                </div>
                <div className="tabs">
                  <span className="header">Services:</span>
                  <span className="content">Web application Development, DevOps, UI/UX Design</span>
                </div>
                <div className="tabs">
                  <span className="header">Industry:</span>
                  <span className="content">Social media</span>
                </div>
              </div>
              <div className="row">
                <div className="tabs">
                  <span className="header">Website:</span>
                  <span className="content">https://beliive.com/</span>
                </div>
                <div className="tabs">
                  <span className="header">Technologies:</span>
                  <span className="content">ASP.NET core, HTML, CSS, JS</span>
                </div>
                <div className="tabs">
                  <span className="header">Region:</span>
                  <span className="content">South America & UK</span>
                </div>
              </div>
            </div>
            <div className="space" />
            <h2>Problem</h2>
            <p>
              One of the biggest problem that too many people are dealing with it daily it's how to manage their time to use it in the right way for becoming more productive and
              make fortune from it
            </p>
            <div className="space" />
            <h2>Solution</h2>
            <p>
              We believe that time exchange is a key tool for helping your company become more productive.Beliive Communities is an exclusive and customized solution for
              organizations that want to promote collaboration and the exchange of experiences using time as a currency.
            </p>
          </div>
        </div>
        <div className="project-thumbnails">
          <div className="container">
            <div className="column">
              <h2>integrated design</h2>
              <p>You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
            </div>
          </div>
          <div className="gallery-container">
            <OwlCarousel className="items-container owl-carousel" events={events} options={options}>
              <div className="item">
                <img src="../../static/images/projects/sliders/1/1.jpg" alt="1" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/1/2.jpg" alt="2" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/1/3.jpg" alt="3" />
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="more-projects container">
          <h2>more case studies</h2>
          <div className="row">
            {numbers.map(item => (
              <a key={item} href={projects[item].url} className="items">
                <img src={projects[item].picture} alt={projects[item].title} />
                <div className="content">
                  <h2>{projects[item].title}</h2>
                  <p>{projects[item].description}</p>
                </div>
              </a>
            ))}
          </div>
        </div> */}
        <Footer router={router} setting={setting} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(InnerProject);
