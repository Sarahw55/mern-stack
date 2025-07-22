import React from 'react'
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="home-hero text-white d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <h1 className="display-4 fw-bolf">Welcome to ProdManger</h1>
                    <p className="lead">
                        Effortlessly mangae your products with our all-in-one tool.
                    </p>
                    <Link to="products">
                    <Button variant="light" size="lg" className="mt-3">Explore Products</Button>
                    </Link>
                    </Col>
                    <Col md={6}>
                    <img
                        src="//add photo"
                        alt="Product photo"
                        className='img-fluid mt-4 mt-md-0'
                /></Col>
            </Row>
            </Container>
        </div>
    );};
export default Hero