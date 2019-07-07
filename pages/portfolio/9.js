import React, { Component } from "react";
import { withRouter } from "next/router";
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
    console.log(stageW, containerH);
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
    projects: [
      {
        id: 0,
        title: "beliive",
        description: "Beliive is the world's largest collaborative network that uses time as currency to enable collaboration and equal opportunities among people.",
        picture: "../../static/images/projects/Mockup-01.jpg",
        url: " 1.html"
      },
      {
        id: 1,
        title: "Greenut",
        description: "Greenut allows you to shop online at wholesale rate, anytime and anywhere with just a tap of your finger. You can search for desired products.",
        picture: "../../static/images/projects/Mockup-03.jpg",
        url: "2.html"
      },
      {
        id: 2,
        title: "Finna",
        description: "A groundbreaking, patent pending platform that will revolutionise Fintech industry with focus on bonds.",
        picture: "../../static/images/projects/Mockup-02.jpg",
        url: "3.html"
      },
      {
        id: 3,
        title: "Find a player",
        description: "Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.",
        picture: "../../static/images/projects/Mockup-04.jpg",
        url: "4.html"
      },
      {
        id: 4,
        title: "MOJO",
        description: "Mojo is a mobile platform which allows you to trade stocks directly, without bank interfering. Be a part of the new generation of investors.",
        picture: "../../static/images/projects/Mockup-05.jpg",
        url: "5.html"
      },
      {
        id: 5,
        title: "SOCIETY ICON",
        description:
          "We believe that you as a person will be at the center of marketing in the future. The power of a person's social media has never been as high as it is today.",
        picture: "../../static/images/projects/Mockup-06.jpg",
        url: "6.html"
      },
      {
        id: 6,
        title: "GIFTLET",
        description: "GIFTLET is an E-gifting Service for Top retailers and brands that enables their users to buy gifts for others without requiring their size or color.",
        picture: "../../static/images/projects/Mockup-07.jpg",
        url: "7.html"
      },
      {
        id: 7,
        title: "Toolgram",
        description: "A powerful tool to manage and have revenue from all your telegram channels in one place.",
        picture: "../../static/images/projects/Mockup-09.jpg",
        url: "9.html"
      }
    ],
    numbers: []
  };

  componentDidMount() {
    this.randomItem();
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
    const { router } = this.props;
    const { numbers, projects } = this.state;
    return (
      <div className="inner-portfolio-page">
        <Head title={"Techravity - TOOLGRAM"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="project-bg" style={{ backgroundColor: "#0091D6" }} />
          <div className="container">
            <div className="column">
              <img className="wow fadeIn logo" src="../../static/images/projects/logo/9.png" alt="TOOLGRAM" />
              <h1>TOOLGRAM</h1>
              <p>A powerful tool to manage and have revenue from all your telegram channels in one place.</p>
              <a href="http://toolgram.app/" target="_blank">
                website
              </a>
            </div>
            <div className="column">
              <img className="wow fadeIn mockup" src="../../static/images/projects/9.png" alt="TOOLGRAM" />
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
              <img src="../../static/images/technology/mysql.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/react.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/css3.svg" />
            </div>
          </div>
        </div>
        <div className="porject-overview-container">
          <div className="container">
            <h2>Overview</h2>
            <p>
              A powerful tool to manage and have revenue from all your telegram channels in one place. With Toolgram you can create a variety of posts and make an automated
              schedule for uploading them anytime you want. It's also can be used as a great click-base Adv.
            </p>
            <div className="overview-tabs">
              <div className="row">
                <div className="tabs">
                  <span className="header">Project name:</span>
                  <span className="content">Toolgram</span>
                </div>
                <div className="tabs">
                  <span className="header">Services:</span>
                  <span className="content">Web Application development, Mobile application development, UI/US Design, DevOps</span>
                </div>
                <div className="tabs">
                  <span className="header">Industry:</span>
                  <span className="content">CMS</span>
                </div>
              </div>
              <div className="row">
                <div className="tabs">
                  <span className="header">Website:</span>
                  <span className="content">http://toolgram.app</span>
                </div>
                <div className="tabs">
                  <span className="header">Technologies:</span>
                  <span className="content">ASP.NET core, React native, HTML, CSS, React</span>
                </div>
                <div className="tabs">
                  <span className="header">Region:</span>
                  <span className="content">Middle East</span>
                </div>
              </div>
            </div>
            <div className="space" />
            <h2>Problem</h2>
            <p>
              The biggest struggle for every social media manager is how to keep their social media content update as they post it or how to post it simultaneously and get right
              feedback as they see every single detail about their posts and schedule it for whole another week if they go for a vacation
            </p>
            <div className="space" />
            <h2>Solution</h2>
            <p>
              Our powerful social media management solution makes it easy for SMEs, corporate marketing teams? and digital agencies to promote, analyze and track their brands
              across all social media platforms. We provide a one-stop shop for your social media marketing needs, helping you build brand awareness by integrating social media
              platforms including Twitter, Facebook, LinkedIn, Instagram and Pinterest into a single dashboard.
            </p>
          </div>
        </div>
        <div className="project-thumbnails">
          <div className="container">
            <div className="column">
              <h2>integrated design</h2>
              <p>
                We at graphic design as communication, meaning that the work has to have a vibe to connect to the viewer or perceiver. We make a black and white drawing and then
                add color digitally, bringing in a contemporary pattern to the composition to create a vibrance.
              </p>
            </div>
          </div>
          <div className="gallery-container">
            <OwlCarousel className="items-container owl-carousel" events={events} options={options}>
              <div className="item">
                <img src="../../static/images/projects/sliders/9/1.png" alt="1" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/9/2.png" alt="2" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/9/3.png" alt="3" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/9/4.png" alt="4" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/9/5.png" alt="4" />
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
        </div>
        <Footer router={router} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(InnerProject);
