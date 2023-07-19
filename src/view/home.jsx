import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Mapa from "../assets/images/mapa.png";
import Rio from "../assets/images/rio.jpeg";
import Pajaro from "../assets/images/pajaro1.webp";
import Personas from "../assets/images/personas.jpg";
import Footer from "../components/layouts/footer";

export default function Home() {
  return (
    <Container style={{marginTop:"2rem"}}>
      <Row>
        <Col>
          <Card style={{backgroundColor: "rgb(233 233 233 / 44%)", borderRadius: "1rem", padding: "2rem"}}>
            <Image src={Mapa} rounded />
          </Card>
        </Col>
        <Col>
          <Card style={{backgroundColor: "rgb(233 233 233 / 44%)", borderRadius: "1rem", padding: "2rem"}}>
            <Row style={{display:"flex", justifyContent:"center",padding:"1rem"}}>
              <Image src={Rio} rounded style={{ width: "400px" }} />
            </Row>
            <Row style={{display:"flex", justifyContent:"center",padding:"1rem"}}>
              <Image src={Pajaro} rounded style={{ width: "200px" }} />
              <Image src={Personas} rounded style={{ width: "200px" }} />
            </Row>
          </Card>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
