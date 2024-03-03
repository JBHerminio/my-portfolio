
import './Home.css';
import Typewriter from '../Typewriter';

function Home() {
  return (
    <>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Jayson B. Herminio</div>
            <div class="text-3">And I'm a <span class="typing">
              <Typewriter />
            </span>
            </div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              Hire
              me</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
