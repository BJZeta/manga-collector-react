import React, { useState } from "react";
import SingleResult from "./SingleResult";
import { Row } from "react-bootstrap";

const SearchResults = ({ books }) => {
  return (
    <Row className="mx-auto  align-items-center">
      {books && books.map((book) => <SingleResult book={book} key={book.id} />)}
    </Row>
  );
};

export default SearchResults;
