import React, { useState } from "react";

import Home from "./tabs/home/Home";
import About from "./tabs/about/About";
import Skills from "./tabs/skills/Skills";
import Contact from "./tabs/contact/Contact";

import "./TabNavigation.css";
// import "../media/Media.css";
import "../Script";
import "./ComStyle.css";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <a href="/">
            <span>My</span> Port<span>folio</span>
          </a>
          <ul className="menu">
            <li><a href="#home"><button onClick={() => handleTabClick("Home")}>Home</button></a></li>
            <li><a href="#about"><button onClick={() => handleTabClick("About")}>About</button></a></li>
            <li><a href="#skills"><button onClick={() => handleTabClick("Skills")}>Skills</button></a></li>
            <li><a href="#contact"><button onClick={() => handleTabClick("Contact")}>Contact</button></a></li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div>
          {activeTab === "Home" && <Home />}
          {activeTab === "About" && <About />}
          {activeTab === "Skills" && <Skills />}
          {activeTab === "Contact" && <Contact />}
        </div>

      </nav>
    </>
  );
}

export default TabNavigation;
