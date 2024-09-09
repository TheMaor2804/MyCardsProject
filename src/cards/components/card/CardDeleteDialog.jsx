import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

export default function CardDeleteDialog({ isDialogOpen, onDelete, onChangeDialog }) {
    return (
        <Dialog
            open={isDialogOpen}
            onClose={onChangeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs">
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete card?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action will delete the card and all its data from the database and cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onChangeDialog} color="error">
                    Cancel
                </Button>
                <Button onClick={onDelete} color="info" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
};
