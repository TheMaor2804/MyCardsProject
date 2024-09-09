import React from "react";
import PageHeader from "../../components/PageHeader";

export default function MyCardsPage() {

  const { cards, error, isLoading, getMyCards, handleDelete, handleLike, handleEdit } = useCards();


  return (
    <>
      <PageHeader title={"My cards"} subtitle={"Welcome to may cards page"} />
      Here you will find the cards you created
    </>
  );
}
