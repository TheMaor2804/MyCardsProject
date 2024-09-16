import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";


export default function Logged() {

  const { user } = useCurrentUser();

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (user.isBusiness) setUserType("Business");
    else if (user.isAdmin) setUserType("Admin");
    else setUserType("Guest");
  }, [user]);

  return (
    <Tooltip title={"Logged in as " + userType} >
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
        <Avatar alt="avatar" src="/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
}
