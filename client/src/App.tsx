import React from 'react';
import 'style/App.css';
import 'style/main.css';

function App() {
  return (
    <div className="App is-preload">
      <div id="wrapper">
        <header id="header" className="alt">
          <span className="logo"><img src="logo.svg" alt="" width="128px" height="128px" /></span>
          <h1>CentraHex LLC</h1>
          <p>Data Done Right</p>
        </header>
        <nav id="nav">
          <ul>
            <li><a href="#intro" className="active">Introduction</a></li>
            <li><a href="#first">First Section</a></li>
            <li><a href="#second">Second Section</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </nav>
        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Us</h2>
                </header>
                <p>We are a small development team based on Florida. We create data processing and visualization tools tailored to your companies needs. </p>
                <ul className="actions">
                  <li><a href="generic.html" className="button">Learn More</a></li>
                </ul>
              </div>
              <span className="image"><img src="pic01.jpg" alt="" /></span>
            </div>
          </section>
          <section id="first" className="main special">
            <header className="major">
              <h2>Why choose us?</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon solid major style1 fa-code"></span>
                <h3>Solid Codebase</h3>
                <p>Each of our solutions is thoroughly tested before being sent to you.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Easy to Work With</h3>
                <p>We can take non technical instructions and return a fully functional solution that takes minimal training to use.</p>
              </li>
              <li>
                <span className="icon major style5 fa-gem"></span>
                <h3>Value</h3>
                <p>Our solutions valuable efficiency to your workflows without having to hire in house developers.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions special">
                <li><a href="generic.html" className="button">See our Portfolio</a></li>
              </ul>
            </footer>
          </section>
          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
					posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon solid fa-code-branch"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon solid fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon solid fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-gem"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions special">
                <li><a href="generic.html" className="button">Learn More</a></li>
              </ul>
            </footer>
          </section>
          <section id="cta" className="main special">
            <header className="major">
              <h2>Submit a Work Request</h2>
              <p>
							Interested in working with us?<br />
							Fill in a request form to get in touch
              </p>
            </header>
            <footer className="major">
              <ul className="actions special">
                <li><a href="generic.html" className="button primary">Work Request Form</a></li>
                <li><a href="generic.html" className="button">Learn More</a></li>
              </ul>
            </footer>
          </section>
          <footer id="footer">
            <section>
              <h2></h2>
              <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
              <ul className="actions">
                <li><a href="generic.html" className="button">Learn More</a></li>
              </ul>
            </section>
            <section>
              <h2>Contact Information</h2>
              <dl className="alt">
                <dt>Address</dt>
                <dd>4975 NW 5th Lane &bull; Boca Raton, FL 33431 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(561) 400-0449</dd>
                <dt>Email</dt>
                <dd><a href="#">information@centrahex.com</a></dd>
              </dl>
              <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon brands fa-dribbble alt"><span className="label">Dribbble</span></a></li>
              </ul>
              <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </section>
          </footer>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default App;
