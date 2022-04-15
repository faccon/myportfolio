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
    <Container id="root-container">
      {/* <section> */}
        <Row classsName="p-0 m-0">
          <div className="emboss">DEVELOPER</div>
          <img
            className="img-fluid d-block d-md-none"
            src="images/DP.png"
            alt="dp"
            id="DP"
          />

          {/* Left */}
          <Col sm={12} md={6} className="column ps-4 pb-2">
            <Col sm={12} className="note">
              <div className="note-container">
                <Col sm={12}>
                  <p className="h3">{NAME}</p>
                </Col>
                <Col sm={12}>
                  <p className="h2">{SPECIALIZATION}</p>
                </Col>
                <Col sm={12}>
                  <p className="h2">{FIELDS}</p>
                </Col>
                <Col sm={12}>
                  <p className="faint h3">{ABOUT_ME}</p>
                </Col>
                <Col>
                  <div className="g-link">
                    <span onClick={toggleModal}>{DOWNLOAD_RESUME}</span>
                  </div>
                </Col>
              </div>
            </Col>
          </Col>

          {/* Right */}
          <Col sm={12} md={6} className="column c-2 d-none d-md-block">
            <img
              className="img-container"
              src="images/DP.png"
              alt="dp"
              id="DP"
            />
          </Col>
        </Row>
        <Viewer
          title={CV}
          verify=""
          url={RESUME_LINK}
          show={showModal}
          onHide={toggleModal}
        />
      {/* </section> */}
    </Container>
  );
}