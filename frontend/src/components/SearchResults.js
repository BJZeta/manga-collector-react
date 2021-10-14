import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SearchModal from "./SearchModal";

const SearchResults = ({ books }) => {

  return (
    <Row className="mx-auto  align-items-center">
      {books &&
        books.map(
          (book) =>
            book.volumeInfo.imageLinks && (
              <>
                <Col
                  xl={2}
                  sm={4}
                  xs={6}
                  className="searched-books mt-2"
                  key={book.id}
                  onClick={}
                >
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
                    <Card.Title className="mb-0">
                      {book.volumeInfo.title}
                    </Card.Title>
                  </Card>
                </Col>
                <SearchModal book={book.volumeInfo} />
              </>
            )
        )}
    </Row>
  );
};

export default SearchResults;
