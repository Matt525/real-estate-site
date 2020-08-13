import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './NavStyles.css';
import {Button, ButtonGroup, Table} from '@material-ui/core';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';

const navStyles = makeStyles(theme=> ({
  root: { 
    flexGrow: 1,
    width: '100vw',
    backgroundColor: 'linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(9,121,116,0.9136029411764706) 0%, rgba(0,212,255,1) 0%, rgba(0,164,255,1) 58%',
    position: 'sticky',
    top: '0',
    zIndex: 1000
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: '0%',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: '#fff',
  },
  buttonBar : { 
    backgroundColor: '#fff'
  },
  login: {
    display: 'flex',
  }
}))

export default function NavbarMenu() {
 const classes = navStyles();
  return (
    <div className={classes.root}>
      
    <AppBar position="static" >
    <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
            <Typography className="title" variant="h5">
            
              Capstone<HouseRoundedIcon className="homeIcon" />Realty<CopyrightRoundedIcon className="copyWright" />
            </Typography>
      
        
          <Button variant="outlined" className="buttonStyle">Login</Button>
    
        </Toolbar>

        
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className={classes.buttonBar}>
          <label className={classes.buttonBar}>Bedrooms </label>     
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
        </ButtonGroup>
        
    </AppBar>
  </div>

  )
}
