import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to="/">Pet clinic</Link>
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
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">nosotros</Link>
              </li>
              <li>
                {" "}
                <Link to="/services">servicios</Link>
                <ul>
                  <li>
                    <Link to="#">Maecenas faucibus</Link>
                  </li>
                  <li>
                    <Link to="#">Fusce tincidunt</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">tempor eros</Link>
                    <ul>
                      <li>
                        <Link to="#">ut viverra</Link>
                      </li>
                      <li>
                        <Link to="#">hendrerit mauris</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">mauris ut du</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="links.html">links</Link>
              </li>
              <li>
                <Link to="contacts.html">contacts</Link>
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
