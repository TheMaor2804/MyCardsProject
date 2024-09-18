import React from "react";
import PageHeader from "../components/PageHeader";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="Error 404" subtitle="Page not found" />
      <Container>
        <Typography variant="h5" color={"initial"}>
          The page you are looking for does not exist.
        </Typography>

        <Button onClick={() => navigate(ROUTES.ROOT)}>Click Here To Return To Home Page</Button>
      </Container>
    </>
  );
}
