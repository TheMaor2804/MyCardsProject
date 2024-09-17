import { useCallback, useEffect, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useSearchParams } from "react-router-dom";

export default function useCards() {
  const [cards, setCards] = useState();
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState();
  const [searchParams] = useSearchParams();

  const { user } = useCurrentUser();

  const setSnack = useSnack();

  useAxios();

  const API_URL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    if (cards) {
      setFilteredCards(
        cards.filter((card) =>
          card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
    setIsLoading(false);
  }, [cards, query]);

  const getAllCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setCards(response.data);
      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/${id}`
      );
      const data = response.data;
      setCard(data);
      setSnack("success", "Card is here!");
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getMyCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL + "/my-cards");
      const data = response.data;
      setCards(data);
      setSnack("success", "All your cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getFavCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      const favCards = response.data.filter((card) => card.likes.includes(user._id));
      setCards(favCards);
      setSnack("success", "All your favorite cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [user]);

  const createCard = useCallback(async (card) => {
    try {
      const response = await axios.post(API_URL + "/", card);
      const data = response.data;
      setSnack("success", "Card created!");
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleEdit = useCallback(async (id, card) => {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        card
      );
      const data = response.data;
      setSnack("success", "Card updated!");
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleLike = useCallback(async (id) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${id}`);
      const data = response.data;
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleDelete = useCallback(async (id) => {
    try {
      const response = await axios.delete(
        `${API_URL}/${id}`
      );
      const data = response.data;
      setSnack("success", "Card deleted!");
      return data;
    } catch (err) {
      setError(err.message);
    }
  });


  return {
    cards,
    card,
    error,
    isLoading,
    filteredCards,
    setIsLoading,
    getAllCards,
    getCardById,
    getMyCards,
    getFavCards,
    handleDelete,
    handleLike,
    handleEdit,
    createCard,
  };
}
