import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SkillsSecProps } from "../../types";
import { SKILLS } from "../constants";

export function SkillsSec({ data }: SkillsSecProps) {

  const skillsRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={skillsRef} className="skills-container sfadeIn">
      <Row md={12} className="skills align-items-center">
        <Col md={4} className="d-none d-md-block">
          <div className="left ">
            <h2>{SKILLS}</h2>
          </div>
        </Col>
        <Col md={12} className="d-block d-md-none d-flex justify-content-center">
          <p className="heading"> {SKILLS} </p>
        </Col>
        <Col md={8} className='mt-2'>
          <div>
            <Container>
              {data?.map((item, index) => {
                return (
                  <div className="skill-item-container" key={index}>
                    <div className="skill-item">{item}</div>
                  </div>
                );
              })}
            </Container>
          </div>
        </Col>
      </Row>
    </section>
  );
}
