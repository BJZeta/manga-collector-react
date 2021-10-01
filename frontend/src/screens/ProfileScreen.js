import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profile_icon from "../assets/profile_icon.jpg";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

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
      }
    }
  }, [dispatch, history, userInfo, user]);

  return (
    <div>
      {message && <h1>{message}</h1>}
      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Row className="mt-5">
          <Col md={3}>
            <Image src={profile_icon} roundedCircle fluid />
          </Col>
          <h2 className="text-center">{username}'s Profile</h2>
        </Row>
      )}
    </div>
  );
};

export default ProfileScreen;
