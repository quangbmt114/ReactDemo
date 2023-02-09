import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/index";

function DefaultLayout({ children }) {
    const [searchResult,setSearchResult]= useState("")
useEffect(() => {
    handleSetSearch()
}, []);
    const handleSetSearch=(val)=>{
        setSearchResult(val)
    }
    return (
        <div>
        <Header onSetSearch={handleSetSearch}  />
        <Container style={{marginTop:50}}>
            <div className="content">
                {children({data:searchResult })}
            </div> 
        </Container>
    </div>);
}

export default DefaultLayout;