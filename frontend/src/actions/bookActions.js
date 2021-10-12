import axios from "axios";
import {
  SEARCH_BOOKS_FAIL,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_RESET,
  SEARCH_BOOKS_SUCCESS,
} from "../constants/booksContants";

export const searchBooks = (query, type) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_BOOKS_REQUEST });

    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=!${type}:${query}&maxResults=40`
    );

    const items = data.items;

    dispatch({
      type: SEARCH_BOOKS_SUCCESS,
      payload: items,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_BOOKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetSearch = () => (dispatch) => {
  dispatch({ type: SEARCH_BOOKS_RESET });
};
