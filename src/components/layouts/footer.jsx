import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Facebook from "../../assets/images/icons/facebook.png";
import Instagram from "../../assets/images/icons/instagram.webp";
import Tiktok from "../../assets/images/icons/tiktok.svg";

export default function Footer() {
  return (
    <div style={{margin:"0 auto",marginTop:"1rem",maxWidth:" 70%"}}>
      <Row style={{justifyContent: "end"}}>
        <Card className="socialNetworks">
          <Col style={{display: "flex", padding: "1rem"}}>
            <h3 style={{color:"white"}}>Siguenos en: </h3>
            <div style={{display:"flex",justifyContent:'space-around'}}>
              <Image src={Facebook} rounded style={{marginLeft:"1rem", width: "40px" }} />
              <Image src={Instagram} rounded style={{ width: "40px" }} />
              <Image src={Tiktok} rounded style={{ width: "40px" }} />
            </div>
          </Col>
        </Card>
      </Row>
    </div>
  );
}
