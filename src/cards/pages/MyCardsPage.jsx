import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import CreateNewCardButton from "../components/card/CreateNewCardButton";

export default function MyCardsPage() {

  const { cards, error, isLoading, getMyCards, handleDelete, handleLike, handleEdit } = useCards();

  const { user } = useCurrentUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isBusiness || user.isAdmin) navigate(ROUTES.CARDS);
    else getMyCards();
  }, [user]);


  return (
    <>
      <PageHeader title={"My cards"} subtitle={"Welcome to my cards page"} />
      <CardsFeedback
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
      <CreateNewCardButton />
    </>
  );
}
