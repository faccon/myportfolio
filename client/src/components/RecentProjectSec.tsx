import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RecentProjectProps } from "../../types";
import { RECENT_PROJECT } from "../constants";

export function RecentProjectSec({ data, Dialog }: RecentProjectProps) {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <p className="heading pt-3"> {RECENT_PROJECT} </p>
          </Col>
        </Row>
        <Row sm={12} xs={12} className="cardrow">
          <>
            <div className="card-col d-sm-none">
              <div className="cards">
                {data.map((item, index) => {
                  return (
                    <div
                      id={index.toString()}
                      className="card"
                      onClick={() => Dialog(item)}
                    >
                      <div className="card-title m-3">
                        <Row>
                          <Col md={12}>
                            <div className="item-year ">{item.year}</div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={7} sm={12} md={12}>
                            <div className="item-title">{item.title}</div>
                          </Col>
                        </Row>
                      </div>
                      <div className="card-body">
                        <div className="bottom-flags">
                          <span className="material-icons p-1">
                            {item.icon}
                          </span>
                          {item.type !== "WEB" ? null : (
                            <span className="material-icons-round">cloud</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* from lg visible */}
            <Container className="project d-none d-md-block">
              <div className="row row-cols-1 row-cols-md-2 m-0 g-0">
                {data.map((item, index) => {
                  return (
                    <div
                      className="col d-flex justify-content-center"
                      id={index.toString()}
                      onClick={() => Dialog(item)}
                    >
                      <div className="card p-0 mt-4 card-cust d-flex">
                        <img
                          src={item.images.slice(0, 1)[0]}
                          className="card-img img-overlay image-blurred-edge"
                          alt=""
                        />
                        <div className="card-img-overlay">
                          <div className="card-title">
                            {item.ongoing ? (
                              <div className="in-progress">in progress</div>
                            ) : null}
                            <div className="circle">
                              <div className="new-flag">NEW</div>
                            </div>
                            <div className="item-year">{item.year}</div>
                            <Col md={5}>
                              <div className="item-title">{item.title}</div>
                            </Col>
                          </div>
                          <div className="card-body">
                            <div className="bottom-flags">
                              <span className="material-icons p-1">
                                {item.icon}
                              </span>
                              {item.type !== "WEB" ? null : (
                                <span className="material-icons-round">
                                  cloud
                                </span>
                              )}
                              {item.type === "python" ? (
                                <img
                                  src={item.Logo}
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </>
        </Row>
      </Container>
    </section>
  );
}
