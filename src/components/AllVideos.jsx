import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { toast } from 'react-toastify'

function AllVideos({addVideoStatus,setVideoStatus}) {

  const [AllVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState({})

  // side effects
  const getAllVideo = async()=>{
    const result = await getVideosApi()
    /* console.log(result); */
    setAllVideos(result.data)
  }

  console.log(AllVideos);

  const onDrop = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
    const {category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(category,video);

    const newArray = category.AllVideos.filter((item)=>item.id!=video.id)
    const newCategory = {
      category: category.category,
      AllVideos: newArray,
      id: category.id
    }

    const result = await addVideoToCategoryApi(category.id, newCategory)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setVideoStatus(result.data)
    }else{
      toast.error('Something went wrong')
    }
  }
  
  //to handle side effects
  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus]) //[]-use effect is called when the component render to the browser

 return (
    <>
    <div dropabble onDragOver={(e)=>onDrop(e)} onDrop={(e)=>videoDrop(e)}>
    <h4>Allvideos</h4>
    {/* Added videos */}
   {AllVideos.length>0?
    <div className="container">
        <div className="row">
            {AllVideos.map((item)=>(
              <div className="col-md-3 p-2">
                <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </div>))
            }
        </div>
    </div>

    :

    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img src="https://gilgit.app/_next/static/media/no-items-found.acefb40a.gif" alt="nothing to show" className='w-100' />
                <p className='text-center text-secondary'>No video added yet.</p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>    
    }
    </div>
    </>
  )
}

export default AllVideos