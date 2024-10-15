import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AddVideoApi} from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}){
  const [videoDetails,setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    embededLink:""
  })

  /* 
  https://www.youtube.com/embed/e1BHIY9p2WU?si=JMwRHz13xepH9dgq */
  /* https://youtu.be/e1BHIY9p2WU?si=7fWKVwrCc8GrAG3K */
  
  const [show, setShow] = useState(false);

  console.log(videoDetails);

  const handleClose = () => {
    setShow(false)
    handleCancel()
  }
  const handleShow = () => setShow(true);
  
   const getEmbedLink = (e) =>{
    const link = e.target.value

    if(link.startsWith('https://youtu.be/')){
      const embedL = `https://www.youtube.com/embed/${link.slice(17,28)}`
      setVideoDetails({...videoDetails,embededLink:embedL})
    }else{
      const embedL = `https://www.youtube.com/embed/${link.slice(-11)}`
      setVideoDetails({...videoDetails,embededLink:embedL})
    }
  } 

    const handleCancel = ()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        embededLink:""
      })
    }
  
    const handleAdd = async()=>{
      const {caption,imageUrl,embededLink} = videoDetails

      if(!caption || !imageUrl || !embededLink){
        toast.info('Please fill all the form')
      }
      else{
        if(videoDetails.embededLink.startsWith('https://youtu.be/')){
          const embedL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(17,28)}`
         /*  setVideoDetails({...videoDetails,embededLink:embedL}) */
          const result = await AddVideoApi({...videoDetails,embededLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('Video uploaded successfully')
            handleClose()
            setAddVideoStatus(result.data)
          }else{
            toast.error('Something went wrong')
            handleClose()
          }
        }
        else{
          const embedL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(-11)}`
          /* setVideoDetails({...videoDetails,embededLink:embedL}) */
          const result = await AddVideoApi ({...videoDetails,embededLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('Video uploaded successfully')
            handleClose()
            setAddVideoStatus(result.data)
          }else{
            toast.error('Something went wrong')
            handleClose()
          }
        }
      } 
    }

  return (
    <> 
      <div className='upload-new-video'>
        <h5>Upload New Vidoe</h5>
        <button onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} /></button>
      </div>

    {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} /> Upload Videos </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <p>Please fill the following details</p>
          <div className='input-section'>
            <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='input-box' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
            <input type="text" value={videoDetails.imageUrl} placeholder='Video Image' className='input-box' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
            <input type="text" value={videoDetails.embededLink} placeholder='Video Url' className='input-box' onChange={(e)=>setVideoDetails({...videoDetails,embededLink:e.target.value})}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
             Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored"/>
    </>
  )
}

export default Add