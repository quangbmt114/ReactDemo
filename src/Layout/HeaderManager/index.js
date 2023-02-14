import { Container,Button } from "react-bootstrap";
import { useState, useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CheckConText } from "../../Layout/DefaultLayout";
function HeaderManager({onSetSearch}) {
    const check = useContext(CheckConText);
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const handleSearchData = (e) => {
        setTimeout(() => {
            setSearchValue(e.target.value)
        },2000);
    }
    useEffect(() => {
        fetchBlog();
    }, [searchValue]);

    const fetchBlog = async () => {
        const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?search=${searchValue }`);
        setSearchResult(data.data);
        onSetSearch(searchValue)
        
    };

    return (<div className="wrap_header">
        <Container>
            <div className="logo_pages">
                
                <Link to={"/manager_page"}  className="manager_page abc"  > Manager Page</Link>
                
                <div className="header_search">
                    <input placeholder="bạn muốn tìm ?" onChange={handleSearchData} />
                    <button className="button_search">Search</button>
                </div>
                <div className="header_login">
                            <Link to={"/"}><Button>ĐĂNG XUẤT</Button></Link>
                </div>
            </div>
        </Container>
    </div>);
}

export default HeaderManager;