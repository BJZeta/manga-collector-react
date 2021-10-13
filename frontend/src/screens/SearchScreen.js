import React, { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "../components/SearchResults";
import { resetSearch, searchBooks } from "../actions/bookActions";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("");

  const dispatch = useDispatch();

  const searchedBooks = useSelector((state) => state.searchedBooks);
  const { loading, error, books } = searchedBooks;

  const handleSearchBook = (type) => {
    return dispatch(searchBooks(searchQuery, type));
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    dispatch(resetSearch());
  };

  return (
    <>
      <Row className="mt-5">
        <Col lg={8}>
          <InputGroup size="lg">
            <FormControl
              aria-label="Search"
              aria-describedby="searchbar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a novel by title, author, or ISBN"
            />
            <Button variant="danger" onClick={handleResetSearch}>
              X
            </Button>
          </InputGroup>
        </Col>
        <Col lg={4} className="text-center mt-2">
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="intitle"
            className="mx-2"
          >
            Title
          </Button>
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="inauthor"
            className="mx-2"
          >
            Author
          </Button>
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="isbn"
            className="mx-2"
          >
            ISBN
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <h1>
          {error && error}
          {loading && "Loading...."}
          {books[0] && <SearchResults books={books} />}
        </h1>
      </Row>
    </>
  );
};

export default SearchScreen;
