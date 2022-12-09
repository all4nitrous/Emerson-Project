import React from 'react'
import './About.css'
import ME from '../../assests/Walden pond.jpg'
import {FaBirthdayCake} from 'react-icons/fa'
import {GiDiploma} from 'react-icons/gi'
import {GiLifeBar} from 'react-icons/gi'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>The Writer</h2>
    
     <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="wedding day" />
          </div>
        </div>
     
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaBirthdayCake className='about_icon'/>
            <h5>Birth Place</h5>
            <small>Boston, MA</small>
          </article>
         
          <article className='about_card'>
            <GiDiploma className='about_icon'/>
            <h5>Education</h5>
            <small>Harvard Graduate</small>
          </article>
         
          <article className='about_card'>
            <GiLifeBar className='about_icon'/>
            <h5>Life</h5>
            <small>05/25/1803 - 05/27/1882</small>
          </article>
        </div>
        <p>
        Ralph Waldo Emerson was born to a Puritan family. He was recognized as talanted from a young age and accepted into Harvard College. Whilst ordained as a Unitarian minister he was quite famous amongst his church through his eccentric preachings. Emerson however would leave the church in a search for life's answers leading him to live a life out in nature coining a naturistic writing style that would inspire writers for centuries to come.
        </p>

        <a href="#experience" className='btn btn-primary'>Get to know more!</a>
      </div>
     </div>
     </section>
  )
}

export default About