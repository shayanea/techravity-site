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
        <Head title={"Techravity - FIND A PLAYER"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="project-bg" style={{ backgroundColor: "#0091D6" }} />
          <div className="container">
            <div className="column">
              <img style={{ width: "200px" }} className="wow fadeIn logo" src="../../static/images/projects/logo/4.png" alt="FIND A PLAYER" />
              <h1>FIND A PLAYER</h1>
              <p>Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.</p>
              <a href="https://www.findaplayer.com" target="_blank">
                website
              </a>
            </div>
            <div className="column">
              <img className="wow fadeIn mockup" src="../../static/images/projects/4.png" alt="FIND A PLAYER" />
            </div>
          </div>
        </div>
        <div className="technology-container">
          <div className="column" />
          <div className="column">
            <div className="items">
              <img src="../../static/images/technology/java.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/swift.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/mysql.svg" />
            </div>
            <div className="items">
              <img src="../../static/images/technology/microsoft.svg" />
            </div>
          </div>
        </div>
        <div className="porject-overview-container">
          <div className="container">
            <h2>Overview</h2>
            <p>Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.</p>
            <div className="overview-tabs">
              <div className="row">
                <div className="tabs">
                  <span className="header">Project name:</span>
                  <span className="content">Find a player</span>
                </div>
                <div className="tabs">
                  <span className="header">Services:</span>
                  <span className="content">website design and programming, DevOps, Graphic Design</span>
                </div>
                <div className="tabs">
                  <span className="header">Industry:</span>
                  <span className="content">FinTech</span>
                </div>
              </div>
              <div className="row">
                <div className="tabs">
                  <span className="header">Website:</span>
                  <span className="content">https://findaplayer.com/</span>
                </div>
                <div className="tabs">
                  <span className="header">Technologies:</span>
                  <span className="content">IOS & Android App Development, UI/UX Design, DevOPs</span>
                </div>
                <div className="tabs">
                  <span className="header">Region:</span>
                  <span className="content">Scotland</span>
                </div>
              </div>
            </div>
            <div className="space" />
            <h2>Problem</h2>
            <p>
              To lead a healthy life, two things you should definitely do are engage in regular exercise and hang out with friends. The best idea is to combine both things and work
              out with your buddies to have fun, get motivated and fast-track your goals. Some people exercise alone to stay focused, but for others, having an exercise partner
              boosts their motivation and overall performance. A sense of healthy competition can prevail between you and your workout partner, which will keep your fitness level
              high.
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
              <p>
                There's design, and there's art. Good design is total harmony. There's no better designer than nature - if you look at a branch or a leaf, it's perfect. It's all
                function. Art is different. It's about emotion. It's about suffering and beauty - but mostly suffering!
              </p>
            </div>
          </div>
          <div className="gallery-container">
            <OwlCarousel className="items-container owl-carousel" events={events} options={options}>
              <div className="item">
                <img src="../../static/images/projects/sliders/4/1.jpg" alt="1" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/4/2.jpg" alt="2" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/4/3.jpg" alt="3" />
              </div>
              <div className="item">
                <img src="../../static/images/projects/sliders/4/4.jpg" alt="4" />
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
