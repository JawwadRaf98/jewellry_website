import React from 'react'
import MainVideo from './Home/components/MainVideo'
import { Col, Container, Image, Row } from "react-bootstrap";
import useFetch from '../customHooks/useFetch';
import FaqSkeleton from '../website/skeleton/FaqSkeleton';
import InnerPageSkeleton from '../website/skeleton/InnerPageSkeleton';

export default function Delievery() {

  const {data: pageData, loading, error} = useFetch('getInnerPage/delivery')


  if(loading) return  <InnerPageSkeleton />

let {data} = pageData

let heading  = (data.sub_heaing === "" || data.sub_heaing === undefined)  ? "Delivery" : data.sub_heaing ;
let image  = (data.image === "" || data.image === undefined ) ? "" : data.image ;
let subHeading = (data.short_desc === "" || data.short_desc === undefined) ? "" : data.short_desc 
let desc = ( data.desc === "" || data.desc === undefined) ? "" : data.desc 

  return (
    <>
    <div className='innerPage'>
    <MainVideo />
    <Container fluid className="bg">
      <div className="aboutContent">
        <Container>
          <Row className="align-items-center py-28">
            <Col lg="12">
              <div className="p-3 webkit text-white">
             
                <h3 className="text-3xl">{heading}</h3>
                <p className="text-lg" style={{ color: "#C7C7C7" }}   dangerouslySetInnerHTML={{ __html: subHeading }}>
                  {/* Welcome to LAVISA, where we believe that everyone deserves to
                  look and feel their best. */}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
    <Container>
      <Row className="py-5">
        <Col lg={image !== "" ? "8" : "12"}  >
          <div className="p-3" >
          <div className='boxexs' dangerouslySetInnerHTML={{ __html: desc }}></div>

          {/*    <p className="text-sm text-white py-3"   dangerouslySetInnerHTML={{ __html: desc }}>
             Welcome to LAVISA, where we believe that everyone deserves to look
              and feel their best. We are a prestigious jewelry brand recognized
              around the world and are passionate about encouraging people to
              develop their own sense of style and express themselves through
              our stunning high-end jewelry collection.
              <br />
              <br />
              At LAVISA, we believe that fashion should be accessible to
              everyone, no matter what your personal style preferences,
              financial status, or gender. We are offering a wide range of
              unisex jewelry options that are unique, stylish, and unmatched in
              terms of both price and quality.
              <br />
              <br />
              We want you to feel stunning, attractive, and unstoppable in
              everything you wear. Our crystal and non-crystal jewelry selection
              is designed to help you shine and stand out from the crowd,
              whether dressing up for a formal or special occasion or adding
              some extra sparkle to your everyday wear.
              <br />
              <br />
              At LAVISA, we are committed to encouraging our customers to
              develop their own sense of style since we think that fashion is
              about self-expression. We invite you to explore our collection, we
              bring you a wide range of spectacular necklaces, stylish earrings,
              exquisite rings, attractive bracelets, and much more. Don’t be
              late, discover the perfect piece of fashionable jewelry that
              enhances your sense of self-assurance and beauty.
              <br /> 
            </p>*/}
          </div>
        </Col>

        {image !== "" && 
          <Col lg="4">
            <div>
              <Image src={image} />
            </div>
          </Col>
        }

        
      </Row>
    </Container>
    </div>
    </>
  )
}
