import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import Logo from "../components/navbar/logo";
import Form from "../components/navbar/form";

class Navbar extends Component {
  state = {
    formStatus: false,
    menuStatus: false,
    menu: [
      {
        id: 3,
        parentId: null,
        menuType: 5,
        uniqueName: "Service",
        creationDate: "2019-07-29T16:16:54.6388985",
        languageCode: "en-us",
        slogan: "DEVELOPMENT IS OUR OBSESSION",
        sortOrder: 1,
        title: "Services",
        description: "We create solutions that solve your business pain, respond market needs, \ntransform internal operations and follow the latest digital trends.",
        body: null,
        coverImage: "/Files/Image/ca87050e1bc046aaa63eb4cdd505ef27.png",
        url: "/services",
        isHidden: false,
        isVital: false,
        children: []
      },
      {
        id: 2,
        parentId: null,
        menuType: 2,
        uniqueName: "Project",
        creationDate: "2019-07-29T16:16:12.4225632",
        languageCode: "en-us",
        slogan: "SEE HOW WE HELPED OUR CLIENTS",
        sortOrder: 2,
        title: "Portfolio",
        description: "Here’s the real thing - view the projects we’ve released and see the results for yourself.",
        body: null,
        coverImage: "/Files/Image/425b2b7a32f540f3a71a39391e2d77bf.png",
        url: "/portfolio",
        isHidden: false,
        isVital: false,
        children: []
      },
      {
        id: 5,
        parentId: null,
        menuType: 6,
        uniqueName: "About",
        creationDate: "2019-07-30T11:53:53.6258323",
        languageCode: "en-us",
        slogan: "WELCOME TO TECHRAVITY",
        sortOrder: 3,
        title: "About",
        description: "Everything That Now Exists Was Once Imagined",
        body:
          "<h2>About Us</h2>\n            <h4>Complexity motivates us</h4>\n            <p>\n              We love to solve complex problems. Our clients never worry because of our careful engineering who turn your dreams on design and high functionality into digital\n              reality.\n            </p>",
        coverImage: "/Files/Image/dcd35d855b9048709c284d9f88a68f3c.png",
        url: "/about",
        isHidden: false,
        isVital: false,
        children: []
      },
      {
        id: 7,
        parentId: null,
        menuType: 7,
        uniqueName: "Contact",
        creationDate: "2019-08-01T11:47:17.9089095",
        languageCode: "en-us",
        slogan: "",
        sortOrder: 4,
        title: "Contact us",
        description: "We are ambitious about our clients. At Techravity we aim to provide excellent service at all our channels. Get in touch and we will get back to help you.",
        body:
          "<h2>contact us</h2>\n<h4>Talk to a Human</h4>\n      <p>\n        We are ambitious about our clients. At Techravity we aim to provide excellent service at all our channels. Get in touch and we will get back to help you.\n      </p>",
        coverImage: "/Files/Image/c6e1ae0f33ae404e81532c82d5110fc0.jpg",
        url: "/contactus",
        isHidden: false,
        isVital: false,
        children: []
      }
    ]
  };

  componentDidMount() {
    if ($(window).width() < 736) {
      $("header").addClass("sticky");
    } else {
      $(window).scroll(function(e) {
        if ($(this).scrollTop() > 550) {
          $("header").removeClass("fixed");
          $("header").addClass("sticky");
        } else {
          $("header").removeClass("sticky");
          $("header").addClass("fixed");
        }
      });
    }
  }

  render() {
    const { formStatus, menuStatus, menu } = this.state;
    const { router } = this.props;
    return (
      <header>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="menu-btn" onClick={() => this.setState({ menuStatus: true })} />
        <nav className={menuStatus ? `menu-container active` : "menu-container"}>
          <div className="close-menu-btn" onClick={() => this.setState({ menuStatus: false })} />
          <ul>
            {menu.map(item => {
              return (
                <li key={item.id} className={router.pathname === `/${item.title.toLowerCase()}` ? "active" : ""}>
                  <Link href={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
            <li className="btn" onClick={() => this.setState({ formStatus: !this.state.formStatus })}>
              <a>FREE QUOTE</a>
            </li>
          </ul>
        </nav>
        <Form status={formStatus} onHideForm={() => this.setState({ formStatus: false })} />
      </header>
    );
  }
}

export default Navbar;
