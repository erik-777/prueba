import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <Container style={{marginTop:'2rem'}}>
        <Card className="mision_vision_card">
          <h1>Mision</h1>
          <p>
            La mision define el proposito de la existencia de la empresa y lo
            diferencia de las demmas, En otras Palabras, tiene que ver con la
            propuesta de valor de un negocio
          </p>
          <h1>Vision</h1>
          <p>
            La vision es el destino al que la empresa quiere llegar. En esta
            sentido, establece los parametros para la toma de deciciones de una
            empresa, las inversiones necesarias y la forma de definir
            estrategias
          </p>
        </Card>
      </Container>
    </div>
  );
}
