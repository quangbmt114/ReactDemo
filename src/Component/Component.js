
import {Row,Col} from 'react-bootstrap'
import { Spinner ,Pagination} from "react-bootstrap"
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import axios from 'axios'
function Component(props) {
   const [searchResult,setSearchResult]= useState([])
   const  limit =8;
   const [page,setPage]=useState(1)
   let array = [];
   const queryString = window.location.search;
console.log({queryString});
   const API = async()=>{
      const data = await axios.get("https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article")
     if(data.status===200){
      setSearchResult(props.dataComponent||data.data) 
         console.log("props",props.dataComponent)
   }
     }
 useEffect(() => {
   API()
 }, [props]);
 let items = [];
 if(searchResult.length>0){
  
   for (let number = 1; number <= Math.ceil(searchResult.length / limit); number++) {
     items.push(
       <Pagination.Item
         onClick={() => {
           setPage(number);
         }}
         key={number}
         active={number === page}
         to={"/page"}
       >
         {number}
       </Pagination.Item>
     );
   }
 }
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
            
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>
                <Link to={`/post/`} >{posts.name}</Link>
              </p>
              <p>{posts.description}</p>
            </div>
         </div>
      </Col>
         )
      })}
      </Row>
      
      <div className="sliderPage"><Pagination>{items}</Pagination></div>
   </div>
  )
}
export default Component