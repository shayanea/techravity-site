import React, { Component } from "react";
import { withRouter } from "next/router";
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

const technologies = [
  { value: 0, text: "ASP.NET core", icon: "../static/images/technology/microsoft.svg" },
  { value: 1, text: "HTML5", icon: "../static/images/technology/html-5.svg" },
  { value: 2, text: "CSS3", icon: "../static/images/technology/css3.svg" },
  { value: 3, text: "Javascript", icon: "../static/images/technology/javascript.svg" },
  { value: 4, text: "Java", icon: "../static/images/technology/java.svg" },
  { value: 5, text: "Swift", icon: "../static/images/technology/swift.svg" },
  { value: 6, text: "MySql", icon: "../static/images/technology/mysql.svg" },
  { value: 7, text: "Python", icon: "../static/images/technology/python.svg" },
  { value: 8, text: "Bootstrap", icon: "../static/images/technology/bootstrap.svg" },
  { value: 9, text: "Angularjs", icon: "../static/images/technology/angular.svg" },
  { value: 10, text: "JQuery", icon: "../static/images/technology/jquery.svg" },
  { value: 11, text: "React", icon: "../static/images/technology/react.svg" },
  { value: 12, text: "Nodejs", icon: "../static/images/technology/nodejs.svg" },
  { value: 13, text: "MongoDB", icon: "../static/images/technology/mongodb.svg" }
];

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
      numbers: [],
      technologies: []
    };
  }

  componentDidMount() {
    this.randomItem();
    this.getTechnologiesIcon();
  }

  static async getInitialProps({ query }) {
    const res1 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res1.json();
    const res2 = await fetch(`http://185.179.169.129:8081/api/project/${query.id}`);
    const project = await res2.json();
    const res3 = await fetch(`http://185.179.169.129:8081/api/project`);
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

  getBaseDataValue = type => {
    let result = this.props.project.projectBaseData.find(item => item.baseDataType === type);
    return result ? result.name : "";
  };

  getTechnologiesName = () => {
    let result = this.props.project.projectBaseData.find(item => item.baseDataType === 2),
      array = [];
    result = JSON.parse(result.name);
    result.forEach(item => {
      let techName = technologies.find(el => el.value === item);
      if (techName) array.push(techName.text);
    });
    return array.join();
  };

  getTechnologiesIcon = () => {
    let result = this.props.project.projectBaseData.find(item => item.baseDataType === 2),
      array = [];
    result = JSON.parse(result.name);
    result.forEach(item => {
      let techName = technologies.find(el => el.value === item);
      if (techName) array.push(techName.icon);
    });
    return this.setState({ technologies: array });
  };

  render() {
    const { router, setting, project, items } = this.props;
    const { numbers, technologies } = this.state;
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
              {project.logo && <img className="wow fadeIn logo" src={`http://185.179.169.129:8081${project.logo}`} alt={`${project.title}`} />}
              <h1>{project.title}</h1>
              <p>{project.slug}</p>
              {project.url && (
                <a href={project.url} target="_blank">
                  website
                </a>
              )}
            </div>
            <div className="column">{cover && <img className="wow fadeIn mockup" src={`http://185.179.169.129:8081${cover[0].file}`} alt={`${project.title}`} />}</div>
          </div>
        </div>
        <div className="technology-container">
          <div className="column" />
          <div className="column">
            {technologies.map((value, index) => {
              return (
                <div key={index} className="items">
                  <img src={value} />
                </div>
              );
            })}
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
                  <span className="content">{project.title}</span>
                </div>
                <div className="tabs">
                  <span className="header">Services:</span>
                  <span className="content">{this.getBaseDataValue(3)}</span>
                </div>
                <div className="tabs">
                  <span className="header">Industry:</span>
                  <span className="content">{this.getBaseDataValue(1)}</span>
                </div>
              </div>
              <div className="row">
                <div className="tabs">
                  <span className="header">Website:</span>
                  <span className="content">{project.url}</span>
                </div>
                <div className="tabs">
                  <span className="header">Technologies:</span>
                  <span className="content">{this.getTechnologiesName()}</span>
                </div>
                <div className="tabs">
                  <span className="header">Region:</span>
                  <span className="content">{this.getBaseDataValue(4)}</span>
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
                      <img src={`http://185.179.169.129:8081${item.file}`} alt={`${project.title}`} />
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
                file = mock.length ? `http://185.179.169.129:8081${mock[0].file}` : `http://185.179.169.129:8081${cover[0].file}`;
              return (
                <a key={item} href={`project?id=${items[item].id}`} className="items">
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
