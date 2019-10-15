import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
          <div className="column is-12 social">
              <a title="facebook" href="https://www.facebook.com/HGIiGladsaxe/">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
                 Følg os på Facebook
              </a>
            </div>
            <div className="columns">
              <div className="column is-12">
                <section className="menu">
                  <ul className="menu-list has-text-centered" style={{marginLeft: "0"}}>
                    <li>
                      <Link to="/" className="navbar-item">
                        Forside
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/om">
                        Om os
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/hold">
                        Hold
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/nyheder">
                        Seneste nyheder
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
