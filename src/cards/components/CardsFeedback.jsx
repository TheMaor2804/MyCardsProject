import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Container, Typography } from "@mui/material";
import Cards from "./Cards";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLike,
  handleEdit
}) {

  const { isDark } = useTheme();

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0)
    return (
      <Container>
        <Typography color={isDark ? "#fff" : "#000"}>
          Oops... it seems there are no business cards to display
        </Typography>
      </Container>
    );

  if (cards)
    return (
      <Cards
        cards={cards}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
    );

  return null;
}
