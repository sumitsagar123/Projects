import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgimage="model-s.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgimage="model-3.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgimage="model-x.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgimage="model-y.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        bgimage="solar-panel.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        bgimage="solar-roof.jpg"
        leftbtn="Order Now"
        rightbtn="Demo Drive"
      />
      <Section title="Accessories" description="" bgimage="accessories.jpg" />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;
