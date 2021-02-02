import React from 'react'
import './Home.css';
import Property from './Property';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            housingData: [],
            showItems: 6,
        }

    }


    componentDidMount() { 

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=200&offset=0&sort=relevance",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "realtor.p.rapidapi.com",
                "x-rapidapi-key": "f76ca2b1c4msh33c4abca334d588p16879ajsn952b22a139fd",
                "useQueryString": true
            }
        }
        
        $.ajax(settings).done(response=>{
            let dataArray = [];
            for(let i = 0; i < response.properties.length; i++){
                let obj = {};
                obj = {...response.properties[i]}
                dataArray.push(obj);
            }
            this.setState({housingData: dataArray});
        });

            }
        

// response.properties
    render() {
        
        // Assigned housing data state to variable for readability.
        let dataLoaded = this.state.housingData;
    
        return ( 
            <div className="container">
                
                <Grid container>

                    
                    {this.state && dataLoaded ?
                        <Property 
                               housingData={this.state.housingData}
                        />
                        : <CircularProgress className="loader" />}
                        
                </Grid>
                
                                    
            </div>
            
        )
}

}
