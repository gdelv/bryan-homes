import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Youtube from './images/youtube.png'
import SideDrawer from './screens/SideDrawer/SideDrawer'
import Backdrop from './screens/SideDrawer/Backdrop'


class Navbar extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      open: false
    }
  }


  renderBackdrop = () => {
    if (this.state.open) {
      return (
        <>
          <Backdrop onClick={this.toggleHambuger}/>
        </>
      )
    }
  }

  renderSideDrawer = () => {
    return (
      <>
        <SideDrawer show={this.state.open} />
        {this.renderBackdrop()}
      </>
    )
  }


  toggleHambuger = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          {/* Insert phoneFixIt logo here */}
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            onClick={this.toggleHambuger}
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarNavigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarNavigation" class="navbar-menu">
          <div class="navbar-start">
            {/* <a class="navbar-item">Home</a> */}
            <Link to="/" class="navbar-item">
              Home
          </Link>
            <Link to="/services" class="navbar-item">
              <div class="navbar-item has-dropdown is-hoverable">
                {/* <a class="navbar-link">Services</a> */}
                Services
              <div class="navbar-dropdown">
                  <Link to="/services/phonerepair" class="navbar-item">
                    Phone Repair
                </Link>
                  <Link to="/services/tabletrepair" class="navbar-item">
                    Tablet Repair
                </Link>
                  <Link to="/services/computerrepair" class="navbar-item">
                    Computer & Laptop Repair
                </Link>
                  <Link to="/services/iphonerepair" class="navbar-item">
                    Apple iPhone Repair
                </Link>
                  <Link to="/services/samsungrepair" class="navbar-item">
                    Samsung Repair
                </Link>
                  <Link to="/services/ipadrepair" class="navbar-item">
                    Apple iPad Repair
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/mail-in-repair" class="navbar-item">
              Mail-in Repair
          </Link>
          <Link to="/FAQ" className="navbar-item">
            FAQ
          </Link>
          <Link to='/book-online' className='navbar-item'>
            Book Online
          </Link>
          <Link to="/about" className="navbar-item">
            About Us
          </Link>
          <Link to="/store" className="navbar-item">
            Store
          </Link>
          <Link to="/cart" className="navbar-item">
            My Cart
          </Link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Social</a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="https://www.facebook.com/phonefixitNY" target="_blank" rel="noopener noreferrer">
                  <img class="socialMedia" src={Facebook} />
                  <p>Facebook</p>
                </a>
                <a class="navbar-item" href="https://www.instagram.com/phonefixit/" target="_blank" rel="noopener noreferrer" >
                  <img class="socialMedia" src={Instagram} />
                  <p>Instagram</p>

                </a>
                <a class="navbar-item" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img class="socialMedia" src={Youtube} />
                  <p>Youtube</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.renderSideDrawer()}
      </nav>
    );
  }
}


export default Navbar
