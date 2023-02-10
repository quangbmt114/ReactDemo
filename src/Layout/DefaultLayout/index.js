import { createContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/index";

export   const CheckConText = createContext(false)
function DefaultLayout({ children }) {
    const [searchResult,setSearchResult]= useState("")
    const [check,setCheck]= useState(CheckConText)
useEffect(() => {
    handleSetSearch()
}, []);
    const handleSetSearch=(val)=>{
        setSearchResult(val)
    }
    const handleCheck = (ck)=>{
            setCheck(ck)
    }
   
    return (
        <div>
        <CheckConText.Provider value={false}>
        <Header onSetSearch={handleSetSearch}
         />
        <Container style={{marginTop:50}}>
            <div className="content">
                {children({data:searchResult})}
            </div> 
        </Container>
        </CheckConText.Provider>
    </div>);
}

export default DefaultLayout;