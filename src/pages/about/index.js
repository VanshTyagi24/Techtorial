import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import soomin from "../../assets/images/soomin.png"
import vansh from "../../assets/images/Vansh.png"
import rajdeep from "../../assets/images/Rajdeep.png"
import henry from "../../assets/images/Henry.png"
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About Us | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <div class="image-container">
          <img src={soomin} height="200" size="200"></img>
          <img src={rajdeep} height="200" size="200"></img>
          <img src={vansh} height="200" size="200"></img>
        <img src={henry} height="200" size="200"></img>
        
        </div>
        
        <Row className="sec_sp">
         
        </Row>
      </Container>
    </HelmetProvider>
  );
};
