import React, { useState } from "react";
import { Button, FormControl, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "../components/SearchResults";
import { searchBooks } from "../actions/bookActions";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("");

  const dispatch = useDispatch();

  const searchedBooks = useSelector((state) => state.searchedBooks);
  const { loading, error, books } = searchedBooks;

  const handleSearchBook = (type) => {
    dispatch(searchBooks(searchQuery, type));
  };

  return (
    <>
      <Row className="mt-5">
        <InputGroup size="lg">
          <FormControl
            aria-label="Search"
            aria-describedby="searchbar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search a novel by title, author, or ISBN"
          />
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="intitle"
          >
            Title
          </Button>
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="inauthor"
          >
            Author
          </Button>
          <Button
            onClick={(e) => handleSearchBook(e.target.value)}
            value="isbn"
          >
            ISBN
          </Button>
        </InputGroup>
      </Row>

      <Row className="mt-4">
        <h1>
          {loading && "Loading..."}
          {error && error}
          {books ? "Books searched!" : "Wow, such empty"}
        </h1>
      </Row>
    </>
  );
};

export default SearchScreen;

{
  /* <html>
  <head>
    <title>Books API Example</title>
  </head>
  <body>
    <div id="content"></div>
    <script>
      function handleResponse(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      }
    }
    </script>
    <script src="https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"></script>
  </body>
</html> */
}
