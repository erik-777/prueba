import { Card, Col, Container, Image, Row } from "react-bootstrap";
import CDT from "../assets/images/logo.png";
import Footer from "../components/layouts/footer";
export default function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
            <Card className="contact_card">
              <Col>
                <p>
                  Vereda el Cofre, Parcelacion la Margarita, Finca Santa Maria,
                  Casa 1, Popayan, Cauca 190002, Co
                </p>
                <p>comunicaciones@cdtcreatic.com</p>
              </Col>
              <Col>
                <Image src={CDT} rounded style={{ width: "400px" }} />
              </Col>
            </Card>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
