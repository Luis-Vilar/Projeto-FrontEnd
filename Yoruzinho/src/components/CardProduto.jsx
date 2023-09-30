import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import ModalProduto from "./ModalProduto";
import medicamento_imagem from "../assets/medicamento_imagem.jpg";

const CardProduto = ({
  medicamento,
  laboratorio,
  dosagem,
  valorUnitario,
  tipo,
  descricao = "",
  imagem,
}) => {
  const produto = {
    medicamento: medicamento,
    laboratorio: laboratorio,
    dosagem: dosagem,
    valorUnitario: valorUnitario,
    tipo: tipo,
    descricao: descricao,
  };
  return (
    <>
      <Card as={Col} md="3">
        <Card.Img variant="top" src={medicamento_imagem} />
        <Card.Body>
          <Card.Title>{`${produto.medicamento} ${produto.dosagem} ${produto.laboratorio}`}</Card.Title>
        </Card.Body>
        <Row>
    
          <Button variant="ligth" size="sm" disabled>
            Valor Unitario R$ {produto.valorUnitario}
          </Button>
          <ModalProduto
            as={Col}
            descricao={produto.descricao}
            medicamento={produto.medicamento}
            dosagem={produto.dosagem}
            laboratorio={produto.laboratorio}
            valorUnitario={produto.valorUnitario}
            tipo={produto.tipo}
            imagem={medicamento_imagem}
          />
        </Row>
      </Card>
    </>
  );
};

export default CardProduto;
