import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Veg } from "../../Data/Meals";

const MealCard = ({ image, title, description }) => (
  <Card className="meal-card-veg mb-4">
    <Card.Img variant="top" src={image} alt={title} className="meal-image" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      {/* <Button variant="primary">View Recipe</Button> */}
    </Card.Body>
  </Card>
);

const SectionHeader = ({ title, subtitle }) => (
  <Row className="my-4">
    <Col>
      <h2 className="text-center Text intro-title">{title}</h2>
      <hr />
      {subtitle && <p className="text-center">{subtitle}</p>}
    </Col>
  </Row>
);

export const VegFood = () => {
  return (
    <Container className="diet-food-container">
  

      <SectionHeader  title="Vegetarian Food" />
      <Row>
        {Veg.map((meal, index) => (
          <Col md={4} className="d-flex justify-content-center" key={index}>
            <MealCard {...meal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
