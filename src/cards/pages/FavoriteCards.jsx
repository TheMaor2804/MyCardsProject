import React, { useEffect } from "react";
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

  const { cards, error, isLoading, getFavCards, handleDelete, handleLike, handleEdit } = useCards();

  const { user } = useCurrentUser();

  const navigate = useNavigate();

  if (!user) {
    navigate(ROUTES.ROOT);
  }

  useEffect(() => {
    getFavCards();
  }, [getFavCards]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <>
      <PageHeader
        title={"Favorite cards"}
        subtitle={"Welcome to favorite cards page"}
      />
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
