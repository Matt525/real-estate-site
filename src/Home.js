import React, { Component } from 'react'
import './Home.css';
import Property from './Property';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const gridStyles = makeStyles(theme=>({
    root: { 
        flexGrow: 1
    },
    control: {
        padding: theme.spacing(2),
      },
      paper : { 
            padding: theme.spacing(2),          
      }
}))


export default function Home() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = gridStyles();
  
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
        return (
            <div class="container">
                <Grid container>
                    
                        <Property />
                    
                </Grid>
            </div>
        )
}
