import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profile_icon from "../assets/profile_icon.jpg";

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      console.log("123");
    }
  });

  return (
    <Row className="mt-5">
      <h2 className="text-center">{userInfo.username}'s Profile</h2>
      <Col md={3}>
        <Image src={profile_icon} roundedCircle fluid />
      </Col>
    </Row>
  );
};

export default ProfileScreen;
