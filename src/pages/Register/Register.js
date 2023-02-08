import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './register.css'
function Register() {
    return ( <div className="content_register">
    <div className="content_register_mini">
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
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