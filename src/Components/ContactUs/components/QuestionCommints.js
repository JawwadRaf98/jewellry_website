import React from "react";
import { Col, Container, Row, FormCheck } from "react-bootstrap";
import { HiArrowDownTray } from "react-icons/hi2";
const QuestionCommints = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg="6" className="bg-neckles-two">
          <div className="pb-64 pt-3">
            <div className="p-3">
              <h2 className="text-3xl py-4 text-white font-semibold">
                Questions, comments, or
                <br /> concerns?
              </h2>
              <h2 className="text-3xl text-white font-semibold">
                We're here to help contact us
                <br /> today.
              </h2>
              <p className="text-xs text-white py-3">
                At LAVISA Jewelry, we understand the importance of exceptional
                customer service and are wholeheartedly committed to ensuring
                that your experience with us is nothing short of extraordinary.
                <br />
                <br />
                Whether you have a question or simply want to share your
                thoughts with us, we're always here to lend an ear and offer our
                expertise. We believe that every interaction with our valued
                customers is an opportunity to create a lasting connection and
                build a relationship that goes beyond just buying and selling.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div>
            <fieldset>
              <input
                class="form-control"
                type="text"
                name="Fname"
                placeholder="First Name"
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <input
                class="form-control"
                type="text"
                name="LastName"
                placeholder="Last Name"
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="exmple@hello.com"
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <input
                class="form-control"
                type="number"
                name="number"
                placeholder="+123- 34567890"
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <input
                class="form-control"
                type="text"
                name="YourIssue"
                placeholder="Your Issue"
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <textarea
                class="form-control"
                name="decription"
                placeholder="Describe your issue in detail."
                required=""
                style={{ width: "100%" }}
              />
            </fieldset>
            <fieldset>
              <div class="uploaded-field d-flex flex-wrap align-items-center">
                <ul class="list-unstyled upload-file-list d-flex flex-wrap mb-0"></ul>
                <div class="multiple-attach-file mx-auto">
                  <div class="attach-file-input">
                    <input
                      type="file"
                      name="images[]"
                      accept="image/*"
                      class="multiple-file-upload"
                      id="attachFileMultiple"
                      multiple=""
                    />
                  </div>
                  <label
                    for="attachFileMultiple"
                    class="text-nowrap d-flex gap-2 align-items-center py-2"
                  >
                    <HiArrowDownTray /> Upload Additional file
                  </label>
                </div>
              </div>
              <p className="text-xs" style={{ color: "#F0F0F0" }}>
                Attach file. File size of your documents should not exceed 10MB
              </p>
            </fieldset>
            <Row>
              <Col lg="12">
                <div className="p-3">
                  <button className="btnyellow w-full">Submit</button>
                  <div className="pt-3 d-flex gap-3 align-items-cneter text-white text-sm">
                    <FormCheck /> I want to protect my data by signing an NDA
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionCommints;
