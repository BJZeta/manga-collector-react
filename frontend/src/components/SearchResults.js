import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import placeholder_book from "../assets/placeholder_book.jpg";

const SearchResults = ({ books }) => {
  console.log(books);

  return (
    <Row className="mx-auto">
      {books &&
        books.map(
          (book) =>
            book.volumeInfo.imageLinks && (
              <Col lg={2} md={3} xs={6}>
                <Card
                  key={book.id}
                  style={{ maxWidth: "10rem" }}
                  border="dark"
                  className="text-center"
                >
                  <Card.Img
                    variant="top"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <Card.Title>{book.volumeInfo.title}</Card.Title>
                </Card>
              </Col>
            )
        )}
    </Row>
  );
};

export default SearchResults;
