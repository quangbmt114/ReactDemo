import axios from "axios";
import { useState,useEffect } from "react";
import { Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function ListPost() {
    const [post,setPost]= useState([])
        const fecthPost = async()=>{
            const data = await axios.get("https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article")
            setPost(data.data)
            console.log(post)
        }
        useEffect(() => {
            fecthPost()
        }, []);
   if(post){
     return (
    <div>
      <Row>
      {post.map((posts,index)=>{
         return(
            <Col xs={12} md={3} key={index}>
         <div>
            <div className='component_img'>
               <img src={posts.picture} />
            </div>
            <div className='component_content'>
            {console.log(post)}
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>
                <Link to={`/post/${posts.id}`} >{posts.name}</Link>
              </p>
              <p>{posts.description}</p>
            </div>
         </div>
      </Col>
         )
      })}
      </Row>
    </div>
   
     );
   }
}

export default ListPost;