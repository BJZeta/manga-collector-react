import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import placeholder_book from "../assets/placeholder_book.jpg";

const SearchResults = ({ books }) => {
  console.log(books);

  return (
    <Row className="mx-auto  align-items-center">
      {books &&
        books.map(
          (book) =>
            book.volumeInfo.imageLinks && (
              <Col xl={2} md={3} xs={6} className="searched-books mt-2">
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
                  <Card.Title className="mb-0">
                    {book.volumeInfo.title}
                  </Card.Title>
                </Card>
              </Col>
            )
        )}
    </Row>
  );
};

export default SearchResults;
