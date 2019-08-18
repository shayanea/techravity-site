import React, { Component } from "react";
import { withRouter } from "next/router";
import ReactMapGL, { Marker } from "react-map-gl";
import fetch from "isomorphic-unfetch";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScriptLoader from "../components/scripts";

const MarkerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 438.536 438.536" style={{ enableBackground: "new 0 0 438.536 438.536" }}>
    <g>
      <g>
        <path
          d="M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825   c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428   c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106   C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411   s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675   c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675   C292.355,166.352,285.217,183.575,270.942,197.855z"
          fill="#FD6A02"
        />
      </g>
    </g>
  </svg>
);

class Contact extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 0,
      longitude: 0,
      zoom: 15
    }
  };

  static async getInitialProps() {
    const res1 = await fetch(`http://185.179.169.129:8081/api/menu?menuType=${7}`);
    const page = await res1.json();
    const res2 = await fetch(`http://185.179.169.129:8081/api/setting`);
    const setting = await res2.json();
    return { setting, page: page[0] };
  }

  render() {
    const { router, page, setting } = this.props;
    const mapSetting = { ...this.state.viewport, latitude: Number(setting.latitude), longitude: Number(setting.longitude) };
    return (
      <div className="contact-page">
        <Head title={`Techravity - ${page.title}`} setting={setting} />
        <Navbar router={router} />
        <div className="banner-container" style={{ backgroundImage: `url(	http://185.179.169.129:8081${page.coverImage})` }} />
        <div className="introduction-1 container">
          <div dangerouslySetInnerHTML={{ __html: `${page.body}` }} />
          <div className="row">
            <div className="content">
              <ReactMapGL
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxApiAccessToken="pk.eyJ1Ijoic2hheWFuZWEiLCJhIjoiY2p1dGUwZ2EyMDZpZjN5cmtkYW83OGlxOCJ9.eklm9eRxfDt-StKFeApsZg"
                onViewportChange={viewport => this.setState({ viewport })}
                {...mapSetting}
              >
                <Marker latitude={59.3371188} longitude={18.0687087}>
                  <MarkerIcon />
                </Marker>
              </ReactMapGL>
            </div>
            <div className="content">
              <p>{setting.description}</p>
              <p>
                <span>Tel:</span>
                <a href="tel:+46735859836">+46 735 859 836</a>
              </p>
              <p>
                <span>Email:</span>
                <a href="mailto:Info@techravity.com">Info@techravity.com</a>
              </p>
              <p>
                <span>Address 1: </span>Stureplan 15, 111 45 Stockholm, Sweden
              </p>
              <p>
                <span>Address 2: </span>Bilkent Cyberpark, Cyberplaza A Blok, No: 706, 06800, &Ccedil;ankaya/Ankara, TURKEY
              </p>
              <div className="items">
                <ul className="socials">
                  <li>
                    <a href="https://twitter.com/techravity" target="_blank" />
                  </li>
                  <li>
                    <a href="https://www.facebook.com/techravity" target="_blank" />
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/techravity" target="_blank" />
                  </li>
                  <li>
                    <a href="https://www.instagram.com/techravity/" target="_blank" />
                  </li>
                  <li>
                    <a href="https://www.behance.net/techravity/" target="_blank" />
                  </li>
                  <li>
                    <a href="https://dribbble.com/Techravity" target="_blank" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer router={router} setting={setting} />
        <ScriptLoader />
      </div>
    );
  }
}

export default withRouter(Contact);
