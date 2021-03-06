import { Modal, Col, Row, Container } from "react-bootstrap";
import { ProjectItemProps } from "../../types";

interface ModalComProps {
  show: boolean;
  toggle: () => void;
  data?: ProjectItemProps;
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

          {/* Left Column */}
          <Row>
            <Col md={4} className="left-col">
              <Row>
                <Col className="mb-1">
                  <div className="details-name-title">Name: </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="mb-3 details-name">{data?.title}</div>
                </Col>
                {data?.contributors ? (
                  <>
                    <Col className="mb-1" xs={12} md={12}>
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
                {data?.features ? (
                  <>
                    <Col className="mb-2" xs={8} md={12}>
                      <div className="details-name-title">Features:</div>
                    </Col>
                    <Col xs={12} md={12}>
                      <div className="details-note">
                        <ul className="column-list detail-item">
                          {data?.features?.map((item, index) => {
                            return <li id={index.toString()}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </Col>
                  </>
                ) : null}
                <Col className="pt-5 justify-content-end d-flex" xs={12}>
                  <div className="g-link">
                    <a href={data?.url}>
                      {data?.type !== "WEB"
                        ? "view rep on GitHub"
                        : "visit website"}
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>

            {data?.type !== "python" ? null : (
              <Row className="d-block d-md-none">
                <Container>
                  <Col className="ms-2">
                    <div className="details-name">{data?.scenario}</div>
                  </Col>
                </Container>
              </Row>
            )}

            {/* Right and Bottom Column */}
            <Col md={8} className="m-0 mt-4 d-none d-md-block p-0 modal-right">
              <Container>
                <Row>
                  <Col>
                    <div className="mb-3 details-name">{data?.scenario}</div>
                  </Col>
                </Row>
                {data?.type !== "python" ? (
                  <>
                    <img
                      src={landscape ? landscape[0] : undefined}
                      alt="landscape"
                      id="1"
                      className="img-fluid mt-2"
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
                      <div className="display-linebreak scenario-content">
                        <text>{data.content}</text>
                      </div>
                    </Col>
                  </>
                )}
              </Container>
            </Col>
          </Row>

          <Row
            className={
              data?.type !== "python" ? "bottom-row" : "bottom-row-white"
            }
          >
            <Col className="m0 m2-4 p-0 d-block d-md-none modal-right">
              <Container>
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
                      <div className="display-linebreak scenario-content">
                        <text>{data.content}</text>
                      </div>
                    </Col>
                  </>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
