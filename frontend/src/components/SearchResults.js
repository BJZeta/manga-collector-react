import React, { useEffect, useState } from "react";

export default function SearchResults({ searchQuery, queryType }) {
  const [loading, isLoading] = useState(true);

  const getBooks = (book, type) => {
    if (type === "title") {
      return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${book}`
      ).then((data) => data.json());
    }
    if (type === "author") {
      return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${book}`
      ).then((data) => data.json());
    }
    if (type === "isbn") {
      return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${book}`
      ).then((data) => data.json());
    }
  };

  useEffect(() => {
    getBooks(searchQuery, queryType).then((books) => {
      console.log(books);
    });
    return () => isLoading(false);
  }, []);

  return <div>{loading ? "Loading...." : ""}</div>;
}
