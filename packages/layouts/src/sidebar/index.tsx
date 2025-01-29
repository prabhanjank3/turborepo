import React, { ReactNode, useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';

export interface SidebarItem {
  icon?: ReactNode;
  label: string;
  component?: ReactNode;
  onClick?: () => void;
  children?: SidebarItem[];
}

export interface SidebarLayoutProps {
  sidebarItems: SidebarItem[];
  defaultComponent?: ReactNode;
  drawerWidth?: number;
  appInfo: {
    logo: ReactNode;
    name: string;
    subLine: string;
  };
}

export default function SidebarLayout({
  sidebarItems,
  defaultComponent,
  drawerWidth = 240,
  appInfo,
}: SidebarLayoutProps) {
  const [activeComponent, setActiveComponent] =
    useState<ReactNode>(defaultComponent);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleItemClick = (item: SidebarItem, index: string) => {
    setActiveIndex(index);
    if (item.component) {
      setActiveComponent(item.component);
    }
    if (item.onClick) {
      item.onClick();
    }
    if (isMobile) {
      setMobileOpen(false); // Close the drawer on mobile after selection
    }
  };

  const handleMenuToggle = (index: string) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderSidebarItems = (
    items: SidebarItem[],
    parentIndex = '',
    level = 0
  ) => (
    <List sx={{ mt: isMobile && !parentIndex ? 8 : 0 }}>
      {items.map((item, index) => {
        const currentIndex = parentIndex
          ? `${parentIndex}-${index}`
          : `${index}`;
        const hasChildren = item.children && item.children.length > 0;

        return (
          <React.Fragment key={currentIndex}>
            <ListItem
              onClick={() =>
                hasChildren
                  ? handleMenuToggle(currentIndex)
                  : handleItemClick(item, currentIndex)
              }
              sx={{
                pl: 2 + level * 2,
                color:
                  activeIndex === currentIndex
                    ? theme.palette.secondary.main
                    : theme.palette.primary.contrastText,
                backgroundColor:
                  activeIndex === currentIndex
                    ? theme.palette.action.selected
                    : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    color:
                      activeIndex === currentIndex
                        ? theme.palette.secondary.main
                        : theme.palette.primary.contrastText,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={item.label} />
              {hasChildren &&
                (openMenus[currentIndex] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {hasChildren && (
              <Collapse
                in={openMenus[currentIndex]}
                timeout="auto"
                unmountOnExit
              >
                {renderSidebarItems(item.children!, currentIndex, level + 1)}
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );

  const drawerContent = renderSidebarItems(sidebarItems);

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize: 25, mx: 'auto' }} noWrap>
              {appInfo.name}
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mx: 'auto',
              my: 2,
            }}
          >
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
        )}
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: isMobile ? 8 : 0, // Ensure that main content is pushed down by the app bar on mobile
          minHeight: '100vh',
          display: 'flex', // Make sure to allow the content to stretch
          flexDirection: 'column', // Keep content properly aligned vertically
        }}
      >
        {/* Always render activeComponent */}
        {activeComponent}
      </Box>
    </Box>
  );
}
