import "./Contact.css";

// import facebook from "../../image/icon/facebook-icon.svg";
// import linkedIn from "../../image/icon/linkedIn-icon.svg";
// import instagram from "../../image/icon/instagram-icon.svg";

function Contact() {
  return (
    <>
      {/* <!-- contact section start --> */}
      <section class="contact" id="contact">
        <div class="max-width">
          <h2 class="title">Contact me</h2>
          <div class="contact-content">
            <div class="column left">
              <div class="text">Get in Touch</div>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new project, create ideas or opportunity to be part
                of your vision.
              </p>
              <div class="icons">
                <div class="row">
                  <i class="fas fa-phone"></i>
                  <div class="info">
                    <div class="head">Contact</div>
                    <div class="sub-title">(+63)928 295 6621</div>
                  </div>
                </div>

                <div class="row">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="info">
                    <div class="head">Address</div>
                    <div class="sub-title">Mandaluyong City, Philippine</div>
                  </div>
                </div>

                <div class="row">
                  <i class="fas fa-envelope"></i>
                  <div class="info">
                    <div class="head">Email</div>
                    <div class="sub-title">jaysonberherminio@gmail.com</div>
                  </div>
                </div>

                {/* <!-- Social Media --> */}
                <div class="row">
                  <div class="icon">
                    <div class="space">
                      <a href="https://www.facebook.com/jayson.herminio/">
                        {/* <img src={facebook} alt="facebook"></img> */}
                      </a>

                      <a href="https://www.linkedin.com/in/jbherminio/">
                        {/* <img src={linkedIn} alt="linkedIn"></img> */}
                      </a>
                      <a href="https://www.instagram.com/nowyouseeme_25_/">
                        {/* <img src={instagram} alt="instagram"></img> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column right">
              <div class="text">Message me</div>
              <form action="/">
                <div class="fields">
                  <div class="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div class="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div class="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div class="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div class="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
