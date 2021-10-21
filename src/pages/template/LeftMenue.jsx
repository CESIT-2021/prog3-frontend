import React from 'react';

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Toolbar from '@mui/material/Toolbar';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import MuiDrawer from '@mui/material/Drawer';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const MenuItem = ({ title, path, icon }) => (
  <ListItem button component={Link} to={path}>
      <ListItemIcon>
        {React.createElement(icon)}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
)

const LeftMenue = ({ open, drawerWidth, mdTheme, toggleDrawer }) => {
  return (
    <Drawer variant='permanent' open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <div>
          
          <MenuItem title='Inicio' path='/' icon={DashboardIcon} />
          <MenuItem title='Sumador' path='/sumador' icon={ShoppingCartIcon} />
          <MenuItem title='Sumador Redux' path='/sumador-redux' icon={PeopleIcon} />
          <MenuItem title='Productos' path='/productos' icon={BarChartIcon} />
          <MenuItem title='Productos Redux' path='/productos-redux' icon={LayersIcon} />
          <MenuItem title='Tareas' path='/tareas' icon={LayersIcon} />
        </div>
      </List>
    </Drawer>
  );
};

export default LeftMenue;
