import React from "react";
import CardProduto from "../components/CardProduto";
import { Row, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect } from "react";
import { useContexto } from "../context/useContexto";

const ListaProdutos = () => {
  const {
    produtos,
    produtoBuscados,
    handleSubmitBuscarProduto,
    getProdutos,
    setProdutoBuscados,
  } = useContexto();
  const imagemMedicamento =
  "https://img.freepik.com/free-photo/first-medical-aid-symbol-form-jar-with-cross-generative-ai_169016-29777.jpg?w=900&t=st=1681784879~exp=1681785479~hmac=a6c5d4e3a67c4e2ed9357fbec7ccd4ca8d0fbaa343471047d417b509994ec140";
  useEffect(() => {
    /*quando monta o componente, 
    carrega os produtos e limpa
    o array de produtos buscados*/
    getProdutos();
    setProdutoBuscados([]);
  }, []);

  return (
    <Container>
      <h1>Buscar Medicamento</h1>
      <Form onSubmit={handleSubmitBuscarProduto}>
        <Row>
          <InputGroup className="mb-3">
            <Form.Control
              id="medicamentoBuscado"
              placeholder="Nome do Medicamento"
              aria-label="Nome do Medicamento"
              required
            />
            <Button variant="outline-secondary" id="btnBuscar" type="submit">
              Buscar
            </Button>
          </InputGroup>
        </Row>
      </Form>
      <Row>
        {/*renderizado condicional caso o array produtosBuscados tenha pelo menos um produto */}
        {produtoBuscados.length > 0 && <h1>Produtos Encontrados</h1>}
        {produtoBuscados.map((produto) => (
          <CardProduto
          key={produto.nome_medicamento + produto.dosagem + produto.nome_laboratorio}
          medicamento={produto.nome_medicamento}
          dosagem={produto.dosagem}
          laboratorio={produto.nome_laboratorio}
          valorUnitario={produto.preco_unitario}
          tipo={produto.tipo}
          descricao={produto.descricao}
          imagem={imagemMedicamento}
          />
        ))}
      </Row>
      <Row>
        <h1>Lista de todos os Produtos</h1>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.nome_medicamento + produto.dosagem + produto.nome_laboratorio}
            medicamento={produto.nome_medicamento}
            dosagem={produto.dosagem}
            laboratorio={produto.nome_laboratorio}
            valorUnitario={produto.preco_unitario}
            tipo={produto.tipo}
            descricao={produto.descricao}
            imagem={imagemMedicamento}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ListaProdutos;
