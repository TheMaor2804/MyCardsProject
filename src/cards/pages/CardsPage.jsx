import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import CreateNewCardButton from "../components/card/CreateNewCardButton";

export default function CardsPage() {
  const { error, isLoading, filteredCards, getAllCards, handleDelete, handleLike, handleEdit } =
    useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  const onDelete = useCallback(async (id) => {
    await handleDelete(id);
    getAllCards();
  }, [handleDelete, getAllCards]);

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
        handleDelete={onDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
      <CreateNewCardButton />
    </div>
  );
}
