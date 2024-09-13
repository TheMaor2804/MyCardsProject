import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  cardId,
  cardUserId,
  likes,
  handleDelete,
  handleLike,
}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialog = (term) => {
    if (term === "open") return setIsDialogOpen(true);
    setIsDialogOpen(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    handleDelete(cardId);
  }

  const { user } = useCurrentUser();

  const [isLiked, setIsLiked] = useState(user ? likes.includes(user._id) : false);

  const navigate = useNavigate();

  return (
    <>
      <CardActions sx={{ justifyContent: "space-between", marginTop: "auto" }}>
        {user && ((user.isBusiness && user._id === cardUserId) || user.isAdmin) ?
          <Box>
            <IconButton onClick={() => handleDialog("open")}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => navigate(ROUTES.EDIT_CARD + "/" + cardId)}>
              <ModeEditIcon />
            </IconButton>
          </Box>
          :
          <Box />
        }

        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>
          {user ? <IconButton onClick={() => {
            handleLike(cardId);
            setIsLiked((prev) => !prev);
          }}>
            <FavoriteIcon sx={{ color: isLiked ? "red" : null }} />
          </IconButton>
            : null}
        </Box>

      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onDelete={handleDeleteCard}
        onChangeDialog={() => handleDialog()}
      />
    </>

  );
}
