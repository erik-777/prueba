import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";

import Pajaro from "../assets/images/pajaro1.webp";
import Personas from "../assets/images/personas.jpg";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/layouts/footer";
import { formContext } from "../context/formContext";

export default function Register() {
  const [formData, setFormData] = useContext(formContext);
  const [validated, setValidated] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info(JSON.stringify(userData), {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setFormData(userData);
    // console.log(userData);
  };
  return (
    <Container style={{ marginTop: "3rem" }}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Row>
        <Col className="register_left_col">
          <Card
            style={{
              background: "none",
              border: "none",
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Control
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  placeholder="Correo"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
              </Form.Group>
              <Button type="submit" variant="warning" style={{ width: "100%" }}>
                Iniciar Sesion
              </Button>
            </Form>
          </Card>
        </Col>
        <Col className="register_right_col">
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <Row>
              <h3>Contenido multimedia muy llamativo</h3>
            </Row>
            <Row>
              <Image src={Pajaro} rounded style={{ width: "200px" }} />
            </Row>
            <Row>
              <Image src={Personas} rounded style={{ width: "200px" }} />
            </Row>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
