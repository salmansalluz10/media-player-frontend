import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='p-2'> 
  
      <div className='m-3'>  <div className='fs-5'>
      <FontAwesomeIcon icon={faVideo} className='me-2' />
      Media Player
      </div>
      
      <p className='media-font'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facilis maiores fugiat consectetur  enda suscipit culpa!</p> 
     </div>
      <div className='d-flex flex-column align-items-center justify-content-around'>
        <h5>Links</h5>
       <Link to={'/'}> <p>Landing Page</p></Link>
       <Link to={'/home'}> <p>Home</p></Link>
       <Link to={'/watchHistory'}> <p>Watch History</p></Link>
      </div>
      <div className='d-flex flex-column align-items-center justify-content-around'>
      <h5>Guides</h5>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className='contact-us-section'>
        <h5>Contact Us</h5>
        <div>
        <input type="text" className='p-2 rounded' placeholder='Email' />
        <button className='btn btn-warning'>Subscribe</button>
        </div>
        <div className='icon-section'>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </footer>
  )
}

export default Footer