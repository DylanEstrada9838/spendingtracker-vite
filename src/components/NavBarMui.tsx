import * as React from "react";
import {MenuItem,Tooltip,AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from '@mui/icons-material/AccountCircle';
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";
import logout from "../functions/logout";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import OrangeTheme from "../themes/OrangeTheme";
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AddCardIcon from '@mui/icons-material/AddCard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const links = ["expense", "category", "method","dashboard"];
const pages = ["Expenses", "Categories", "Methods","Dashboard"];
const icons = [<LocalAtmIcon sx={{fontSize: 30}}/>,<CategoryIcon sx={{fontSize: 30}}/>,<AddCardIcon sx={{fontSize: 30}}/>,<BarChartIcon sx={{fontSize: 30}}/>]
const settings = ["Account", "Logout"];

function ResponsiveAppBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    // Call the logout function when the user logs out
    logout();

    navigate("/");
    location.reload();
  };

  return (
   <ThemeProvider theme={OrangeTheme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Link to="/home">
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
              ExpenseTracker < QueryStatsIcon sx={{fontSize:30, display: { xs: "none", md: "flex" }, mr: 1 }} />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${links[index]}`}>
                  
                    <Typography
                      style={{ color: "black" }}
                      textAlign="center"
                      className="nav-expanded"
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page,index) => (
              
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "flex", alignItems:"center",justifyContent:"center",gap:"2em"}}
                
              >
                <Link
                  style={{ color: "white" }}
                  to={`/${links[index]}`}
                >
                 
                   {icons[index]} {page}
                
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle fontSize="large" color="info"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) =>
                setting === "Logout" ? (
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center" className="nav">
                      {setting}
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" className="nav">
                      {setting}
                    </Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
