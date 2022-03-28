import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CerificationProps } from "../../types";
import { CERTIFICATION } from "../constants";

export function CertificationSec({ data }: CerificationProps) {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <p className="heading pt-3"> {CERTIFICATION} </p>
          </Col>
        </Row>
        <Row sm={12} xs={12} className="cardrow">
          <div className="card-col d-lg-none">
            <div className="cards">
              {data.map((item, index) => {
                return (
                  <div id={index.toString()} className="cert-card-m">
                    <div className="card-title">
                      <Col md={10}>
                        <div className="item-title ps-3">{item.name}</div>
                      </Col>
                      <Col md={12}>
                        <div className="item-year ps-3">By: {item.author}</div>
                      </Col>
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
                      <div className="d-flex justify-content-center bottom">
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
                        <div className="line"></div>
                      </div>
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
                );
              })}
            </div>
          </div>
          {/* .lg breakpoint */}
          <Container className="certs d-none d-lg-block">
            <div className="d-flex certs-cust">
              {data.map((item, index) => {
                return (
                  <div id={index.toString()} className="card p-0 m-2 card-cust">
                    <div className="card-img-overlay">
                      <div className="card-title">
                        <Col md={10}>
                          <div className="item-title">{item.name}</div>
                        </Col>
                        <div className="item-year">By: {item.author}</div>
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

                        <div className="d-flex justify-content-center bottom">
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
      </Container>
    </section>
  );
}
