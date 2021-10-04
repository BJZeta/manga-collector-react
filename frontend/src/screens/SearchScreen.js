import React, { useState } from "react";
import { Button, FormControl, InputGroup, Row } from "react-bootstrap";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("title");

  return (
    <>
      <Row className="mt-5">
        <InputGroup size="lg">
          <FormControl
            aria-label="Search"
            aria-describedby="searchbar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search a novel or author"
          />
          <Button onClick={(e) => setQueryType(e.target.value)} value="title">
            Title
          </Button>
          <Button onClick={(e) => setQueryType(e.target.value)} value="author">
            Publisher
          </Button>
          <Button onClick={(e) => setQueryType(e.target.value)} value="isbn">
            ISBN
          </Button>
        </InputGroup>
      </Row>

      <Row className="mt-4">
        <h1>
          {searchQuery
            ? `Search ${searchQuery} under ${queryType}`
            : "Wow, such empty"}
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
