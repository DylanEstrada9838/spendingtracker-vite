import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";
import OrangeTheme from "../themes/OrangeTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, IconButton, MenuItem, Tooltip, Button } from "@mui/material";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
function ResponsiveAppBarOut() {
  return (
    <ThemeProvider theme={OrangeTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-between"}}>
            
            <Link to="/">
              < div style={{display:"flex",alignItems:"center"}}>
                
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
                  ExpenseTracker  <QueryStatsIcon sx={{ fontSize: 30,display: { xs: "none", md: "flex" }, ml: 1 }} />
                </Typography>
              </ div >
            </Link>
            <Box sx={{ flexGrow: 0}}>
              <div style={{ display: "flex", gap: "1em" }}>
                <Link to={`/sign-in`}>
                  <Button variant="contained" color="info">
                    Sign-In
                  </Button>
                </Link>
                <Link to={`/sign-up`}>
                  <Button variant="contained" color="info">
                    Sign-Up
                  </Button>
                </Link>
              </div>
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBarOut;
