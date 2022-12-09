import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {GiPineTree} from 'react-icons/gi'
const Services = () => {
  return (
    <section id='services'>
     <h5>The Future</h5>
     <h2>Waldo's Legacy</h2>

<div className="container services_container">
<article className="service">
    <div className="service_head">
      <h3>
        Writers inspired by Emerson
      </h3>
    </div>
  
  <ul className="service_list">
    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Henry David Thoreau</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Thomas Carlyle</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Friedrich Nietzsche</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Ellen Louisa Tucker</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Amos Bronson Alcott</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Stanley Cavell</p>
    </li>

    <li>
      <GiPineTree className='service_list-icon'/>
      <p>Margaret Fuller</p>
    </li>

 </ul>
  </article>
</div>
</section>
  )
}

export default Services