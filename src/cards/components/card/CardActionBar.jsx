import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
  cardId,
  cardUserId,
  likes,
  handleDelete,
  handleEdit,
  handleLike,

}) {
  const { user } = useCurrentUser();

  const [isLiked, setIsLiked] = useState(user ? likes.includes(user._id) : false);

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      {user && user.isBusiness && user._id === cardUserId ?
        <Box>
          <IconButton onClick={() => handleDelete(cardId)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleEdit(cardId)}>
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
  );
}
