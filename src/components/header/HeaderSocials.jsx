import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
const  HeaderSocials= () => {
  return (
    <div className='header_socials'>
        <a href="https://www.britannica.com/biography/Ralph-Waldo-Emerson" target= "_blank"><CgProfile/></a>
        <a href="https://www.biblio.com/ralph-waldo-emerson/author/2379" target= "_blank"><HiOutlineBookOpen/></a>
        <a href="https://www.instagram.com/giftsofemerson/?hl=en" target= "_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials