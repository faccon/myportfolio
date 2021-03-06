import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CerificationProps } from "../../types";
import { CERTIFICATION } from "../constants";
import { Viewer } from "./Viewer";

export function CertificationSec({ data }: CerificationProps) {
  const [showModal, setshowModal] = useState<boolean>(false);
  const [item, setItem] = useState<string[]>([]);

  function toggleModal(item: string[]) {
    setItem(item);
    setshowModal(!showModal);
  }

  return (
    <section className="cert_container mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <p className="heading d-flex justify-content-center">
              {CERTIFICATION}
            </p>
          </Col>
        </Row>
        <Row sm={12} xs={12} className="cardrow">
          <div className="card-col d-block d-lg-none">
            <div className="cards">
              {data?.map((item, index) => {
                return (
                  <>
                    <div
                      id={index.toString()}
                      onClick={() =>
                        toggleModal([item.pdf_url, item.name, item.verify])
                      }
                      className="card"
                    >
                      <div className="card-title">
                        <Col xs={10} sm={8} md={12}>
                          <div className="item-title-cert">
                            {item.name}
                          </div>
                        </Col>
                        <Col sm={12} md={12}>
                          <div className="item-year-cert">
                            By: {item.author}
                          </div>
                        </Col>
                      </div>
                      <div className="card-body">
                        <Col sm={12} className="m-4 p-4 last-child">
                          {item.badge ? (
                            <img
                              src={item.badge}
                              alt="certified"
                              width="90px"
                              height="90px"
                            />
                          ) : null}
                        </Col>

                        <div className="bottom-flags">
                          {/* <span className="material-icons p-1">{item.icon}</span> */}
                          {item.Logo ? (
                            <img
                              src={item.Logo}
                              alt={item.name}
                              width={item.author === "IBM" ? "50px" : "40px"}
                              height={item.author === "IBM" ? "35px" : "40px"}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* .lg breakpoint */}
          <Container className="certs d-none d-lg-block">
            <div className="d-flex certs-cust d-flex justify-content-center m-0 p-0">
              {data?.map((item, index) => {
                return (
                  <div id={index.toString()} className="card p-0 m-2 card-cust">
                    <div className="card-img-overlay">
                      <div className="card-title">
                        <Col md={10}>
                          <div className="item-title-cert">{item.name}</div>
                        </Col>
                        <div className="item-year-cert">By: {item.author}</div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-center">
                          {item.badge ? (
                            <img
                              src={item.badge}
                              alt="certified"
                              width="90px"
                              height="90px"
                            />
                          ) : null}
                        </div>

                        <div className="d-flex justify-content-center bottom-verify">
                          {item.verify ? (
                            <a
                              className="verify-cert"
                              href={item.verify}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              verify
                            </a>
                          ) : null}
                          {item.verify ? <div className="line"></div> : null}
                        </div>
                        <div className="bottom-flags">
                          {/* <span class="material-icons p-1">{item.icon}</span> */}
                          {item.Logo ? (
                            <img
                              src={item.Logo}
                              alt={item.name}
                              width={item.author === "IBM" ? "40px" : "30px"}
                              height={item.author === "IBM" ? "25px" : "30px"}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Row>
        <Viewer
          url={item[0]}
          title={item[1]}
          verify={item[2]}
          show={showModal}
          onHide={() => toggleModal([])}
        />
      </Container>
    </section>
  );
}
