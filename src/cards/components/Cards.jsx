import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";

export default function Cards({ cards, handleDelete, handleLike, handleEdit }) {
  return (
    <Container maxWidth={"xl"} sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleEdit={handleEdit}
        />
      ))}
    </Container>
  );
}
