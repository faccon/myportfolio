import { features } from "process";
import React from "react";
import { Modal, Col, Row, Container } from "react-bootstrap";
import { ProjectItemProps, ProjectProps } from "../../types";
import { DUMMY_DB } from "../shared";

interface ModalComProps {
  show: boolean;
  toggle: () => void;
  data: ProjectItemProps | undefined;
}

export function ModalCom({ show, toggle, data }: ModalComProps) {
  return (
    <Modal
      show={show}
      fullscreen
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <span className="material-icons-outlined close" onClick={toggle}>
                cancel
              </span>
            </Col>
          </Row>
          <Row>
            {/* Left Column */}
            <Col md={6}>
              <Col className="mb-1" xs={5} md={4}>
                <div className="details-name-title">Name: </div>
              </Col>
              <Col xs={7} md={8}>
                <div className="mb-3 details-name">{data?.title}</div>
              </Col>
              <Col className="mb-1" xs={12} md={4}>
                <div className="details-name-title">Contributors:</div>
              </Col>
              <Col className="mb-3" xs={7} md={8}>
                {data?.contributors?.map((item, index) => {
                  return (
                    <div className="details-name" id={index.toString()}>
                      <a className="link-a me-2" href={item.Link}>
                        {item.Name}
                      </a>
                    </div>
                  );
                })}
              </Col>
              <Col className="mb-2" xs={8}>
                <div className="details-name-title">Features:</div>
              </Col>
              <Col xs={12} md={12}>
                <div className="details-note">
                  {data?.features.map((item, index) => {
                    return (
                      <div className="detail-item-container" key={index}>
                        <div className="detail-item">{item}</div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col className="m-5 bottom" xs={12}>
                <div className="g-link d-flex">
                  <a href="/">vist page</a>
                </div>
              </Col>
            </Col>

            {/* Right Column */}
            <Col className="m-4"></Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
