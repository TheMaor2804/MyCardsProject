import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/CustomThemeProvider";
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddCardIcon from '@mui/icons-material/AddCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from "@mui/icons-material/Add";
import StyleIcon from "@mui/icons-material/Style";
import PortraitIcon from '@mui/icons-material/Portrait';
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";

export default function AboutPage() {

  const { isDark } = useTheme();


  return (
    <Container sx={{ color: isDark ? "#fff" : "#000" }}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Container sx={{ flex: 1, mr: 2 }}>
          <Typography variant="h5" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" paragraph>
            This is a simple application that allows you to create, edit, delete, and view cards. You can also add cards to your favorites and view them later. You can also register and log in to the application to save your cards and view them later. The application also allows you to switch between light and dark themes. The application is built using React, Material-UI, and React Router. The application is responsive and works on mobile devices as well as desktops.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Navigation
          </Typography>
          <Typography variant="body1" paragraph>
            You can navigate to different pages using the navigation bar at the
            top or bottom of the page. The navigation bar contains the following links:
          </Typography>
          <Typography variant="h6" gutterBottom>
            <StyleIcon /> Cards
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link or icon will take you to the home page. <br />
            Here, you can find various business cards.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <InfoIcon /> About
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link or icon will take you to the about page.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <FavoriteIcon /> My Favorites
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link or icon will take you to the favorite cards page. <br />
            You must be logged in to access this feature.
            You can mark cards as favorites for quick access. To do this,
            click the <FavoriteIcon /> on the card.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <PortraitIcon /> My Cards
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link or icon will take you to the my cards page. <br />
            Here, you can view all the cards you have created if you are a business user.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <SearchIcon /> Search
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this icon will search for cards whose title includes the characters you enter in the search bar. <br />
            Here, you can search for specific cards by entering keywords into the search bar.
            The search functionality allows you to quickly find cards that match your criteria. It is only available on pages that display cards.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <AddIcon /> Add Card
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this icon will take you to the add card page. <br />
            To add a new card, navigate to any of the Cards pages and click on the
            blue "+" button. This will open a form where you can enter
            the details of the new card you are interested in creating. Once
            you have filled out the form, click "Submit" to add the card to
            your collection.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <EditIcon /> Edit Card
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this icon will take you to the edit card page. <br />
            To edit an existing card, go to any of the Cards pages in the navigation
            bar and locate the card you want to edit. Remember, you may only
            edit cards that only you have created. Click on the "Edit" button
            associated with that card. This will open a form pre-filled with
            the card's current details. Make the necessary changes and click
            "Save" to update the card.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <DeleteIcon /> Delete Card
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this icon will take you to the delete card page. <br />
            If you need to delete a card, find the card on any of the Cards pages and
            click the "Delete" button. You will be prompted to confirm the
            deletion. Once confirmed, that card will be permanently removed
            from your collection and the database.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <AppRegistrationIcon /> Register
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link will take you to the registration page. <br />
            Once you have registered and become an active user on the site,
            you will be able to access other features like adding cards,
            editing cards, deleting cards, and marking cards as favorites. It
            is important you sign up as a Business user, in order to access
            these features.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <LoginIcon /> Login
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link will take you to the login page. <br />
            To access certain features like managing favorites or your cards,
            you need to be logged in. Use the login form to enter your
            credentials.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <LogoutIcon /> Logout
          </Typography>
          <Typography variant="body1" paragraph>
            Clicking this link will log you out of the application.
          </Typography>
          <Divider />
          <Typography variant="h5" gutterBottom>
            Theme
          </Typography>
          <Typography variant="body1" paragraph>
            You can switch between light and dark themes by clicking on the
            theme switch in the navigation bar.
          </Typography>
          <Divider />

        </Container>
        <Container sx={{ flex: 1 }}>
          <img
            src="/images/card.png"
            alt="Card"
            style={{ width: "100%", maxWidth: 400 }}
          />
        </Container>
      </Container>
    </Container>
  );
}
