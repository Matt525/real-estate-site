import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {info} from './data';
import './Property.css';

const cardStyles = makeStyles(theme=>({
    
    root: { 
        padding: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
            maxWidth: 475,
            minWidth: 450,
            minHeight: 400,
            float: 'right',
            margin: '2em',
            overflow: 'hidden',
        },
    [theme.breakpoints.down('md')]: { 
        maxWidth: 475,
        minWidth: 550,
        minHeight: 400,
        float: 'right',
        margin: '2em',
        overflow: 'hidden',
    },  
        
    },
    button : { 
        marginLeft: 'auto!important'
    },
    favorite : { 
        cursor: 'pointer'
    }
    

}))






export default function Property(props){

    let [activeFavorite, setFavorite] = useState(-1);
    let [favoriteArray, setArray] = useState([]);
    let [showItems, updateItems] = useState(6);
    const classes = cardStyles();    

//*************************************************************************

    // /// CONSOLE TEST RUN 

    let handleShowItems =()=>{

    updateItems(showItems >= info.length ? showItems : showItems + 6)
        
    }

    /// MAP OUT INFO ID ARRAY
    let propData = props.housingData; 
//*************************************************************************

    const propertyInfo = info.slice(0,showItems).map((info,item)=>(
        <Card className={classes.root}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    // image={propData[item].tvCollectionImageLink}
                    image={info.img}
                    title="Contemplative Reptile"
                    />
                            <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {/* {propData[item].streetAddress} */}
                                        {info.address}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <h1>{info.price}<strong>/Month</strong></h1> {info.rooms} || {info.sqft} <strong>sqft</strong>
                                    </Typography>
                            </CardContent>
            </CardActionArea>


                <CardActions>
                
                <FavoriteIcon id="icon" onClick={() =>{
                            setFavorite(activeFavorite = item);
                            setArray(favoriteArray => [...favoriteArray, activeFavorite])
                            }
                                    } 
                                    
                className={`${activeFavorite === item ? "animateFavorite" : ""}`} style={{cursor: 'pointer'}}
                
                />
                    <ul><li style={{color: 'purple'}}>House For Rent</li></ul>

                            <Button onClick={handleShowItems} variant="outlined" size="small" color="primary" className={classes.button}>
                                    Learn More
                            </Button>
            </CardActions>
        </Card>
    ))

return(
    
    <div>
    {propertyInfo}
    <Button onClick={handleShowItems} variant="outlined" size="small" color="primary" className={classes.button}>Show More</Button>
    </div>
)

}