import { Container,Button } from "react-bootstrap";
import logopages from './home.png'
import './header.css'
import { useState, useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CheckConText } from "../../Layout/DefaultLayout";
function Header({onSetSearch}) {
    const check = useContext(CheckConText);
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const handleSearchData = (e) => {
        setTimeout(() => {
            setSearchValue(e.target.value)
        },2000);
    }
    const onHandleRemoveManager = ()=>{
           const style =  document.getElementsByClassName("manager_page")[0]
           console.log(style.className.includes("abc"))
           if(check){
                    style.classList.remove("abc")
           }else{
            style.classList.add("abc")
           }
          
    }
    useEffect(() => {
        fetchBlog();
        onHandleRemoveManager()
    }, [searchValue]);

    const fetchBlog = async () => {
        const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?search=${searchValue }`);
        setSearchResult(data.data);
        onSetSearch(searchValue)
        
    };

    return (<div className="wrap_header">
        <Container>
            <div className="logo_pages">
                <Link to={"/"}>
                    <img src={logopages} />
                </Link>
                <Link to={"/listpost"}  className="list_post"> List Post</Link>
                <Link to={"/admin"}  className="manager_page abc"  > Manager Page</Link>
                <div className="header_search">
                
                    <input placeholder="bạn muốn tìm ?" onChange={handleSearchData} />
                    <button className="button_search">Search</button>
                </div>
                
                <div className="header_login">
                            <Link to={"/login"}><Button>ĐĂNG NHẬP</Button></Link>
                </div>
            </div>
        </Container>
    </div>);
}

export default Header;