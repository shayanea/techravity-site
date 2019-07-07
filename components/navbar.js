import React, { Component } from "react";
import Link from "next/link";

import Logo from "../components/navbar/logo";
import Form from "../components/navbar/form";

class Navbar extends Component {
  state = {
    formStatus: false,
    menuStatus: false
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
    const { formStatus, menuStatus } = this.state;
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
            <li className={router.pathname === "/services" ? "active" : ""}>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className={router.pathname === "/portfolio" ? "active" : ""}>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
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
