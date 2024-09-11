import React, { useEffect } from 'react'
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import normalizeCard from '../helpers/normalization/normalizeCard';
import { Container } from '@mui/material';
import CardForm from '../components/CardForm';
import useForm from '../../forms/hooks/useForm';
import useCards from '../hooks/useCards';
import { useCurrentUser } from '../../users/providers/UserProvider';

export default function CreateCardPage() {

    const { createCard } = useCards();

    const { user } = useCurrentUser();

    const navigate = useNavigate();

    const { data, errors, onSubmit, handleReset, handleChange, validateForm } = useForm(
        initialCardForm,
        cardSchema,
        () => {
            createCard({
                ...normalizeCard(data),
            });
            navigate(ROUTES.MY_CARDS);
        }
    );

    useEffect(() => {
        if (!user || !user.isBusiness && !user.isAdmin) navigate(ROUTES.CARDS);
    }, [user]);

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
                title="Create a new card"
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
