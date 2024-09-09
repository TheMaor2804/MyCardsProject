import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();

  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      let response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      setCards(response.data);
      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getMyCards = useCallback(async () => {
    try {
      const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards");
      const data = response.data;
      setCards(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const createCard = useCallback(async (card) => {
    try {
      const response = await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards", card);
      const data = response.data;
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleEdit = useCallback(async (id, card) => {
    try {
      const response = await axios.put(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`,
        card
      );
      const data = response.data;
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleLike = useCallback(async (id) => {
    try {
      const response = await axios.patch(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`);
      const data = response.data;
      return data;
    } catch (err) {
      setError(err.message);
    }
  });

  const handleDelete = useCallback(async (id) => {
    try {
      const response = await axios.delete(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
      );
      const data = response.data;
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
    getAllCards,
    getCardById,
    getMyCards,
    handleDelete,
    handleLike,
    handleEdit,
    createCard,
  };
}
