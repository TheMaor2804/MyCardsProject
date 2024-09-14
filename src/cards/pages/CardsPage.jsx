import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import CreateNewCardButton from "../components/card/CreateNewCardButton";

export default function CardsPage() {
  const { cards, error, isLoading, filteredCards, getAllCards, handleDelete, handleLike, handleEdit } =
    useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={filteredCards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
      <CreateNewCardButton />
    </div>
  );
}
