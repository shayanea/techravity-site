import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel2";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

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
  constructor(props) {
    super();
    this.state = {
      numbers: []
    };
  }

  componentDidMount() {
    this.randomItem();
  }

  static async getInitialProps({ query }) {
    const res1 = await fetch(`http://192.168.1.76:8080/api/setting`);
    const setting = await res1.json();
    const res2 = await fetch(`http://192.168.1.76:8080/api/project/${query.id}`);
    const project = await res2.json();
    const res3 = await fetch(`http://192.168.1.76:8080/api/project`);
    const items = await res3.json();
    return { setting, project, items };
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
    const { router, setting, project, items } = this.props;
    const { numbers } = this.state;
    const slideShow = JSON.parse(project.slideShow);
    const cover = slideShow.filter(item => item.type === 1);
    const gallery = slideShow.filter(item => item.type === 2);
    return (
      <div className="inner-portfolio-page">
        <Head title={`Techravity - ${project.title}`} setting={setting} />
        <Navbar router={router} />
        <div className="banner-container">
          <div className="project-bg" style={{ backgroundColor: project.color ? project.color : "#000" }} />
          <div className="container">
            <div className="column">
              {project.logo && <img className="wow fadeIn logo" src={`http://192.168.1.76:8080${project.logo}`} alt={`${project.title}`} />}
              <h1>{project.title}</h1>
              <p>{project.slug}</p>
              {project.url && (
                <a href={project.url} target="_blank">
                  website
                </a>
              )}
            </div>
            <div className="column">{cover && <img className="wow fadeIn mockup" src={`http://192.168.1.76:8080${cover[0].file}`} alt={`${project.title}`} />}</div>
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
            <p>{project.content}</p>
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
          </div>
        </div>
        {gallery.length && (
          <div className="project-thumbnails">
            <div className="container">
              <div className="column">
                <h2>integrated design</h2>
                <p>You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
              </div>
            </div>
            <div className="gallery-container">
              <OwlCarousel className="items-container owl-carousel" events={events} options={options}>
                {gallery.map(item => {
                  return (
                    <div key={item.id} className="item">
                      <img src={`http://192.168.1.76:8080${item.file}`} alt={`${project.title}`} />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        )}
        <div className="more-projects container">
          <h2>more case studies</h2>
          <div className="row">
            {numbers.map(item => {
              let slide = JSON.parse(items[item].slideShow),
                mock = slide.filter(item => item.type === 4),
                cover = slide.filter(item => item.type === 1),
                file = mock.length ? `http://192.168.1.76:8080${mock[0].file}` : `http://192.168.1.76:8080${cover[0].file}`;
              return (
                <a key={item} href={items[item].url} className="items">
                  <img src={file} alt={items[item].title} />
                  <div className="content">
                    <h2>{items[item].title}</h2>
                    <p>{items[item].slug}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <Footer router={router} setting={setting} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(InnerProject);
