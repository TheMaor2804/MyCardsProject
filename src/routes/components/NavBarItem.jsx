import React from "react";
import NavBarLink from "./NavBarLink";
import { Button, Typography } from "@mui/material";

export default function NavBarItem({ to, sx, label, onClick }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit" onClick={() => onClick()}>
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}
