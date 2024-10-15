import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({videoStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  const [addCategoryStatus, setAddCategoryStatus] = useState({});
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState({});

  const handleCancel = () => setCategoryName('');
  const handleClose = () => {
    setShow(false);
    handleCancel();
  };
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const reqBody = { category: categoryName, AllVideos: [] };
      const result = await addCategoryApi(reqBody);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully');
        handleClose();
        setAddCategoryStatus(result.data);
      } else {
        toast.error('Something went wrong');
        handleClose();
      }
    } else {
      toast.info('Please add a category name');
    }
  };

  const getCategory = async () => {
    const result = await getAllCategoryApi();
    setAllCategory(result.data);
  };

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id);
    if (result.status >= 200 && result.status < 300) {
      setDeleteCategoryStatus(result.data);
    }
  };

  const ondrag = (e) => e.preventDefault(); // Allows drop

  const videoDrop = async (e, categoryDetails) => {
    e.preventDefault();
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    
    if (categoryDetails.AllVideos.find((item) => item.id === videoDetails.id)) {
      toast.error('Video already in the category');
    } else {
      categoryDetails.AllVideos.push(videoDetails);
      const result = await addVideoToCategoryApi(categoryDetails.id, categoryDetails);
      
      if (result.status >= 200 && result.status < 300) {
        toast.success('Video added successfully');
        setAddCategoryStatus(result.data); // Update to refresh categories
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const videoDrag = (e,video,category)=>{
    console.log(video);
    console.log(category);

    const dataShare = {
      category,
      video
    }

    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }

  useEffect(() => {
    getCategory();
  }, [addCategoryStatus, deleteCategoryStatus , videoStatus]);

  return (
    <div className='category'>
      <h2>Category</h2>
      <button className='category-button' onClick={handleShow}>Add Category</button>
      <div className='songs-category-box'>
        <VideoCard />
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard="false">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded'>
            <input type="text" placeholder='Category Name' className='form-control' value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 && allCategory.map((item) => (
        <div key={item.id} className='border border-secondary border-2 p-3 rounded mt-5'
          onDragOver={ondrag} onDrop={(e) => videoDrop(e, item)}>
          <div className='d-flex justify-content-between mb-3'>
            <h5>{item?.category}</h5>
            <button className='btn btn-danger' onClick={() => handleDelete(item?.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          {item?.AllVideos?.length > 0 && item.AllVideos.map((video) => (
            <div key={video.id} draggable onDragStart={(e)=>videoDrag(e,video,item)}>
              <VideoCard video={video} isPresent={true}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Category;
