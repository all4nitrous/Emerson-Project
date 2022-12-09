import React from 'react'
import './Experience.css'
import {GiPineTree} from 'react-icons/gi'
const Experience = () => {
  return (
    <section id="experience">
      <h5>Waldo's Writings</h5>
      <h2>Into the Wilderness</h2>
    
    <div className="container experience_container">
      <div className="experience_frontend">
          <h3>Nature</h3>
          <div className="experience_content">
            <article className='experience_details'>
              
              <div>
              <h4>Emerson could be classified by many as an intellectual. Despite Emerson's time in the church, Emerson sought to learn more about the world. The ultimate conclusion that Emerson came to was that rather than looking to god or directly to nature for the answers we seek, living life gives us the answers that we need. Emerson saw us humans as a key to the secrets between god and nature as we are their creations. In nature Emerson suggests a simbitoic relationship with nature in which rather than looking inwards for guidance we look to nature as a reflection of man. Emerson takes this even further stating that man deploys four components, commodity, beauty, language, and discipline of nature in order to achieve insight into the further universe.</h4>
              </div>
            </article>

        </div>
      </div>
      {/*END OF FRONTEND*/}
      <div className="experience_backend">
        <h3>The Parallels</h3>
      <div className="experience_content">
            <article className='experience_details'>
              
              <div>
              <h4>Node JS</h4>
              </div>
            </article>

        </div>
      </div>
    </div>
    
    </section>
  )
}

export default Experience