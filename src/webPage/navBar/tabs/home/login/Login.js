import "./Login.css";

function Login() {
  return (
    <>
      <section class="Login" id="Login">
        <form action="/">
          <div class="wrapper">
            <section class="home" id="home">
              <div class="max-width">
                <div class="home-content">
                  <div class="text-1">Hello, my name is</div>
                  <div class="text-2">Jayson B. Herminio</div>
                  <div class="text-3">
                    And I'm a <span class="typing">{/* <Typewriter /> */}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>{" "}
        </form>
      </section>
    </>
  );
}

export default Login;
