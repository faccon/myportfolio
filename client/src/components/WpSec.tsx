import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ABOUT_ME,
  CV,
  DOWNLOAD_RESUME,
  FIELDS,
  NAME,
  RESUME_LINK,
  SPECIALIZATION,
} from "../constants";
import { Viewer } from "./Viewer";

export function WpSec() {
  const [showModal, setshowModal] = useState<boolean>(false);

  function toggleModal() {
    setshowModal(!showModal);
  }

  return (
    <section className="section-1 mb-5">
      <Container className="h-100">
        <Row className="m-0 p-0 h-50 d-flex">
          <Col>
            <div className="emboss">DEVELOPER</div>
          </Col>
          <Col className="d-flex justify-content-center d-block m-0 p-0 d-md-none">
            <img src="images/DP.png" alt="dp" id="DP" />
          </Col>
        </Row>
        <Row className="align-content-center h-50 note">
          <Col sm={12} md={7} className="h-100">
            <Col>
              <p className="h3">{NAME}</p>
            </Col>
            <Col>
              <p className="h2">{SPECIALIZATION}</p>
            </Col>
            <Col>
              <p className="h2">{FIELDS}</p>
            </Col>
            <Col>
              <p className="faint h3">{ABOUT_ME}</p>
            </Col>
            <Col>
              <div className="g-link">
                <span onClick={toggleModal}>{DOWNLOAD_RESUME}</span>
              </div>
            </Col>
          </Col>

          <Col md={5} className="m-0 h-100 p-0 align-items-center d-flex">
            <img
              className="d-none d-md-block img-fluid"
              src="images/DP.png"
              alt="dp"
              id="DP"
            />
          </Col>
        </Row>
        <Viewer title={CV} verify='' url={RESUME_LINK} show={showModal} onHide={toggleModal} />
      </Container>
    </section>
  );
}
