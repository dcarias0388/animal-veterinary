import React from "react";

function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <link to="index.html">Pet clinic</link>
        </h1>
        <div className="fright">
          <div className="header-meta">
            <form action="#" id="search-form" method="post">
              <input
                type="text"
                onblur="if(this.value==''){this.value='search'}"
                onfocus="if(this.value=='search'){this.value=''}"
                defaultValue="search"
                name="search"
              />
              <a className="search-form-submit" />
            </form>
            <div className="col-elem">
              {" "}
              Have a problem with your pet?
              <br />
              Call us now: <span className="phone"> 1-800-123-1234 </span>{" "}
            </div>
          </div>
          <nav>
            <ul className="sf-menu">
              <li className="current">
                <a href="index.html">main</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                {" "}
                <a href="services.html">services</a>
                <ul>
                  <li>
                    <a href="#">Maecenas faucibus</a>
                  </li>
                  <li>
                    <a href="#">Fusce tincidunt</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">tempor eros</a>
                    <ul>
                      <li>
                        <a href="#">ut viverra</a>
                      </li>
                      <li>
                        <a href="#">hendrerit mauris</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">mauris ut du</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="links.html">links</a>
              </li>
              <li>
                <a href="contacts.html">contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="clear" />
      </div>
      <div className="slider-container">
        <div className="mp-slider">
          <ul className="items">
            <li>
              <img src="images/slide-1.jpg" alt="" />
            </li>
            <li>
              <img src="images/slide-2.jpg" alt="" />
            </li>
            <li>
              <img src="images/slide-3.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
