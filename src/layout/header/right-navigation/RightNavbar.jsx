import { useTheme } from "../../../providers/CustomThemeProvider";
import { Box, IconButton } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import NavBarItem from "../../../routes/components/NavBarItem";
import ROUTES from "../../../routes/routesModel";
import useUsers from "../../../users/hooks/useUsers";
import SearchBar from "./SearchBar";

export default function RightNavbar() {
  const { user } = useCurrentUser();
  const { handleLogout } = useUsers();
  const { isDark, toggleDarkMode } = useTheme();



  return (
    <Box
      sx={{
        display: { xs: "none", md: "inline-flex" },
        alignItems: "center",
      }}
    >
      <SearchBar />

      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {user ?
        <>
          <Logged />
          <NavBarItem
            to={ROUTES.CARDS}
            label={"Logout"}
            onClick={handleLogout}
          />
        </>
        : <NotLogged />}
    </Box>
  );
}
