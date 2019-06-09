import React from 'react'
import { Link } from 'gatsby'

import Logo from '../components/Logo'

const Footer = class extends React.Component {
  render() {
    return (
      <div className="footer-wrap">
        <footer className="footer has-text-grey-dark">
          <div className="container">
            <div className="columns">
              <div className="column is-6 has-text-centered-mobile">
                <Logo format="mono" color="#363636" />
              </div>
              <div className="column is-6 has-text-centered-mobile has-text-right">
                <a href="https://mastcellhope.kindful.com/" target="_blank" rel="noopener noreferrer nofollow" className="button is-secondary is-outlined is-large">DONATE</a>
              </div>
            </div>

            <div className="columns">
              <div className="column is-4 has-text-centered-mobile">
                <span className="title is-size-5" style={{ borderBottom: '2px solid #871638', margin: '0.5rem 0.75rem', padding: '0.25rem 0', display: 'inline-block' }}>DISCOVER MCH</span>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/bylaws" className="navbar-item has-text-centered-mobile">
                      Bylaws
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/projects">
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/education">
                      Education
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column is-4 has-text-centered-mobile">
                <span className="title is-size-5" style={{ borderBottom: '2px solid #871638', margin: '0.5rem 0.75rem', padding: '0.25rem 0', display: 'inline-block' }}>GET INVOLVED</span>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/membership">
                      Become A Member
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/volunteer">
                      Become A Volunteer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <span className="title is-size-5" style={{ borderBottom: '2px solid #871638', margin: '0.5rem 0.75rem', padding: '0.25rem 0', display: 'inline-block' }}>STAY CONNECTED</span>
                <ul className="menu-list">
                  <li>
                    <a className="navbar-item has-text-centered-mobile" href="https://www.facebook.com/Mast-Cell-Hope-Inc-442028806534119" target="_blank" rel="noopener noreferrer nofollow">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-centered-mobile" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="has-background-grey-darker has-text-grey-lighter has-text-centered" style={{ padding: '0.75rem' }}>
          <div className="container">
            <p className="is-size-7">Copyright &copy; 2019 Mast Cell Hope, Inc. | All rights reserved</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
