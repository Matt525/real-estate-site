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
        marginLeft: 'auto!important',
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

    updateItems(showItems >= propData.length ? showItems : showItems + 6)
        
    }
    


    
    /// ASSIGN PROPS DATA TO VARIABLE 
            let propData = props.housingData; 
            console.log(propData.photos);
            

    
//*************************************************************************

            // Card info with data from props array //
    
    const propertyInfo = propData.slice(0,showItems).map((propData,item)=>(

                        <Card className={classes.root} key={item} onClick={()=>{
                        // Set map coordinates to location of clicked card
                    }}>
                        
                        <CardActionArea>
                                <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={propData.photos[item].href}
                                            title="Contemplative Reptile"
                                />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                    <p>{propData.address.line}</p>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                    <h1>${propData.community.price_max}<strong>/Month</strong></h1> {propData.community.beds_max}<strong>BR</strong> || {propData.community.sqft_max} <strong>sqft</strong>
                                            </Typography>
                                        </CardContent>
                        </CardActionArea>


                                        <CardActions>

                                                            {/* If(favoriteArray.includes(item) || activeFavorite === item){
                                                                document.getElementById('icon').classList.toggle('animateFavorite')
                                                            } else{ 
                                                                document.getElementById('icon').classList.toggle('');
                                                            }*/}
                                                        


                                                            {/* Favorite icon pushed to favoriteArray as state */}

                                        <FavoriteIcon id="icon" onClick={() =>{
                                                            setFavorite(activeFavorite = item);
                                                            setArray(favoriteArray => [...favoriteArray, activeFavorite])
                                                    }
                                                            } 
                                                            // Conditional rendering for className using the turnary operator. 
                                                            className={`${favoriteArray.includes(item) || activeFavorite === item ? "animateFavorite" : ""}`} style={{cursor: 'pointer'}}
                                        
                                        />
                                                            <ul><li style={{color: 'purple'}}>{propData.prop_status.toUpperCase()}</li></ul>

                                                            <Button onClick={handleShowItems} variant="outlined" size="small" color="primary" className={classes.button}>
                                                                    Learn More
                                                            </Button>
                                        </CardActions>
                    </Card>
    ))




                                    /// Rendering Card Component 

                    return(
                        <div>
                            {propertyInfo}
                            <Button onClick={handleShowItems} variant="outlined" size="small" color="primary" className={classes.button}>Show More</Button>
                        </div>
                        )

                    }