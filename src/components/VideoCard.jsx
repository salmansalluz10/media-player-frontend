import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';

function VideoCard({ video, setDeleteVideoStatus, isCategoryView, isPresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    const time = new Date();
    let formatedDate = new Intl.DateTimeFormat("en-GB", { 
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', 
      minute: '2-digit', second: '2-digit' 
    }).format(time);

    const reqBody = {
      Caption: video?.caption,
      url: video?.embededLink,
      time: formatedDate
    };
    await addVideoHistoryApi(reqBody);
  };

  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id);
    if (result.status >= 200 && result.status < 300) {
      setDeleteVideoStatus(result.data);
    }
  };

  const videoDrag = (e, video) => {
    e.dataTransfer.setData("videoDetails", JSON.stringify(video));
  };

  return (
    <>
      <Card 
        onClick={handleShow} 
        className={isCategoryView ? 'category-video-card' : ''} 
        draggable 
        onDragStart={(e) => videoDrag(e, video)} 
        style={{ width: '90%', height: '90%' }}
      >
        { !isPresent && 
          <Card.Img variant="top" src={video?.imageUrl} />
          }
        <Card.Body>
          <div className='video-footer'>
            <Card.Title>{video?.caption}</Card.Title>
            { !isPresent && 
              <Button variant="primary" onClick={() => handleDelete(video?.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            }
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe 
            width="100%" 
            height="299" 
            src={`${video?.embededLink}?autoplay=1`} 
            title="Video Player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
