import { Col, Container, Row } from "react-bootstrap";

export function WpSec() {
  return (
    <section className="section-1 mb-5">
      <Container className="h-100">
        <Row className="m-0 h-50">
          <Col>
            <div className="emboss">DEVELOPER</div>
          </Col>
          <Col className="d-flex justify-content-center d-block m-0 p-0 d-md-none">
            <img src="images/DP.png" alt="dp" id="DP" />
          </Col>
        </Row>
        <Row className="m-0 mt-2 align-content-center note h-50">
          <Col md={6} lg={6}>
            <Col>
              <p className="h3">Babatunde Adeniyi</p>
            </Col>
            <Col>
              <p className="h2">Software Engineer</p>
            </Col>
            <Col>
              <p className="h2">Website, Mobile and Cloud developer </p>
            </Col>
            <Col>
              <p className="faint h3">
                Over the past 9 years, as an art designer and director, I've
                worked with big companies and up-and-coming startups to
                succesfully help them reach theie full potential and attract new
                customers
              </p>
            </Col>
            <Col>
              <div className="g-link">
                <a href="#project">Download Resume</a>
              </div>
            </Col>
          </Col>

          <Col md={6} className='m-0 p-0'>
            <img
              className="d-none d-md-block"
              src="images/DP.png"
              alt="dp"
              id="DP"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
