import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const JewelryQuestion = ({question}) => {
  console.log(question)
  return (
    <Container>
      <Row>
        <Col lg="12">
          

          <Accordion defaultActiveKey="0" flush>
          {question.map((item, index)=>{
            
                return(
              <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.dsc}</Accordion.Body>
            </Accordion.Item>
                )
                })}


            

            
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default JewelryQuestion;
