import React from 'react'
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';

export default function CreateCardPage() {

    const { handleCreateCard } = useCards();

    const { user } = useCurrentUser();

    const { setData, data, errors, handleSubmit } = useForm({
        initialCardForm,
        cardSchema,
    });
    return (
        <div></div>
    )
}
