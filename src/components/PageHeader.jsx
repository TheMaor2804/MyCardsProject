import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../providers/CustomThemeProvider";

export default function PageHeader({ title, subtitle }) {

  const { isDark } = useTheme();

  return (
    <Container>
      <Typography variant="h2" component="h1" style={{ color: isDark ? "#fff" : "#000" }}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" style={{ color: isDark ? "#fff" : "#000" }}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </Container>
  );
}
