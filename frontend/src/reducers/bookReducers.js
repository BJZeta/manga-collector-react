import {
  SEARCH_BOOKS_FAIL,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from "../constants/booksContants";

export const searchBooksReducer = (state = { books: {} }, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return { loading: true, books: {} };
    case SEARCH_BOOKS_SUCCESS:
      return { loading: false, books: action.payload };
    case SEARCH_BOOKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
