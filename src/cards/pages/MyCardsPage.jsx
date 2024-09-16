import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import CreateNewCardButton from "../components/card/CreateNewCardButton";

export default function MyCardsPage() {

  const { error, isLoading, filteredCards, getMyCards, handleDelete, handleLike, handleEdit } = useCards();

  const { user } = useCurrentUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user && (user.isBusiness || user.isAdmin)) {
      getMyCards();
    }
    else navigate(ROUTES.CARDS);
  }, [user]);


  const onDelete = useCallback(async (id) => {
    handleDelete(id);
    getMyCards();
  }, [handleDelete, getMyCards]);

  return (
    <div>
      <PageHeader title={"My cards"} subtitle={"Welcome to my cards page"} />
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
