import React, { useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
const CreatComponent = ({ isShow, handleClose, onReload }) => {
  const [post, setPost] = useState({});
  const OnchangeInput = (event) => {
    //todo: validation data
    setPost({ ...post, [event.target.name]: event.target.value });
    console.log("post",post)
  };
  const onHandelSubmit = async () => {
    const data = await axios.post(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/`, post);
    if (data) {
      alert("thêm post thành công");
      onReload()
      handleClose()
      
    }
  };

  return (
    <Modal show={isShow} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={OnchangeInput}
              name="name"
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              name="picture"
              type="text"
              placeholder="url picture"
              onChange={OnchangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              onChange={OnchangeInput}
              placeholder="description"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandelSubmit} >
          Save post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreatComponent;
