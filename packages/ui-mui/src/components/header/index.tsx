// @ts-nocheck
import React, { ReactNode, useState, MouseEvent } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Popover,
  ListItemIcon,
  Drawer,
} from '@mui/material';
import { Menu as MenuIcon, ExpandMore, ExpandLess } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
/**
 * Navbar component for displaying application logo, name, menu items, and user controls.
 *
 * @component
 *
 * @example
 * const appInfo = {
 *   logo: <Logo />,
 *   name: "My App",
 *   subLine: "Best App Ever"
 * };
 *
 * const menuItems = [
 *   {
 *     url: "#",
 *     label: "Home",
 *     child: [{ url: "#", label: "Submenu 1" }]
 *   }
 * ];
 *
 * const UserControls = <UserAvatar />;
 *
 * <Navbar appInfo={appInfo} menuItems={menuItems} UserControls={UserControls} />;
 *
 * @param {Object} appInfo - Contains the logo, name, and subtitle of the application.
 * @param {Array} menuItems - A list of menu items. Each item may contain child items.
 * @param {ReactNode} UserControls - A React component for user controls (like avatar, profile settings).
 */
export interface NavbarProps {
  appInfo: {
    logo: ReactNode;
    name: string;
    subLine: string;
  };
  menuItems: Array<{
    url: string;
    label: string;
    child?: Array<{ url: string; label: string }>;
  }>;
  UserControls: ReactNode;
}

/**
 * Navbar component to render the app's navbar with logo, menu items, and user controls.
 * It supports mobile view with a drawer and submenu popover for items with children.
 *
 * @param {NavbarProps} props - Props for rendering the Navbar.
 * @returns {JSX.Element} The rendered Navbar component.
 */
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: theme.palette.secondary.main, // Use secondary color from MUI theme
  },
}));

const Navbar: React.FC<NavbarProps> = ({
  appInfo,
  menuItems,
  UserControls,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Popover anchor element
  const [openMenu, setOpenMenu] = useState<string | null>(null); // The label of the menu currently opened
  const [mobileOpen, setMobileOpen] = useState(false); // Toggle for mobile drawer

  /**
   * Handles opening the popover for a menu item with a submenu.
   *
   * @param {MouseEvent<HTMLElement>} event - The click event triggered by the user.
   * @param {string} label - The label of the menu item clicked.
   */
  const handleMenuClick = (event: MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget); // Set the anchor for the popover
    setOpenMenu(label); // Set the open menu label
  };

  /**
   * Closes the popover when the user clicks outside or when the submenu is closed.
   */
  const handlePopoverClose = () => {
    setAnchorEl(null); // Close the popover
    setOpenMenu(null); // Reset the open menu label
  };

  /**
   * Toggles the visibility of the mobile drawer.
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Boolean to check if the popover is open
  const openPopover = Boolean(anchorEl);

  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', pl: 2, pr: 2 }}>
      {/* Navbar content (Logo and name on left, menu on right) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Left side - Logo and app name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <StyledLink to={'/'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box>{appInfo.logo}</Box>
              <Box sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="body1" sx={{ fontSize: 24 }}>
                  {appInfo.name}
                </Typography>
                <Box sx={{ display: 'grid', justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ fontSize: 12, mr: 'auto' }}>
                    {appInfo.subLine}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledLink>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex', alignItems: 'center' },
              gap: 3,
            }}
          >
            {/* Menu items */}
            <List sx={{ display: 'flex' }}>
              {menuItems.map((item, index) => (
                <div key={index}>
                  <ListItem
                    onClick={(event) => handleMenuClick(event, item.label)}
                    sx={{ color: 'white', cursor: 'pointer', mr: 0 }}
                  >
                    <StyledLink to={item.url}>
                      <ListItemText primary={item.label} />
                    </StyledLink>

                    {/* Show expand icon if item has children */}
                    {item.child && (
                      <ListItemIcon sx={{ color: 'white', minWidth: '0px' }}>
                        {openMenu === item.label ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemIcon>
                    )}
                  </ListItem>

                  {/* Popover for Submenu Items */}
                  {item.child && openMenu === item.label && (
                    <Popover
                      open={openPopover && openMenu === item.label}
                      anchorEl={anchorEl}
                      onClose={handlePopoverClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <List>
                        {item.child.map((subItem, subIndex) => (
                          <StyledLink to={subItem.url}>
                            <ListItem key={subIndex}>
                              <ListItemText primary={subItem.label} />
                            </ListItem>
                          </StyledLink>
                        ))}
                      </List>
                    </Popover>
                  )}
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            {appInfo.name}
          </Typography>
        </Box>

        {/* Right side - User Controls */}
        <Box
          sx={{
            display: {
              sm: 'flex',
              xs: 'none',
            },
            alignItems: 'center',
            gap: 1,
          }}
        >
          {UserControls}
        </Box>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' }, color: 'white' }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for Mobile View */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {/* Mobile Drawer Menu Items */}
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <StyledLink to={item.url}>
                <ListItem
                  onClick={(event) => handleMenuClick(event, item.label)}
                  sx={{ color: 'primary.contrastText', cursor: 'pointer' }}
                >
                  <ListItemText primary={item.label} />

                  {/* Show expand icon if item has children */}
                  {item.child && (
                    <ListItemIcon>
                      {openMenu === item.label ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemIcon>
                  )}
                </ListItem>
              </StyledLink>

              {/* Popover for Submenu Items */}
              {item.child && openMenu === item.label && (
                <Popover
                  open={openPopover && openMenu === item.label}
                  anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <List>
                    {item.child.map((subItem, subIndex) => (
                      <ListItem key={subIndex}>
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Popover>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
