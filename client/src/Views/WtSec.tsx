import { Col } from "react-bootstrap";
import { LUWT } from "../constants";

export function WtSec() {
  return (
    <section id="#Hire" className="mt-5 mb-5 last-section justify-content-center d-flex">
      <div className="work-together">
        <Col md={12} className="g-link">
          <a className="wk-t m-4" href="mailto:adeniyi.germany@gmail.com">
            {LUWT}
            <span className="material-icons-outlined">arrow_right_alt</span>
          </a>
        </Col>
      </div>
    </section>
  );
}
