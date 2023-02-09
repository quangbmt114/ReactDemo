import './detail.css'
import axios from "axios"
import { useState,useEffect } from "react"
function Detail() {
    const [post,setPost]=useState(null)
    const url = window.location.pathname
    const id = url.split("/",3)
    const newid = id[2]
    
   const fetchBlog = async () => {
    const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${newid}`);
    setPost(data.data)
}
useEffect(() => {
    fetchBlog()
   }, []);
  if(post){
    return(
        <div className="content_detail">
            <div className="deatail_image">
                <img src={post.picture}/>
            </div>
            <div className='detail_content'>
                <h2 style={{marginBottom:20}}>{post.name}</h2>
                <p>{post.description}</p>
            </div>
        </div>
       )
  }
}

export default Detail;