import './Skills.css';

function Skills() {
  return (
    <>
      {/* <!-- skills section start --> */}
      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p>
                <span>As</span> a solutions developer with experience in JavaScript, React.js, React.ts(TypeScript) and
                other
                Technologies that I use.
              </p>
              <p>
                <span>I</span> have a proven track record of delivering high-quality software solutions that meet the
                needs of clients.
              </p>
              <p>
                <span>I</span> have expertise in developing and maintaining application programs, preparing test plans,
                performing
                testing and API integration in my past role.
              </p>
              <p>
                <span>Additionally,</span> I am excited to explore opportunities that allow me to continue my front-end
                technologies,
                while also expanding my knowledge in back-end technologies.
              </p>
              <a href="/">Read more</a>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>PHP</span>
                  <span>50%</span>
                </div>
                <div class="line php"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>MySQL</span>
                  <span>70%</span>
                </div>
                <div class="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Skills;
