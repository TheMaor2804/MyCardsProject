import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import ROUTES from "../../routes/routesModel";
import CardsFeedback from "../components/CardsFeedback";
import CreateNewCardButton from "../components/card/CreateNewCardButton";

export default function FavoriteCards() {

  const { error, isLoading, filteredCards, getFavCards, handleDelete, handleLike, handleEdit } = useCards();

  const { user } = useCurrentUser();

  const navigate = useNavigate();

  if (!user) {
    navigate(ROUTES.ROOT);
  }

  useEffect(() => {
    getFavCards();
  }, [getFavCards]);

  const onDelete = useCallback(async (id) => {
    await handleDelete(id);
    getFavCards();
  }, [handleDelete, getFavCards]);


  return (
    <>
      <PageHeader
        title={"Favorite cards"}
        subtitle={"Welcome to favorite cards page"}
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
    </>
  );
}
