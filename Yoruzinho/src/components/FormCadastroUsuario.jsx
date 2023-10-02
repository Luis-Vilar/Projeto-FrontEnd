import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormCadastroUsuario = (props) => {
  const voltar = () => {
    props.setMostrarCadastro(false);
  };

  const cadastrUsuarioApi = async (
    nome,
    sobrenome,
    data_nascimento,
    cpf,
    email,
    senha,
    telefone,
    genero
  ) => {
    try {
      const response = await axios.post(
        "https://enthusiastic-rose-whale.cyclic.app/api/usuarios/",
        {
          nome,
          sobrenome,
          genero,
          data_nascimento,
          cpf,
          telefone,
          email,
          senha,
        }
      );
      if (response.status === 201) {
        alert("Usuario cadastrado com sucesso, faça login para continuar..");
        redireccionar("/");
      } else {
        alert("Não foi possivel cadastrar o usuario : " + response);
      }
    } catch (error) {
      alert("Não foi possivel cadastrar o usuario");
      redireccionar("/app");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = event.target.elements["Cadastro.nome"].value;
    const sobrenome = event.target.elements["Cadastro.sobrenome"].value;
    const data_nascimento =
      event.target.elements["Cadastro.data_nascimento"].value;
    const cpf = event.target.elements["Cadastro.cpf"].value;
    const email = event.target.elements["Cadastro.email"].value;
    const senha = event.target.elements["Cadastro.senha"].value;
    const telefone = event.target.elements["Cadastro.telefone"].value;
    const genero = event.target.elements["Cadastro.genero"].value;
    cadastrUsuarioApi(
      nome,
      sobrenome,
      data_nascimento,
      cpf,
      email,
      senha,
      telefone,
      genero
    );
  };
  const redireccionar = useNavigate();

  return (
    <Container className="mx-auto">
      <Form className="mx-auto " onSubmit={handleSubmit}>
        <Row>
          {" "}
          <Form.Text>Cadastro de novo Usuario</Form.Text>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="Cadastro.nome">
              <Form.Label>Nome </Form.Label>
              <Form.Control type="text" placeholder="Nome" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.sobrenome">
              <Form.Label>Sobrenome </Form.Label>
              <Form.Control type="text" placeholder="Sobrenome" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.data_nascimento">
              <Form.Label>Data de Nascimento </Form.Label>
              <Form.Control
                type="date"
                placeholder="Data de Nascimento"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.cpf">
              <Form.Label>CPF </Form.Label>
              <Form.Control type="text" placeholder="CPF" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="Cadastro.email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.senha">
              <Form.Label> Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.telefone">
              <Form.Label>Telefone </Form.Label>
              <Form.Control type="text" placeholder="Telefone" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Cadastro.genero">
              <Form.Label>Genero </Form.Label>
              <Form.Control type="text" placeholder="Genero" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end gap-1 " >
       
          <Button variant="secondary" onClick={voltar}>
            Voltar
          </Button>
          <Button variant="dark" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default FormCadastroUsuario;
