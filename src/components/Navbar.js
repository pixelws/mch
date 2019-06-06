import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/Logo'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/">
                <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 40v-12h8v12h10v-16h6l-20-18-20 18h6v16z"/><path d="M0 0h48v48h-48z" fill="#4a4a4a"/></svg>
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/projects">
                Research
              </Link>
              <Link className="navbar-item" to="/education">
                Education
              </Link>
              <Link className="navbar-item" to="/volunteer">
                Volunteer
              </Link>
              <Link className="navbar-item" to="/contact/membership">
                Membership
              </Link>
              <Link className="navbar-item" to="/donate">
                <button className="button is-secondary is-outlined">Donate</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar