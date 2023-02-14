
import { Pagination,Button} from "react-bootstrap"
import { useState,useEffect } from 'react'
import ManagerComponent from "../../ManagerComponent";
import axios from 'axios'
import CreatComponent from "../../CreatComponent";
function Manager(props) {
    const limit =8;
    const [page, setPage] = useState(1);
    const [data,setData]=useState([])
    const [isOpen, setIsOpen] = useState(false); 
    let items = [];
    const API = async()=>{
      const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?search=${props.data ||""}`)
     if(data.status===200){
        setData(data.data)
     }
    }
   const onHandleReload = (id) => {
    console.log("id removed", id);
    const updatePost = data.filter((post) => post.id !== id);
    setData(updatePost);

  };
  const onHandleReloadCreate = () => {
          API()
  };
   useEffect(() => {
    API()
  }, [data]);
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
           <Button onClick={() => setIsOpen(!isOpen)} variant="primary"
            >
              create post
            </Button>
            <ManagerComponent dataComponent={data}
            page={page}
              onReload={onHandleReload}
             />
            <div className="listPage">
            <Pagination>{items}</Pagination>
            <CreatComponent  isShow={isOpen} handleClose={() => setIsOpen(false)}
            onReload={onHandleReloadCreate}
             />
            </div>
          </div>
      )
}

export default Manager;