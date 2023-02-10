import { Form,Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useEffect, useState,useContext } from "react"
import { CheckConText } from "../../Layout/DefaultLayout";
import "../Login/login.css"
function Login() {
  const check = useContext(CheckConText)
   const changePage = useNavigate()
  if(  JSON.parse(localStorage.getItem("account"))==null){
    localStorage.setItem("account",JSON.stringify([{username:"admin"
    ,password:"admin"
    ,role:"admin"
  }]))
  }
  const onHandleLogin = ()=>{
    const username = document.getElementById("account").value
    const password = document.getElementById("password").value
    const account = JSON.parse(localStorage.getItem("account"))
    if(username==""||password==""){
          alert("vui lòng nhập tài khoản và mật khẩu")
    }else{
      account.map(props=>{
        if(props.username==username&&props.password==password){
             switch (props.role) {
              case"user":
              alert("đăng nhập thành công !")
              console.log("vai trò user")
              changePage("/")
                
                break;
              case "admin":
                console.log("vai trò admin")
                alert("đăng nhập thành công !")
                changePage("/manager_page")
                break;
              default:
                break;
             }
        }
      })
    }
        
       
  }
    return (
    <div className="content_login">
    <div className="content_login_mini">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tài Khoản</Form.Label>
        <Form.Control id="account" type="email" placeholder="Enter Account" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember" />
      </Form.Group>
     <Button variant="primary" onClick={()=>onHandleLogin()} > 
      Đăng Nhập
        </Button>
      <Link to={"/register"}><Button style={{marginLeft:10}} >
       Đăng Ký
      </Button></Link>
    </Form>
    </div>
    </div> );
}

export default Login;