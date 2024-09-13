import React, { useEffect } from 'react'
import { useCurrentUser } from '../../users/providers/UserProvider';
import useCards from '../hooks/useCards';
import { useNavigate, useParams } from 'react-router-dom';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import mapCardToModel from '../helpers/normalization/mapCardToModel';
import useForm from '../../forms/hooks/useForm';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import ROUTES from '../../routes/routesModel';
import CardForm from '../components/CardForm';
import { Container } from '@mui/material';
import normalizeCard from '../helpers/normalization/normalizeCard';

export default function EditCardPage() {

    const { handleEdit, getCardById, card, isLoading, error } = useCards();

    const { user } = useCurrentUser();
    const { id } = useParams();

    const navigate = useNavigate();

    const { data, setData, errors, onSubmit, handleChange, handleReset, validateForm } = useForm(
        initialCardForm,
        cardSchema,
        async () => {
            await handleEdit(id, {
                ...normalizeCard(data),
                bizNumber: card.bizNumber,
                user_id: card.user_id,
            });
            navigate(ROUTES.MY_CARDS);
        });



    useEffect(() => {
        getCardById(id).then((data) => {
            if (user && (user.isBusiness && user._id === data.user_id || user.isAdmin)) {
                const modelCard = mapCardToModel(data);
                setData(modelCard);
            } else {
                navigate(ROUTES.ROOT);
            }
        });
    }, [getCardById, setData, id]);



    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;



    /*  useEffect(() => {
 if (user && (user.isBusiness && user._id === card.user_id || user.isAdmin)) {
             const modelCard = mapCardToModel(card);
             setData(modelCard);
             console.log(data);
         } else {
             navigate(ROUTES.CARDS);
         }
         
     }, []); */





    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                title="Edit Card"
                onSubmit={onSubmit}
                onReset={handleReset}
                errors={errors}
                data={data}
                onInputChange={handleChange}
                validateForm={validateForm}
            />
        </Container>
    )
}
