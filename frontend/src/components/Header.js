import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Book-Base</Navbar.Brand>
          </LinkContainer>
          {userInfo ? (
            <Nav className="ml-auto">
              <LinkContainer to="/search">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/profile">
                <Nav.Link>{userInfo.username}</Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={logoutHandler}>
                Log Out
              </Nav.Link>
              
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <LinkContainer to="/search">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
