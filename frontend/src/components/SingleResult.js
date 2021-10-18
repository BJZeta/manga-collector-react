import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import SearchModal from "./SearchModal";

const SingleResult = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <Col
      xl={2}
      sm={4}
      xs={6}
      className="searched-books mt-2"
      onClick={handleShow}
    >
      {book.volumeInfo.imageLinks && (
        <Card
          style={{ maxWidth: "10rem" }}
          border="dark"
          className="text-center"
        >
          <Card.Img
            variant="top"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
          <Card.Title className="mb-0">{book.volumeInfo.title}</Card.Title>
        </Card>
      )}
      <SearchModal
        book={book.volumeInfo}
        show={show}
        key={`${book.id}:modal`}
        setShow={setShow}
      />
    </Col>
  );
};

export default SingleResult;
