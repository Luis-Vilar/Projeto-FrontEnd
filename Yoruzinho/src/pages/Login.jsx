import React, { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import HeaderLogin from "../components/HeaderLogin";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useContexto } from "../context/useContexto";

const Login = () => {

  const { loadEstablecimentos } = useContexto();

  return (
    <>
      <HeaderLogin />
      <Row style={{ height: "100vh" }} className="align-items-center">
        <Col md={6} className="mx-auto align-itens-center">
          <Image src={logo} fluid />
        </Col>
        <Col md={6} className="mx-auto align-items-center">
          <FormLogin />
        </Col>
      </Row>
    </>
  );
};

export default Login;
