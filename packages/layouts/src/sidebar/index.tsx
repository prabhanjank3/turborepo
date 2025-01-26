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
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export interface SidebarItem {
  icon?: ReactNode;
  label: string;
  component?: ReactNode; // The component to render when the item is clicked
  onClick?: () => void; // Additional optional click handler
  children?: SidebarItem[]; // Child menu items
}

export interface SidebarLayoutProps {
  sidebarItems: SidebarItem[]; // Items to be rendered in the sidebar
  defaultComponent?: ReactNode; // Default component to show when no item is selected
  drawerWidth?: number; // Width of the sidebar (default: 240px)
}

export default function SidebarLayout({
  sidebarItems,
  defaultComponent,
  drawerWidth = 240,
}: SidebarLayoutProps) {
  const [activeComponent, setActiveComponent] =
    useState<ReactNode>(defaultComponent);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const theme = useTheme();

  const handleItemClick = (item: SidebarItem, index: string) => {
    setActiveIndex(index);
    if (item.component) {
      setActiveComponent(item.component);
    }
    if (item.onClick) {
      item.onClick();
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
    <List>
      {items.map((item, index) => {
        const currentIndex = parentIndex
          ? `${parentIndex}-${index}`
          : `${index}`;
        const hasChildren = item.children && item.children.length > 0;

        return (
          <React.Fragment key={currentIndex}>
            <ListItem
              onClick={() => {
                if (hasChildren) {
                  handleMenuToggle(currentIndex);
                } else {
                  handleItemClick(item, currentIndex);
                }
              }}
              sx={{
                pl: 2 + level * 2, // Adjust padding-left based on the nesting level
                color:
                  activeIndex === currentIndex
                    ? theme.palette.secondary.main
                    : theme.palette.primary.contrastText,
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

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
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
        {renderSidebarItems(sidebarItems)}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {activeComponent}
      </Box>
    </Box>
  );
}
