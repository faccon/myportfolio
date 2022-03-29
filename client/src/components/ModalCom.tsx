import { Modal, Col, Row, Container } from "react-bootstrap";
import { ProjectItemProps } from "../../types";

interface ModalComProps {
  show: boolean;
  toggle: () => void;
  data: ProjectItemProps | undefined;
}

export function ModalCom({ show, toggle, data }: ModalComProps) {
  const landscape = data?.images.slice(0, 1);

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
            <Col md={4} className="left-col">
              <Col className="mb-1" xs={5} md={4}>
                <div className="details-name-title">Name: </div>
              </Col>
              <Col xs={7} md={8}>
                <div className="mb-3 details-name">{data?.title}</div>
              </Col>
              {data?.contributors ? (
                <>
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
                </>
              ) : null}
              <Col className="mb-2" xs={8}>
                <div className="details-name-title">Features:</div>
              </Col>
              <Col xs={12} md={12}>
                <div className="details-note">
                  <ul className="column-list detail-item">
                    {data?.features.map((item, index) => {
                      return <li id={index.toString()}>{item}</li>;
                    })}
                  </ul>
                </div>
              </Col>
              <Col className="m-5 bottom" xs={12}>
                <div className="g-link d-flex">
                  <a href={data?.url}>
                    {data?.type !== "web"
                      ? "view rep on GitHub"
                      : "visit website"}
                  </a>
                </div>
              </Col>
            </Col>

            {/* Right Column */}
            <Col className="me-4 ms-4 modal-right">
              {data?.type !== "python" ? (
                <>
                  <img
                    src={landscape ? landscape[0] : undefined}
                    alt="landscape"
                    id="1"
                    className="img-fluid"
                  />
                  {data?.images.slice(1).map((item, index) => {
                    return (
                      <Col md={12} className="m-2">
                        <img
                          src={item}
                          alt={item}
                          id={index.toString()}
                          className="p-image"
                        />
                      </Col>
                    );
                  })}
                </>
              ) : (
                <>
                  <Col>
                    <div className="mb-3 details-name">{data?.scenario}</div>
                  </Col>
                  <Col>
                    <div className="display-linebreak scenario-content">
                      <text>{data.content}</text>
                    </div>
                  </Col>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
