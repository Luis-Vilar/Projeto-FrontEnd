import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContexto } from "../context/useContexto";
import axios from "axios";
import FormCadastroUsuario from "./FormCadastroUsuario";

const FormLogin = () => {
  const { login, validarSenha, validarUsuario } = useContexto();
  const [mostrarCadastro, setMostrarCadastro] = React.useState(false);

  const loginApi = async (email, senha) => {
    try {
      const response = await axios.post(
        "https://enthusiastic-rose-whale.cyclic.app/api/usuarios/login",
        {
          email,
          senha,
        }
      );

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Email ou senha incorretos");
      redireccionar("/");
    }
  };

  //funcao para redirecionar para a pagina inicial
  const redireccionar = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements["Login.email"].value;
    const senha = event.target.elements["Login.senha"].value;
    validarUsuario(email, senha)
      ? loginApi(email, senha) && redireccionar("/app")
      : alert("Email ou senha incorretos");
  };

  return  mostrarCadastro  ? (
    <FormCadastroUsuario setMostrarCadastro= {setMostrarCadastro}/>
  ) : (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="mx-auto " onSubmit={handleSubmit}>
            <Form.Text>Login</Form.Text>
            <Form.Group className="mb-3" controlId="Login.email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Login.senha">
              <Form.Label> Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="light" type="submit">
                Entrar
              </Button>
              <Button variant="light" onClick={() => setMostrarCadastro(true)}>
                Cadastrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormLogin;
