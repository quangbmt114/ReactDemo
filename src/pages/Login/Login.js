import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Login/login.css"
function Login() {
    return (
    <div className="content_login">
    <div className="content_login_mini">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tài Khoản</Form.Label>
        <Form.Control type="email" placeholder="Enter Account" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember" />
      </Form.Group>
      <Button variant="primary" type="submit">
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