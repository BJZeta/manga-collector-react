import ReactDom from "react-dom";
import React from "react";
import { Modal } from "react-bootstrap";

const SearchModal = ({ book, show, onClose, key }) => {

  return ReactDom.createPortal(
    <Modal key={key} show={show}>
      <Modal.Header closeButton onClick={onClose} />
      <Modal.Title>{book.title}</Modal.Title>
      <Modal.Body className={"modal-container"}>
        <img
          src={book.imageLinks && book.imageLinks.thumbnail}
          alt={`${book.title} Cover`}
        />
        <h2>{book.authors && book.authors.toString()}</h2>
        <section>
          <h2>Summery</h2>
          <p>{book.description}</p>
        </section>
      </Modal.Body>
    </Modal>,
    document.getElementById("portal")
  );
};

export default SearchModal;
