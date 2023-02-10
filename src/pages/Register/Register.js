import { Form,Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './register.css'
function Register() {
  const submit = useNavigate()
   const onHandleRegister = ()=>{
        const user = document.getElementById("username").value
        const pass = document.getElementById("password").value
        const repeatpass = document.getElementById("repeatpassword").value
        const subRegister = {
          username:user,
          password:pass,
          role:"user"
        }
       if(user==""||pass==""||repeatpass==""){
        alert("ô nhập không được để trống")
       }else{
        if(pass!=repeatpass){
            alert("pass nhập không trùng khớp")
        }else{
          const data = JSON.parse(localStorage.getItem("account"))
          localStorage.setItem("account",JSON.stringify([...data,subRegister]))
          console.log([...data,subRegister])
          alert("đăng kí thành công !")
          submit("/")
        }
       
       }
   }
    return ( <div className="content_register">
    <div className="content_register_mini">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tài Khoản</Form.Label>
        <Form.Control type="text" id="username" placeholder="Enter Account" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" id="repeatpassword" placeholder="Repeat Password" />
      </Form.Group>
      <Button variant="primary" onClick={onHandleRegister}>
        ĐĂNG KÝ
      </Button>
      <Link to={"/login"}><Button style={{marginLeft:10}} >
       HỦY
      </Button></Link>
    </Form>
    </div>
    </div>  );
}

export default Register;