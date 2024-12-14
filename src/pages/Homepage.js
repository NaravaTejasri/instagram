import React from "react";
import "../styles/Homepage.css";
import Sidenav from "../components/Sidenav";
import Timeline from "../pages/TimeLine";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
