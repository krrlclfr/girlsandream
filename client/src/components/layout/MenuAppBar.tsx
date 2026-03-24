import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link as RouterLink } from 'react-router-dom';
import { NavigationItems } from '../../types/navbar/navbar'
import DialogBoxCart from '../DialogBox'
import { getToken } from '../../utils/token';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navItems: NavigationItems [] = [
  { route: 'Home', path: '/'},
  { route: 'Jorts', path: '/product'},
  { route: 'Size Guide', path: '/size-guide'}
];

const MenuAppBar = () => {
  const token = getToken()
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div">
            GND 
          </Typography>
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <List sx={{ display: 'flex', justifyContent: 'center' }}>
              {navItems.map((item, key) => (
                <ListItem key={key} sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                  <Button component={RouterLink} to={item.path} color="inherit">  {item.route} </Button> 
                </ListItem>
              ))}
            </List>
          </Box>
          <Box> 
            <List sx={{ display: 'flex',  whiteSpace: 'nowrap'}}>
              <ListItem>
                  <DialogBoxCart />
              </ListItem>
              {token? (
                  <ListItem>
                    <AccountCircleIcon />
                  </ListItem>
                ):(
                  <>
                    <ListItem>
                      <Button component={RouterLink} to="/registration" color="inherit">  Sign Up </Button> 
                    </ListItem>
                    <ListItem> 
                      <Button component={RouterLink} to="/login" color="inherit">  Login  </Button> 
                    </ListItem>
                  </>
                )
            }
            </List>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar