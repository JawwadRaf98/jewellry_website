import React from 'react'
import AboutMain from './components/AboutMain'
import AboutusContent from './components/AboutusContent'
import CustomerSatisfaction from './components/CustomerSatisfaction'
import MainVideo from './components/MainVideo'
import OurMission from './components/OurMission'
import WhyChooseLAVISA from './components/WhyChooseLAVISA'
import useFetch from "../../customHooks/useFetch";
import { Col, Container, Image, Row } from "react-bootstrap";

import { BsPieChart } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";


const AboutUs = () => {

  const {data , loading, error} = useFetch('getAboutUs');

  console.log(data)

  return (
    <>
    <MainVideo />
      {/* AboutMain */}
      <Container fluid className="bg">
      <div className="aboutContent">
        <Container>
          <Row className="align-items-center py-28">
            <Col lg="12">
              <div className="p-3 webkit text-white">
                {/* <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                About Us
                </h2> */}
                <h3 className="text-3xl">About Us</h3>
                <p className="text-lg" style={{ color: "#C7C7C7" }}>
                  Welcome to LAVISA, where we believe that everyone deserves to
                  look and feel their best.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>

    <Container>
      <Row className="py-5">
        <Col lg="8" style={{ background: "#1A1A1A" }}>
          <div className="p-3" style={{ background: "#1A1A1A" }}>
            <h2 className="text-3xl text-white font-semibold">About Us</h2>
            <p className="text-sm text-white py-3">
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
            </p>
          </div>
        </Col>
        <Col lg="4">
          <div>
            <Image
              style={{ opacity: "0.8" }}
              src={require("../Assets/aboutimg.png")}
            />
          </div>
        </Col>
      </Row>
    </Container>

    {/* Our Mission */}
    <Container>
      <Row className="py-5">
        <Col lg="4">
          <div>
            <Image src={require("../Assets/ourmission.png")} />
          </div>
        </Col>
        <Col lg="8" className="bg-neckles-one">
          <div className="pb-56 pt-3">
            <div className="p-3">
              <h2 className="text-3xl text-white font-semibold">Our Mission</h2>
              <p className="text-sm text-white py-3">
                At LAVISA, we're more than just a jewelry brand - we're on a
                mission to empower people to express themselves through
                high-end, beautifully crafted jewelry. Our commitment to
                eco-friendly materials, modern designs, and exceptional customer
                service sets us apart from the competition. We're dedicated to
                creating pieces that match your mood and help you showcase your
                unique sense of style. From the moment you choose LAVISA, you'll
                experience the elegance and perfection that defines our brand.
                Join us in our mission to embrace your individuality and
                celebrate the beauty of high-quality, everyday jewelry.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    
    {/* WhyChooseLAVISA */}
    <Container>
      <Row className="py-5">
        <div className="webkit">
          <h2 className="text-2xl text-white">Why Choose LAVISA?</h2>
          <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
            We are committed to providing high-end jewelry that will last long.
            Here are some reasons
            <br /> why people choose LAVISA as their go-to jewelry brand
          </p>
        </div>
      </Row>
      <Row>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <TbBuildingSkyscraper />
              </a>
              <h2 className="text-xl pt-3">Quality</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                At LAVISA, we stand behind our commitment to quality without
                compromise, with every piece of jewelry crafted to exceed your
                expectations. Our dedicated team of artisans inspects each of
                the 1000+ materials used in our designs, to ensure that only the
                highest-quality components are selected.
                <br />
                <br />
                Our quality control process involves over 20 checkpoints,
                guaranteeing that each piece of our designer jewelry collection
                not only looks beautiful but also stands the test of time, with
                an average lifespan of 5+ years.
                <br />
                <br />
                So, when you choose LAVISA, you're not just investing in a piece
                of jewelry, but in a lifetime of confidence and style.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <BsPieChart />
              </a>
              <h2 className="text-xl pt-3">Sustainability</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                We're dedicated to creating jewelry that not only looks good but
                also does well. We believe in sustainability and are committed
                to using ethical sourcing practices in our jewelry-making
                process.
                <br />
                <br />
                By minimizing our impact on the environment, we use recycled and
                eco-friendly packaging materials. We believe that beauty should
                never come at the expense of our planet. That's why we're proud
                to be a sustainable brand that's committed to making a positive
                impact. With LAVISA, you can wear your jewelry with confidence,
                knowing that you're making a responsible choice for yourself and
                for the planet.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <TbBuildingSkyscraper />
              </a>
              <h2 className="text-xl pt-3">Modern Designs</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                Our jewelry is not just beautiful; it's also designed with the
                modern individual in mind. We offer a range of modern designs
                that cater to your personal preferences, so you can find the
                perfect piece to complement any outfit.
                <br />
                <br />
                At LAVISA, we understand the importance of staying ahead of the
                curve, which is why we've invested over $500,000 in research and
                development to bring you the most cutting-edge and distinctive
                designs. So, whether you're looking for a classic piece or a
                modern showstopper, LAVISA has something for everyone.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <BsPieChart />
              </a>
              <h2 className="text-xl pt-3">Unisex Design</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                We believe fashion knows no bounds. That's why we offer a
                diverse selection of unisex jewelry that's both stylish and
                distinctive.
                <br />
                <br />
                From sleek and simple to bold and intricate, our collection has
                something for everyone. Whether you're shopping for yourself or
                looking for the perfect gift, LAVISA has you covered with our
                unisex jewelry solutions.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="py-4">
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <TbBuildingSkyscraper />
              </a>
              <h2 className="text-xl pt-3">Versatility</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                At LAVISA, we know that life is full of memorable moments.
                That's why our versatile jewelry collection is designed to make
                any occasion extraordinary.
                <br />
                <br />
                With styles ranging from delicate to daring, our pieces are
                perfect for any mood or personality.
                <br />
                <br />
                Whether you're getting ready for a big event or simply elevating
                your everyday look, LAVISA has the perfect piece to add some
                extra sparkle to your life.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <BsPieChart />
              </a>
              <h2 className="text-xl pt-3">Gift-Worthy</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                Looking for a gift that truly shines? Look no further than
                LAVISA Jewelry Brand.
                <br />
                <br />
                With affordable prices, quality craftsmanship, and a range of
                styles to choose from, our jewelry is the
                <br />
                <br />
                perfect way to show someone you care. Whether it's for a
                birthday, anniversary, or just because, you can give a gift that
                will be cherished for years to come.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <TbBuildingSkyscraper />
              </a>
              <h2 className="text-xl pt-3">Self-Expression</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                At our core, we believe fashion should be a true reflection of
                who you are. Our jewelry line is meticulously crafted to help
                you confidently and stylishly express your unique personality.
                <br />
                <br />
                So why not take a moment to explore our jewelry collection and
                find a perfect piece that will amplify your self-assurance,
                beauty, and unbreakable spirit?
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <div className="p-3 mt-2 bxxxbx" style={{ background: "#1A1A1A" }}>
            <div className="webkit text-white icon-new">
              <a>
                <BsPieChart />
              </a>
              <h2 className="text-xl pt-3">Quality</h2>
              <p className="text-xs py-3" style={{ color: "#C7C7C7" }}>
                At LAVISA, we stand behind our commitment to quality without
                compromise, with every piece of jewelry crafted to exceed your
                expectations. Our dedicated team of artisans inspects each of
                the 1000+ materials used in our designs, to ensure that only the
                highest-quality components are selected.
                <br />
                <br />
                Our quality control process involves over 20 checkpoints,
                guaranteeing that each piece of our designer jewelry collection
                not only looks beautiful but also stands the test of time, with
                an average lifespan of 5+ years.
                <br />
                <br />
                So, when you choose LAVISA, you're not just investing in a piece
                of jewelry, but in a lifetime of confidence and style.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    {/* Customer satisfaction */}
    <Container>
      <Row className="py-5">
        <div className="webkit">
          <h2 className="text-2xl text-white">Customer Satisfaction</h2>
          <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
            At LAVISA, we take customer satisfaction very seriously. We want you
            to feel confident and happy
            <br /> with your purchase every time you choose to shop with us.
            <br />
            Here's what you can expect when you choose LAVISA for your jewelry
            needs
          </p>
        </div>
      </Row>
      <Row>
        <Col lg="8" className="py-2" style={{ background: "#1A1A1A" }}>
          <div className="p-3 textleft">
            <div className="boxexs">
              <h2 className="text-lg text-white">Easy Returns and Refunds:</h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We understand that sometimes things don't work out, which is why
                we offer a hassle-free returns policy.
                <br />
                If you're not completely satisfied with your purchase, simply
                return it within 1 year for a full refund.
                <br />
                (Note: Please ensure to review our Return and Refund Policy
                prior to making a claim.)
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">
                Excellent Customer Service:
              </h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                Our team provides you with exceptional customer service. Whether
                you have a question about a product,
                <br />
                need help with your order, or want to give us feedback, we're
                always here to help. You can reach us via
                <br />
                email (add email address), or call (add number), and we'll do
                our best to respond promptly and effectively.
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">Secure Shopping:</h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We take the security of your personal information seriously. Our
                website is equipped with the latest security
                <br />
                protocols to ensure that your data is safe and secure when you
                shop with us.
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">
                Secure ShoppingCustomer Reviews:
              </h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We love hearing from our customers! You can visit our official
                Insta and TikTok pages (@ lavisa jewelry) and
                <br />
                read reviews from other LAVISA shoppers to better understand
                what to expect from our jewelry collection.
                <br />
                And if you're happy with your purchase, we'd love it if you left
                us a review too.
              </p>
            </div>
            <div className="py-2">
              <Image
                className="w-8/12"
                src={require("../Assets/gold.png")}
              />
            </div>
          </div>
        </Col>
        <Col lg="4" className="py-2">
          <div>
            <Image
              style={{ opacity: "0.8" }}
              src={require("../Assets/satisfy.png")}
            />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AboutUs
