import React, { Component } from "react";
import { withRouter } from "next/router";

import Head from "../../components/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScriptLoader from "../../components/scripts";

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
        <Head title={"Techravity - AMERTA"} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="project-bg" style={{ backgroundColor: "#e20a1a" }} />
          <div className="container">
            <div className="column">
              <img style={{ width: "200px" }} className="wow fadeIn logo" src="../../static/images/projects/logo/8.png" alt="AMERTA" />
              <h1>AMERTA</h1>
              <p>Amerta is a mobile app that allows users to compete against friends and people around the world.</p>
              <a href="https://www.giftlet.co/" target="_blank">
                website
              </a>
            </div>
            <div className="column">
              <img style={{ width: "80%" }} className="wow fadeIn mockup" src="../../static/images/projects/8.png" alt="AMERTA" />
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
          </div>
        </div>
        <div className="porject-overview-container">
          <div className="container">
            <h2>Overview</h2>
            <p>
              Amerta is the ultimate trivia quiz because it contains more than 4.000 questions that are developed by our team of educators. There are questions about Geography,
              Sports, mythology, celebrities and so on. There are questions for everyone!
            </p>
            <div className="overview-tabs">
              <div className="row">
                <div className="tabs">
                  <span className="header">Project name:</span>
                  <span className="content">Amerta</span>
                </div>
                <div className="tabs">
                  <span className="header">Services:</span>
                  <span className="content">Website design and programming, DevOps, UI/UX Design</span>
                </div>
                <div className="tabs">
                  <span className="header">Industry:</span>
                  <span className="content">Gaming</span>
                </div>
              </div>
              <div className="row">
                <div className="tabs">
                  <span className="header">Website:</span>
                  <span className="content">------------</span>
                </div>
                <div className="tabs">
                  <span className="header">Technologies:</span>
                  <span className="content">ASP.NET core, React native</span>
                </div>
                <div className="tabs">
                  <span className="header">Region:</span>
                  <span className="content">Turkey</span>
                </div>
              </div>
            </div>
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
