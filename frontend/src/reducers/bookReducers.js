import {
  SEARCH_BOOKS_FAIL,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from "../constants/booksContants";

export const searchBooksReducer = (state = { searchedBooks: [] }, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return { loading: true, searchedBooks: [] };
    case SEARCH_BOOKS_SUCCESS:
      return { loading: false, searchedBooks: action.payload };
    case SEARCH_BOOKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
