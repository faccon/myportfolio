import { Col, Row } from "react-bootstrap";
import { ActivityIndicator } from "react-native-web";

export function LandingSec({ innerRef }) {

  return (
    <section className="landing" ref={innerRef}>
      <Col md={6} className="top">
        <div className="landing-logo faint">Babatunde Adeniyi</div>
      </Col>
      <Row>
        <Col md={12} className="middle">
          <ActivityIndicator color="hsla(196, 61%, 58%, 0.75)" size={40} />
        </Col>
      </Row>

      <Col md={6} className="loading-bottom">
        <Col md={12}>
          <p className="welcome faint">Please wait</p>
          <p className="wait faint">Loading Environment </p>
        </Col>
      </Col>
    </section>
  );
}
