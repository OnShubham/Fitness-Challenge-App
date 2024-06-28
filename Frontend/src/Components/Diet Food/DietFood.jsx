import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MealCard = ({ image, title, description, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <Card className="meal-card mb-4">
      <Card.Img variant="top" src={image} alt={title} className="meal-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          View Food
        </Button>
      </Card.Body>
    </Card>
  );
};
const SectionHeader = ({ title, subtitle }) => (
  <Row className="my-4">
    <Col>
      <h2 className="text-center">{title}</h2>
      {subtitle && <p className="text-center">{subtitle}</p>}
    </Col>
  </Row>
);

export const DietFood = () => {
  const meals = [
    {
      image: "Veg.webp",
      title: "Veg Meal",
      description:
        "A delicious and nutritious vegetarian meal packed with flavors.",
      url: "/veg-food",
    },
    {
      image: "Non-Veg.webp",
      title: "Non-Veg",
      description:
        "A protein-packed meal to fuel your day with essential nutrients.",
    },
  ];

  const navigate = useNavigate();

  return (
    <Container className="diet-food-container">
      <Row className="intro-section pt-5">
        <Col>
          <h1 className="intro-title text-center">
            Welcome to Your Diet Food Guide!{" "}
          </h1>
          <p className="intro-text text-center">
            We offer a variety of diet options, both vegetarian and
            non-vegetarian. Each meal is accompanied by easy-to-follow recipes
            and detailed nutritional information. Our meal plans are designed to
            help you stay on track with your diet goals. We’re more than just a
            diet platform, we’re a community committed to promoting a healthy
            lifestyle. Start your journey towards a healthier lifestyle with us
            today. Explore our diet options, try our recipes, follow our meal
            plans, and join our community. Here’s to a healthier, happier you!
          </p>
        </Col>
      </Row>

      <SectionHeader title="Vegetarian & Non-Vegetarian" />
      <Row>
        {meals.map((meal, index) => (
          <Col
            md={6}
            className="d-flex mt-5 justify-content-center"
            key={index}
          >
            <MealCard {...meal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
