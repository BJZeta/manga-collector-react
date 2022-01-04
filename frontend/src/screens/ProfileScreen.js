import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profile_icon from "../assets/profile_icon.jpg";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.username) {
        dispatch(getUserDetails("profile"));
      } else {
        setUsername(user.username);
        setEmail(user.email);
        setBooks(user.books);
      }
    }
  }, [dispatch, history, userInfo, user]);

  return (
    <>
      {message && <h1>{message}</h1>}
      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Row className="mt-5">
            <Col md={3}>
              <Image src={profile_icon} roundedCircle fluid />
            </Col>
            <h2 className="text-center">{username}'s Profile</h2>
          </Row>
          <h2>Recently Added</h2>
          <Row>
            {!books ? (
              <span>Such Empty :)</span>
            ) : (
              books.map((book) => (
                <img src={book.img} alt={book.name} key={book.id} />
              ))
            )}
          </Row>
          <h2>Unread</h2>
          <Row>
            {!books ? (
              <span>Such Empty</span>
            ) : (
              books.map((book) => (
                <img src={book.img} alt={book.name} key={book.id} />
              ))
            )}
          </Row>
          <h2>All Books</h2>
          <Row>
            {!books ? (
              <span>
                Nothing Yet? <Link to="/search">Start Your Collection</Link>
              </span>
            ) : (
              books.map((book) => (
                <img src={book.img} alt={book.name} key={book.id} />
              ))
            )}
          </Row>
        </div>
      )}
    </>
  );
};

export default ProfileScreen;
