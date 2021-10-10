import React from "react";
import { Pagination } from "react-bootstrap";

export const BookPagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; 1 <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <Pagination className="justify-content-center">
        {pageNumbers.map((number) => (
          <Pagination.Item
            className="text-primary"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
