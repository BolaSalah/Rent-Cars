import React from "react";

import HeroSlider from "../components/partOfPage/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/partOfPage/AboutSection";
import carData from "../assets/data/carData";
import CarItem from "../components/partOfPage/CarItem";
import Testimonial from "../components/partOfPage/Testimonial";

const Home = () => {
  return (
    <Helmet title="Home">

      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      {/* =========== about section ================ */ }
      <section>
        <AboutSection />
      </section>

      {/* =========== offer section ================ */ }
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 3).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== test section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Home;