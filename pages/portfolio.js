import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import ReactWOW from "react-wow";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

class Portfolio extends Component {
  static async getInitialProps() {
    const res1 = await fetch(`http://185.179.169.129:8081/api/menu?menuType=${2}`);
    const page = await res1.json();
    const res2 = await fetch(`http://185.179.169.129:8081/api/project`);
    const projects = await res2.json();
    const res3 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res3.json();
    return { page: page[0], projects, setting };
  }

  render() {
    const { router, page, projects, setting } = this.props;
    console.log(projects);
    return (
      <div className="portfolio-page">
        <Head title={`Techravity - ${page.title}`} setting={setting} />
        <Navbar router={router} />
        <div className="banner-container" style={{ backgroundImage: `url(	http://185.179.169.129:8081${page.coverImage})` }}>
          <div className="content container">
            <h1>{page.slogan}</h1>
            <p>{page.description}</p>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="container">
            {projects.map(item => {
              // let icon = JSON.parse(item.icon);
              console.log(item.icon);
              return (
                <div key={item.id} className="items">
                  <ReactWOW animation="fadeInUp" duration=".3s">
                    <div className="content">
                      <h2>{item.title}</h2>
                      <p>{item.slug}</p>
                      <a href={`project?id=${item.id}`}>See more</a>
                    </div>
                    {/* <div className="img-holder">
                      {icon.map((el, index) => {
                        return (
                          <ReactWOW key={index} animation="fadeIn" duration="0.5s" delay={index === 0 ? "0" : "0.4s"}>
                            <img className={icon.length === 2 ? "multiple" : null} src={`http://185.179.169.129:8081${el.file}`} alt={item.title} />
                          </ReactWOW>
                        );
                      })}
                    </div> */}
                  </ReactWOW>
                </div>
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

export default withRouter(Portfolio);
