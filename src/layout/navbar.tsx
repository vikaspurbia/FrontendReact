import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

const ProductNavbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect if screen is smaller than 'md' breakpoint
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch({ type: 'auth/logout' });
    // Redirect to the login page after logging out
    navigate('/login'); // Change '/login' to your actual login route
  };

  return (
    <AppBar
      position="static"
      sx={{ background: 'linear-gradient(to right, #2196F3, #1976D2)', boxShadow: 3 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Product Store
        </Typography>

        {/* Mobile View: Show Menu Icon */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              {/* Add Home, About, Contact along with Products, Categories, Cart */}
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/home">
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/about">
                About
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/contact">
                Contact
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/products">
                Products
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/categories">
                Categories
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/cart">
                Cart
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Desktop View: Show Full Button Navigation
          <div>
            {/* Home, About, Contact buttons */}
            <Button
              component={NavLink}
              to="/home"
              sx={{
                color: 'white',
                backgroundColor: '#1E88E5',
                '&:hover': { backgroundColor: '#1565C0' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
                '&.active': { backgroundColor: '#0D47A1' }, // Active link styling
              }}
            >
              Home
            </Button>

            {/* Existing Products, Categories, Cart buttons */}
            <Button
              component={NavLink}
              to="/products"
              sx={{
                color: 'white',
                backgroundColor: '#1E88E5',
                '&:hover': { backgroundColor: '#1565C0' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
                '&.active': { backgroundColor: '#0D47A1' }, // Active link styling
              }}
            >
              Products
            </Button>

            <Button
              component={NavLink}
              to="/cart"
              sx={{
                color: 'white',
                backgroundColor: '#1E88E5',
                '&:hover': { backgroundColor: '#1565C0' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
                '&.active': { backgroundColor: '#0D47A1' }, // Active link styling
              }}
            >
              Cart
            </Button>

            <Button
              component={NavLink}
              to="/about"
              sx={{
                color: 'white',
                backgroundColor: '#1E88E5',
                '&:hover': { backgroundColor: '#1565C0' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
                '&.active': { backgroundColor: '#0D47A1' }, // Active link styling
              }}
            >
              About
            </Button>

            <Button
              component={NavLink}
              to="/contact"
              sx={{
                color: 'white',
                backgroundColor: '#1E88E5',
                '&:hover': { backgroundColor: '#1565C0' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
                '&.active': { backgroundColor: '#0D47A1' }, // Active link styling
              }}
            >
              Contact
            </Button>

            {/* Logout button */}
            <Button
              onClick={handleLogout}
              sx={{
                color: 'white',
                backgroundColor: '#D32F2F',
                '&:hover': { backgroundColor: '#C62828' },
                marginX: 1,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 2,
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ProductNavbar;
