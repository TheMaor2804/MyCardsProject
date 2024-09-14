import { Container, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container sx={{ flex: 1, mr: 2 }}>
          <Typography variant="body1" paragraph>
            Welcome to our Business Cards Application! This platform allows users to create, view, and manage business cards with ease. Whether you are a regular user or a business user, our application offers a range of features to enhance your experience.
          </Typography>
          <Typography variant="body1" paragraph>
            As a regular user, you can browse through a variety of business cards, like your favorite ones, and view them in your favorites section. Our search functionality makes it easy to find specific cards based on your interests.
          </Typography>
          <Typography variant="body1" paragraph>
            Business users have additional privileges. You can create your own business cards, manage them, and showcase your business information to other users. This is a great way to promote your business and connect with potential clients.
          </Typography>
          <Typography variant="body1" paragraph>
            Our application supports both dark mode and light mode, allowing you to choose the theme that best suits your preference. The user interface is designed to be intuitive and user-friendly, ensuring a seamless experience.
          </Typography>
          <Typography variant="body1" paragraph>
            We use a robust API to handle all requests to our server, ensuring that your data is securely managed. Whether you are creating a new card, registering as a user, or retrieving data, our API ensures fast and reliable performance.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing our Business Cards Application. We are committed to providing you with the best experience possible. If you have any questions or feedback, please do not hesitate to contact us.
          </Typography>
        </Container>
        <Container sx={{ flex: 1 }}>
          <img
            src="/images/card.png"
            alt="Card"
            style={{ width: "100%", maxWidth: 400 }}
          />
        </Container>
      </Container>
    </Container>
  );
}
