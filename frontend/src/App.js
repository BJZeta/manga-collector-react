import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Container>
        <Route path="/" component={LoginScreen} exact/>
        <Route path="/register" component={RegisterScreen} />
      </Container>
    </Router>
  );
}

export default App;
