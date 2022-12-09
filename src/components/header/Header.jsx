import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/ralphy.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Writer and Poet</h5>
        <h1>Ralph Waldo Emerson</h1>
        <h5 className="text-light">Transcendentalist</h5>
        <CTA />
        <HeaderSocials />
      <div className="me">
        <img src={ME} alt="picture of Ralph" />
      </div>

      <a href="#contact" class='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header