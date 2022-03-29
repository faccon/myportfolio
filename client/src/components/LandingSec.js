import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Lottie from "lottie-web";

export function LandingSec({ innerRef }) {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../loading.json"),
    });
  }, []);

  return (
    <section className="landing" ref={innerRef}>
      <Col md={6} className="top">
        <div className="landing-logo faint">Babatunde Adeniyi</div>
      </Col>
      <Row className="w-100">
        <Col md={12}>
          <div className="middle" ref={container}></div>
        </Col>
      </Row>

      <Col md={6} className="loading-bottom">
        <Col md={12}>
          <p className="welcome">Please wait</p>
          <p className="wait faint">Loading Environment </p>
        </Col>
      </Col>
    </section>
  );
}
