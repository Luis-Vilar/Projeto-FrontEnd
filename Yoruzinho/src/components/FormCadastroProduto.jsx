import React, { useRef, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useContexto } from "../context/useContexto";
import { SCContainerForm } from "../styles/styles";
const FormCadastroProduto = () => {
  const formCadPrdRef = useRef(null);
  const { handleSubmitProduto, validated, handleLimpar, setValidated } =
    useContexto();

  useEffect(() => {
    setValidated(false);
  }, []);

  return (
    <SCContainerForm>
      <Form
        ref={formCadPrdRef}
        noValidate
        validated={validated}
        onSubmit={handleSubmitProduto}
      >
        <div className="d-flex justify-content-center">
          <h3>Cadastro de Medicamento</h3>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="medicamento">
            <Form.Label>Medicamento</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome do Medicamento"
            />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor preencha este campo com nome do medicamento.
            </Form.Control.Feedback>{" "}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="laboratorio">
            <Form.Label>Laboratório</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome do laboratório"
            />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor preencha este campo com nome do Laboratório.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="dosagem">
            <Form.Label>Dosagem</Form.Label>
            <Form.Control required type="text" placeholder="Dosagem" />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor preencha este campo com a Dosagem.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="unidade_dosagem">
            <Form.Label>Unidade Dosagem</Form.Label>
            <Form.Select required>
              <option value="">Selecione</option>
              <option value="mg">mg</option>
              <option value="mcg">mcg</option>
              <option value="g">g</option>
              <option value="mL">mL</option>
              <option value="%">%</option>
              <option value="Outro">Outro</option>
            </Form.Select>
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor selecione o tipo de dossagem.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="3" controlId="tipo">
            <Form.Label>Tipo de Medicamento</Form.Label>
            <Form.Select required>
              <option value="">Selecione</option>
              <option value="Controlado">
                Controlado
              </option>
              <option value="Não Controlado"> Não Controlado</option>
            </Form.Select>
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor selecione o tipo de medicamento.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="valorUnitario">
            <Form.Label>Valor Unitário</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Valor Unitário"
              step="0.01"
            />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor preencha este campo com o Valor Unitário.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="descricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" placeholder="Descrição"  rows={8}/>
            <Form.Control.Feedback>Opcional</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="d-flex justify-content-end">
          <Button
            onClick={(e) => handleLimpar(e, formCadPrdRef)}
            className="m-0"
            variant="outline-secondary"
            type="button"
          >
            Limpar
          </Button>
          <Button className="m-0" variant="outline-success" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </SCContainerForm>
  );
};
export default FormCadastroProduto;
