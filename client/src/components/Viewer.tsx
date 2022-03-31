import { Modal } from "react-bootstrap";
import { ViewerProps } from "../../types";
import { DOWNLOAD, VERIFY } from "../constants";

export function Viewer({ show, onHide, url, title, verify }: ViewerProps) {
  const fileSource = `${url}/preview`;

  return (
    <Modal
      backdrop="static"
      show={show}
      onHide={onHide}
      dialogClassName="modal-70w"
      contentClassName="modal-90h"
    >
      <Modal.Header closeButton>
        <Modal.Title className="viewer-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title={title}
          src={fileSource}
          width="100%"
          height="320px"
          allow="autoplay"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <div className="g-link">
          <a href={verify?.length > 0 || undefined ? verify : url}>
            {verify?.length > 0 || undefined ? VERIFY : DOWNLOAD}
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
