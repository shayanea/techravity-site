import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import Logo from "../components/navbar/logo";
import Form from "../components/navbar/form";

class Navbar extends Component {
  state = {
    formStatus: false,
    menuStatus: false,
    menu: []
  };

  async componentDidMount() {
    const res1 = await fetch(`http://192.168.1.76:8080/api/menu`);
    const menu = await res1.json();
    this.setState({ menu: menu.filter(item => item.menuType !== 1 && item.menuType !== 0) });
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
