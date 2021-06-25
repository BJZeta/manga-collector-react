import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
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
      <Navbar variant="dark" expand="lg" collapseOnSelect>
          <Container>
              <LinkContainer to="/">
                  <Navbar.Brand></Navbar.Brand>
              </LinkContainer>
          </Container>
      </Navbar>
    </header>
  );
};

export default Header;
