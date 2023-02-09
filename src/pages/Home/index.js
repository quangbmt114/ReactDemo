import axios from "axios";
import Component from "../../Component/Component";
import { Pagination } from "react-bootstrap";
import { useState ,useEffect} from "react";
import './home_content.css'


const Home =(props)=>{
      console.log()
  const limit =8;
  const [page, setPage] = useState(1);
  const [data,setData]=useState([])
  let items = [];
  const API = async()=>{
    const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?search=${props.data ||""}`)
   if(data.status===200){
      setData(data.data)
   }
 }
 useEffect(() => {
  API()
}, [props]);
  if(data.length>0){
    for (let number = 1; number <= Math.ceil(data.length / limit); number++) {
      items.push(
        <Pagination.Item
          onClick={() => {
            setPage(number);
          }}
          key={number}
          active={number === page}
        >
          {number}
        </Pagination.Item>
       
      );
    }
  }
    return(
        <div className="content_home1">
          <Component dataComponent={data}
          page={page}
           />
          <div className="listPage">
          <Pagination>{items}</Pagination>
          
          </div>
        </div>
    )
}
export default Home