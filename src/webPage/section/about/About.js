import './About.css';
import Image from '../../image/matt2.png';

function About() {
  return (
    <>
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column left">
              <img src={Image} alt="" />
            </div>
            <div class="column right">
              <div class="text">I'm Jayson Berdin Herminio</div>
              <p>I am seeking an opportunity as a Computer Engineer graduate where I can use my academic knowledge.
                And I wish to work hard for organization goals through my technical skills,
                hard work and creativity.</p>
              <a href="/">Download CV</a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
