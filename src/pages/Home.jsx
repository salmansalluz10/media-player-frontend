import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import AllVideos from '../components/AllVideos'
import Category from '../components/Category'

function Home() {
  const [addVideoStatus,setAddVideoStatus] = useState({})
  const [videoStatus,setVideoStatus] = useState({})

  return (
    <>
     <div className='home-part'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <Link to={'/watchHistory'} style={{textDecoration:'none'}}>
      <h5>Watch History <FontAwesomeIcon icon={faClockRotateLeft} /></h5>
      </Link>
     </div>

     <div className='home-video-category-part'>
        <div>
          <AllVideos addVideoStatus={addVideoStatus} setVideoStatus={setVideoStatus}/>
        </div>
        <div>
          <Category videoStatus={videoStatus}/>
        </div>
     </div>
    </>
  )
}

export default Home