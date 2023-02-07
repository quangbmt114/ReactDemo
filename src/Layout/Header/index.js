import { Container } from "react-bootstrap";
import logopages from './home.png'
import './header.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Header(props) {
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const handleSearchData = (e) => {
        setTimeout(() => {
            setSearchValue(e.target.value)
        },2000);
    }
    useEffect(() => {
        fetchBlog();
        console.log(searchResult)
    }, [searchValue]);

    const fetchBlog = async () => {
        const data = await axios.get(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?search=${searchValue }`);
        setSearchResult(data.data);
        props.onSetSearch(data.data)
    };
    return (<div className="wrap_header">
        <Container>
            <div className="logo_pages">
                <Link to={"/"}>
                    <img src={logopages} />
                </Link>
                <h3>Home</h3>
                <div className="header_search">
                    <input placeholder="bạn muốn tìm ?" onChange={handleSearchData} />
                    <button className="button_search">Search</button>
                </div>
            </div>
        </Container>
    </div>);
}

export default Header;