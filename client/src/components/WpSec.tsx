import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export function WpSec() {
  return (
    <section className="section-1">
      <Container className='h-100'>
        <Row className="m-0 h-25">
          <div className="emboss">DEVELOPER</div>
        </Row>

        <Row className="m-0 align-content-center h-75">
          <Col md={8} lg={5}>
            <p className="h3 faint">Babatunde Adeniyi</p>
          </Col>
          <Col md={8} lg={5}>
            <p className="h2">Software Engineer</p>
          </Col>
          <Col md={8} lg={5}>
            <p className="h2">Website, Mobile and Cloud developer </p>
          </Col>
          <Col md={8} lg={5}>
            <p className="faint h3">
              Over the past 9 years, as an art designer and director, I've
              worked with big companies and up-and-coming startups to
              succesfully help them reach theie full potential and attract new
              customers
            </p>
          </Col>
          <Col md={8} lg={5}>
            <div className="g-link">
              <a href="#project">Download Resume</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
