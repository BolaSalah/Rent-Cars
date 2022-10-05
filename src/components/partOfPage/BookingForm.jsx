import React from "react";
import "../../styles/booking-form.css";
import { Form,Container, Row, Col, FormGroup } from "reactstrap";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
    <Row>
        <Col lg="6" md="6" sm="12">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
              </div>
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="time" id="timepickerOne"/>
            </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" id="timepickerTwo" />
      </FormGroup>
            
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="time" id="timepickerThree" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" id="timepickerFour"></input>
      </FormGroup>
      </Form>
        </Col>
        
        <Col lg="6" md="6" sm="12">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
              </div>
      <div className="payment">
        <label id="bank" className="d-flex align-items-center gap-2">
          <input type="radio" htmlFor="bank" name="one"/> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label id="cheque" className="d-flex align-items-center gap-2">
          <input type="radio" htmlFor="cheque" name="one" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label id="master" className="d-flex align-items-center gap-2">
          <input type="radio" htmlFor="master" name="one" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label id="paypal" className="d-flex align-items-center gap-2">
          <input type="radio" htmlFor="paypal" name="one" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5 d-flex align-items-center justify-content-center ">
        <button>Reserve Now</button>
      </div>
      </Col>
    </Row>
    </Container>
  );
};

export default BookingForm;
