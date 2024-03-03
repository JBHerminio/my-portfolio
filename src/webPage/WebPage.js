

import './WebPage.css';

import Footer from './footer/Footer';
import NavBar from './navBar/Navbar';
// import Home from './section/home/Home';
import Home from './section/home/Home';
import About from './section/about/About';
import Skills from './section/skills/Skills';
import Teams from './section/teams/Teams';
import Contact from './section/contact/Contact';


function WebPage() {
  return (
    <body>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Teams />
      <Contact />
      <Footer />
    </body>
  );
}

export default WebPage;
