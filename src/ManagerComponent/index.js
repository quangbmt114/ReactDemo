import Del from "./trash.png"
import {Row,Col} from 'react-bootstrap'
import { Spinner } from "react-bootstrap"
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import axios from 'axios'
function ManagerComponent(props) {
   const [searchResult,setSearchResult]= useState([])
   const  limit =8;
   const API = async()=>{
      const data = await axios.get("https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article")
     if(data.status===200){
      const newData =props.dataComponent.slice((props.page-1)*limit,props.page*limit)
      setSearchResult(newData)
   }
     }

 useEffect(() => {
   API()
 }, [props]);
   if(searchResult.length===0){
      return (
        <div className='content_home'>
          <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
         </Spinner>
        </div>
       );
   }
  return(
   <div>
      <Row>
      {searchResult.map((posts,index)=>{
         return(
            <Col xs={12} md={3} key={index}>
         <div>
            <div className='component_img'>
               <img src={posts.picture} />
            </div>
            <div className='component_content'>
            <img className="component_del" src={Del} 
         />
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
  )
}
export default ManagerComponent