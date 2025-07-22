import React from 'react'
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({
    show,
    onClose,
    onSubmit,
    title,
    children,
    submitLabel = "Save",
}) => {
    return (
        <Modal show={show} onHide={onClose}>
        <Modal.Header closebutton>
            <Modal.Title>{title || "Modal"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
       <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={onSubmit}>{submitLabel}</Button>
       </Modal.Footer>
        </Modal>
    )}
export default ModalComponent;