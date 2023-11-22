import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";
import OrangeTheme from "../themes/OrangeTheme";
import { ThemeProvider } from '@mui/material/styles';

function ResponsiveAppBarOut() {
  return (
    <ThemeProvider theme={OrangeTheme}>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PaymentsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ExpenseTracker
            </Typography>
          </Link>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ExpenseTracker
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    
  );
}
export default ResponsiveAppBarOut;
