import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const SearchModal = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Title>{book.title}</Modal.Title>
      <Modal.Body>
        <img src={book.imageLinks.thumbnail} alt={`${book.title} Cover`} />
        <h2>
          {book.authors &&
            book.authors.map((author) => {
              return author.toString().split(",");
            })}
        </h2>
        <section>
          <h2>Summery</h2>
          <p>{book.description}</p>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
