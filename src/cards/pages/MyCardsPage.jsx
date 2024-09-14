import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import CreateNewCardButton from "../components/card/CreateNewCardButton";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

export default function MyCardsPage() {

  const { cards, error, isLoading, filteredCards, getMyCards, handleDelete, handleLike, handleEdit } = useCards();

  const { user } = useCurrentUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user && (user.isBusiness || user.isAdmin)) {
      getMyCards();
    }
    else navigate(ROUTES.CARDS);
  }, [user]);


  const onDelete = (id) => {
    handleDelete(id);
    getMyCards();
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <>
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
    </>
  );
}
