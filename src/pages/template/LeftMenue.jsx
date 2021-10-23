import React from 'react';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const MenuItem = ({ title, path, icon }) => (
  <ListItem button component={Link} to={path}>
    <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
);

const LeftMenue = ({ open, drawerWidth, mdTheme, toggleDrawer }) => {
  return (
    <List>
      <div>
        <MenuItem title='Inicio' path='/' icon={DashboardIcon} />
        <MenuItem title='Sumador' path='/sumador' icon={ShoppingCartIcon} />
        <MenuItem
          title='Sumador Redux'
          path='/sumador-redux'
          icon={PeopleIcon}
        />
        <MenuItem title='Productos' path='/productos' icon={BarChartIcon} />
        <MenuItem
          title='Productos Redux'
          path='/productos-redux'
          icon={LayersIcon}
        />
        <MenuItem title='Tareas' path='/tareas' icon={LayersIcon} />
      </div>
    </List>
  );
};

export default LeftMenue;
