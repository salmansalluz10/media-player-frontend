import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"





export const AddVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

export const getVideosApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}

//add video to history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}


//get video from history

export const getAllVideoHistory = async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}

//api to delete a video

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

//api to delete video from history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}


//api to add category

export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//api to get catgeory

export const getAllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

//api to delete category

export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

//api to add video details to a category

export const addVideoToCategoryApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}