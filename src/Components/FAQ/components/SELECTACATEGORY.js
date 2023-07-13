import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JewelryQuestion from "./Categories/JewelryQuestion";
import Questions from "./Questions";
import useFetch from "../../../customHooks/useFetch";
import FaqSkeleton from "../../../website/skeleton/FaqSkeleton";
const SELECTACATEGORY = () => {

  const{data: Faq, loading, error} =useFetch('getFaq');

  if(loading) return <FaqSkeleton />
  const faqTitle = Object.keys(Faq)
  console.log(faqTitle)
  return (
    <Container>
      <Row className="py-4 bbnn">
        <div className="text-left py-3">
          <h2 className="text-2xl text-white">SELECT A CATEGORY</h2>
        </div>
        <Tabs>
          <Col lg="12">
            <TabList>
              {
                faqTitle.map( (item,index)=>{
                  return(
                    <Tab>{item.trim()}</Tab>
                  )
                 })
              }
            </TabList>
          </Col>

          <Col lg="12">
              {
                faqTitle.map( (item,index)=>{

                  const data = Faq[item]
                  console.log(item , data)
                return(
                  <TabPanel>
                    <div>
                      <Questions />
                      <JewelryQuestion  question={data}/>
                    </div>
                  </TabPanel>
                  )
                 })
              }



            
            
          </Col>
        </Tabs>
      </Row>
    </Container>
  );
};

export default SELECTACATEGORY;
